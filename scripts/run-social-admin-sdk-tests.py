#!/usr/bin/env python3
"""Real owned PostgreSQL, mounted Social and actual compiled SDK; all inputs fenced."""
from pathlib import Path
import hashlib,json,os,re,signal,subprocess,time,uuid,shutil
SDK=Path(__file__).resolve().parents[1]
REPO=Path(os.environ['INFERA_SOCIAL_SDK_TEST_REPO']).resolve()
OUT=SDK/'contracts/service-capabilities/evidence'
def run(args,cwd=REPO):return subprocess.check_output(args,cwd=cwd,text=True,stderr=subprocess.PIPE,timeout=90).strip()
def tree(root):
 h=hashlib.sha256();count=0
 for p in sorted(root.rglob('*')):
  rel=p.relative_to(root)
  if any(x in ['target','node_modules','.git','__pycache__']for x in rel.parts)or not p.is_file():continue
  h.update(str(rel).encode()+b'\0'+p.read_bytes()+b'\0');count+=1
 return {'sha256':h.hexdigest(),'files':count}
def dependencies(packages):return {p['id']:{'manifest_path':p['manifest_path'],'source':p['source'],**tree(Path(p['manifest_path']).parent)}for p in packages}
def sdk_state():
 values={str(p.relative_to(SDK)):tree(p)for p in [SDK/'packages',SDK/'scripts']}
 values['node_modules']={str(p.relative_to(SDK/'node_modules')):hashlib.sha256(p.read_bytes()).hexdigest()for p in sorted((SDK/'node_modules').rglob('*'))if p.is_file()and not p.is_symlink()}
 for name in ['package-lock.json','service-contracts.json']:values[name]=hashlib.sha256((SDK/name).read_bytes()).hexdigest()
 return values

def main():
 assert not run(['git','status','--porcelain']),'Service must be a clean explicit commit'
 assert shutil.disk_usage(REPO).free>1.5*1024**3,'Need1.5GiB free before owned build; no cache cleanup authorized'
 lock=(REPO/'Cargo.lock').read_bytes();revision=run(['git','rev-parse','HEAD'])
 host=next(x.split(': ',1)[1]for x in run(['rustc','-vV']).splitlines()if x.startswith('host: '))
 meta=json.loads(run(['cargo','metadata','--locked','--offline','--format-version=1','--filter-platform',host]));before=dependencies(meta['packages']);sdk_before=sdk_state()
 name='infera-social-sdk-'+uuid.uuid4().hex[:8];created=False;reason=None;started=time.monotonic();process=None
 args=['cargo','--config','profile.test.package.infera_social.debug=0','--config','profile.test.package.infera_social.strip="debuginfo"','test','--locked','--offline','--lib','--test','sdk_admin_wire','--','--include-ignored','--test-threads=1']
 log=OUT/'social-admin-sdk-tests.log';OUT.mkdir(parents=True,exist_ok=True)
 try:
  run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=social-sdk-contract-test','-e','POSTGRES_HOST_AUTH_METHOD=trust','-e','POSTGRES_DB=infera_social_sdk_contracts','-p','127.0.0.1::5432','--name',name,'postgres:16-alpine']);created=True
  image=run(['docker','inspect','--format','{{.Image}}',name])
  for _ in range(30):
   if subprocess.run(['docker','exec',name,'pg_isready','-U','postgres'],capture_output=True).returncode==0:break
   time.sleep(1)
  else:raise RuntimeError('Owned database readiness failed')
  port=run(['docker','port',name,'5432/tcp']).rsplit(':',1)[1]
  env=dict(os.environ,DATABASE_URL=f'postgresql://postgres@127.0.0.1:{port}/infera_social_sdk_contracts',DEV='false',CARGO_TARGET_DIR='/Users/mohammadralizadeh/Infera/Service/target',CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',INFERA_SOCIAL_SDK_TEST_PROBE=str(SDK/'scripts/verify-social-admin-sdk-wire.mjs'))
  for key in ['AUTH_ID','AUTH_PERMISSIONS','AUTH_ROLES','SOCIAL_LOCATION_ENCRYPTION_KEY_B64','SOCIAL_ASSERTION_ISSUERS_JSON']:env.pop(key,None)
  with log.open('w')as stream:
   process=subprocess.Popen(args,cwd=REPO,env=env,stdout=stream,stderr=subprocess.STDOUT,start_new_session=True)
   while process.poll()is None:
    if shutil.disk_usage(REPO).free<1024**3:reason='Stopped owned process group below1GiB free; no cache deletion'
    elif time.monotonic()-started>900:reason='Stopped owned process group after900seconds'
    if reason:
     os.killpg(process.pid,signal.SIGTERM)
     try:process.wait(timeout=10)
     except subprocess.TimeoutExpired:os.killpg(process.pid,signal.SIGKILL);process.wait()
     break
    time.sleep(1)
  after=dependencies(meta['packages']);sdk_after=sdk_state();same=before==after and sdk_before==sdk_after and (REPO/'Cargo.lock').read_bytes()==lock and not run(['git','status','--porcelain'])
  text=log.read_text();counts=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);executed=sum(int(p)+int(f)for p,f,i in counts);failed=sum(int(f)for p,f,i in counts);ignored=sum(int(i)for p,f,i in counts)
  report={'schema_version':'1.0','status':'passed'if process.returncode==0 and same and executed==8 and not failed and not ignored else 'failed','command':' '.join(args),'reason':reason,'exit_code':process.returncode,'tests_executed':executed,'tests_failed':failed,'tests_ignored':ignored,'source_revisions':{'social':revision},'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'lock_sha256':hashlib.sha256(lock).hexdigest(),'postgres_image':image,'duration_seconds':round(time.monotonic()-started,3),'artifact_path':'evidence/'+log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest(),'runner_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),'scope':'Six existing units plus two real PostgreSQL tests, including an actual Axios HTTP workflow exercising37 admin operations and37 missing-permission denials, organization predicates, mutations, lifecycle and receipts. Trusted forwarded fixture context is not deployed IDP/gateway or current project membership verification. No external provider effect or deployment acceptance.'}
  (OUT/'social-admin-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k]for k in ['status','reason','tests_executed','tests_failed','tests_ignored','source_unchanged_during_run','duration_seconds']}))
  if report['status']!='passed':raise SystemExit(1)
 finally:
  if process and process.poll()is None:os.killpg(process.pid,signal.SIGTERM);process.wait(timeout=10)
  if created:subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
if __name__=='__main__':main()
