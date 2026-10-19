#!/usr/bin/env python3
"""Owned PostgreSQL/actual mounted Chat router and compiled SDK; never uses live services."""
from pathlib import Path
import os,json,subprocess,time,uuid,hashlib,signal,re,shutil
SDK=Path(__file__).resolve().parents[1];REPO=Path(os.environ['INFERA_CHAT_SDK_TEST_REPO']).resolve();OUT=Path(os.environ.get('INFERA_CHAT_SDK_VERIFICATION_OUTPUT',SDK/'contracts/service-capabilities/evidence')).resolve();OUT.mkdir(parents=True,exist_ok=True)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def files(root):
 return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(root.rglob('*')) if p.is_file() and not p.is_symlink() and not any(x in p.relative_to(root).parts for x in ['target','.git','__pycache__'])}
assert not run(['git','status','--porcelain'],cwd=REPO)
if shutil.disk_usage(REPO).free<4*1024**3:raise RuntimeError('Less than4GiB free; no cache cleanup performed')
host=next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '))
meta=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=REPO))
def dependencies():return {p['id']:{'source':p['source'],'files':files(Path(p['manifest_path']).parent)} for p in meta['packages']}
def sdk_inputs():
 result={}
 for part in ['packages','node_modules']:
  for n,h in files(SDK/part).items():result[part+'/'+n]=h
 for part in ['scripts/verify-chat-personal-sdk-wire.mjs','scripts/run-chat-personal-sdk-tests.py','service-contracts.json','service-source-revisions.json','package-lock.json']:result[part]=hashlib.sha256((SDK/part).read_bytes()).hexdigest()
 return result
before=dependencies();sdk_before=sdk_inputs();name='infera-chat-sdk-'+uuid.uuid4().hex[:8];db='infera_chat_sdk_'+uuid.uuid4().hex[:10];created=False;failure=None;code=None;started=time.monotonic();image=None;log=OUT/'chat-personal-sdk-tests.log'
command=['cargo','--config','profile.test.package.infera_chat.debug=0','--config','profile.test.package.infera_chat.strip="debuginfo"','test','--locked','--offline','--lib','sdk_personal_router_tests::','--','--include-ignored','--test-threads=1','--nocapture']
try:
 run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=chat-sdk-contract-test','--name',name,'-e','POSTGRES_PASSWORD=owned-password','-e','POSTGRES_DB='+db,'-p','127.0.0.1::5432','postgres:16-alpine']);created=True;image=run(['docker','inspect','--format','{{.Image}}',name])
 for _ in range(60):
  if subprocess.run(['docker','exec',name,'pg_isready','-h','127.0.0.1','-U','postgres','-d',db],capture_output=True).returncode==0:break
  time.sleep(.5)
 else:raise RuntimeError('Owned PostgreSQL readiness failed')
 port=run(['docker','port',name,'5432/tcp']).rsplit(':',1)[1];env=dict(os.environ,INFERA_CHAT_SDK_DATABASE_URL=f'postgres://postgres:owned-password@127.0.0.1:{port}/{db}',INFERA_CHAT_SDK_TEST_PROBE=str(SDK/'scripts/verify-chat-personal-sdk-wire.mjs'),DEV='false',CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_TARGET_DIR=str(Path(os.environ.get('FAIBER_WORKSPACE_ROOT',SDK.parent))/'Service/target'))
 with log.open('w') as out:
  proc=subprocess.Popen(command,cwd=REPO,env=env,stdout=out,stderr=subprocess.STDOUT,start_new_session=True)
  while proc.poll() is None:
   if shutil.disk_usage(REPO).free<3*1024**3:failure='Owned compiler/test stopped at3GiB free-space guard'
   elif time.monotonic()-started>900:failure='Owned compiler/test stopped at900second bound'
   if failure:
    os.killpg(proc.pid,signal.SIGTERM)
    try:proc.wait(timeout=10)
    except subprocess.TimeoutExpired:os.killpg(proc.pid,signal.SIGKILL);proc.wait()
    break
   time.sleep(.5)
  code=proc.returncode
except Exception as error:failure=str(error)
finally:
 after=dependencies();sdk_after=sdk_inputs();text=log.read_text() if log.exists() else '';matches=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p) for p,f,i in matches);failed=sum(int(f) for p,f,i in matches);ignored=sum(int(i) for p,f,i in matches);same=before==after and sdk_before==sdk_after
 report={'status':'passed' if code==0 and not failure and passed>=1 and failed==0 and ignored==0 and same and '"assertions":19' in text else 'failed','failure':failure,'exit_code':code,'source_revision':run(['git','rev-parse','HEAD'],cwd=REPO),'sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'command':command,'tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'duration_seconds':round(time.monotonic()-started,3),'image':image,'artifact_path':log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest() if log.exists() else None,'scope':'Actual mounted Chat router plus compiled Axios SDK and real PostgreSQL; trusted forwarded actor fixture, not live gateway/current identity or actual Sockudo event delivery acceptance.'}
 (OUT/'chat-personal-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['status','failure','exit_code','tests_passed','tests_failed','source_unchanged_during_run','duration_seconds']},indent=2))
 if created:subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 if report['status']!='passed':raise SystemExit(1)
