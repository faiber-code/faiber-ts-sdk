#!/usr/bin/env python3
"""Actual CRM legacy fallback subrouter/CORS and current SDK, with bounded compilation."""
from pathlib import Path
import os,json,subprocess,time,hashlib,signal,re,shutil
SDK=Path(__file__).resolve().parents[1];REPO=Path(os.environ['INFERA_CRM_FALLBACK_TEST_REPO']).resolve();OUT=Path(os.environ.get('INFERA_CRM_FALLBACK_VERIFICATION_OUTPUT',SDK/'contracts/service-capabilities/evidence')).resolve();OUT.mkdir(parents=True,exist_ok=True)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def files(root):
 return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(root.rglob('*')) if p.is_file() and not p.is_symlink() and not any(x in p.relative_to(root).parts for x in ['target','.git','__pycache__'])}
def tree(root):
 d=files(root);return {'files':len(d),'sha256':hashlib.sha256(json.dumps(d,sort_keys=True,separators=(',',':')).encode()).hexdigest()}
assert not run(['git','status','--porcelain'],cwd=REPO)
source=run(['git','rev-parse','HEAD'],cwd=REPO);assert source==json.loads((SDK/'service-source-revisions.json').read_text())['crm']['revision']
if shutil.disk_usage(REPO).free<4*1024**3:raise RuntimeError('Less than4GiB free; no cleanup performed')
host=next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '))
meta=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=REPO))
def dependencies():return {p['id']:{'source':p['source'],**tree(Path(p['manifest_path']).parent)} for p in meta['packages']}
def sdk_inputs():
 d={}
 for part in ['packages','node_modules']:
  for name,h in files(SDK/part).items():d[part+'/'+name]=h
 for part in ['scripts/run-crm-fallback-sdk-tests.py','scripts/verify-crm-fallback-sdk-wire.mjs','service-contracts.json','service-source-revisions.json','package-lock.json']:d[part]=hashlib.sha256((SDK/part).read_bytes()).hexdigest()
 return d
before=dependencies();sdk_before=sdk_inputs();started=time.monotonic();failure=None;code=None;log=OUT/'crm-fallback-sdk-tests.log'
lock=OUT/'crm-fallback-resolved-Cargo.lock';shutil.copyfile(REPO/'Cargo.lock',lock)
command=['cargo','test','--locked','--offline','--lib','--','--include-ignored','--test-threads=1','--nocapture']
env=dict(os.environ,CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_PROFILE_TEST_DEBUG='0',CARGO_TARGET_DIR=str(Path(os.environ.get('FAIBER_WORKSPACE_ROOT',SDK.parent))/'Service/target'),INFERA_CRM_FALLBACK_SDK_PROBE=str(SDK/'scripts/verify-crm-fallback-sdk-wire.mjs'))
for key in ['DATABASE_URL','STATE_DATA_PATH','ASSET_SERVICE_URL','GAME_SERVICE_TOKEN','POULSTAR_ORGANIZATION_ID']:env.pop(key,None)
try:
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
after=dependencies();sdk_after=sdk_inputs();text=log.read_text() if log.exists() else '';matches=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p) for p,f,i in matches);failed=sum(int(f) for p,f,i in matches);ignored=sum(int(i) for p,f,i in matches);same=before==after and sdk_before==sdk_after and source==run(['git','rev-parse','HEAD'],cwd=REPO) and not run(['git','status','--porcelain'],cwd=REPO)
report={'status':'passed' if code==0 and not failure and passed>=12 and failed==0 and ignored==0 and same and '"assertions":59' in text else 'failed','failure':failure,'exit_code':code,'source_revision':source,'sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'command':command,'environment':{k:env[k] for k in ['CARGO_BUILD_JOBS','CARGO_INCREMENTAL','CARGO_PROFILE_TEST_DEBUG']},'tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'duration_seconds':round(time.monotonic()-started,3),'artifact_path':log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest() if log.exists() else None,'resolved_cargo_lock_artifact_path':lock.name,'resolved_cargo_lock_sha256':hashlib.sha256(lock.read_bytes()).hexdigest(),'scope':'Actual production CRM legacy fallback and production CORS through compiled SDK, explicit nine HTTP methods (CONNECT with a real custom adapter; default CONNECT rejects), response/error/header behavior. No mocked handler responses. Not native CRM domain permissions/data or whole-main API normalization/live deployment acceptance.'}
(OUT/'crm-fallback-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['status','failure','exit_code','tests_passed','tests_failed','source_unchanged_during_run','duration_seconds']},indent=2))
if report['status']!='passed':raise SystemExit(1)
