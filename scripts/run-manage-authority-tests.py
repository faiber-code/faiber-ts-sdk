#!/usr/bin/env python3
"""Owned local Manage/Agentic authority verification; no live services/config changes."""
import hashlib,json,os,re,subprocess,tempfile,time,uuid
from pathlib import Path
SDK=Path(__file__).resolve().parents[1]
MANAGE=SDK.parent/'Service/infera-manage'
AGENTIC=Path(os.environ.get('INFERA_AUTHORITY_AGENTIC_REPO',str(SDK.parent/'infera-agentic'))).resolve()
OUT=SDK/'contracts/service-capabilities/evidence'
SEED='infera-owned-contract-test-key-not-a-production-key'
TARGET_MANIFESTS={}
def run(args,**kwargs):return subprocess.run(args,check=True,capture_output=True,text=True,**kwargs).stdout.strip()
def state(repo):
 paths=['src','entity','migration','auth','auth_macro','domain','ide_core','code_pipeline','faiber-agent-core','vendor','shared','.cargo','build.rs','Cargo.toml','Cargo.lock','rust-toolchain.toml']
 files=set(run(['git','ls-files','-co','--exclude-standard','--',*paths],cwd=repo).splitlines())
 rust=[str(repo/name) for name in sorted(files) if name.endswith('.rs')]
 script="import {readFileSync} from 'node:fs';import {embeddedSourceEvidence} from './scripts/embedded-source-evidence.mjs';const [root,paths]=JSON.parse(process.argv[1]);console.log(JSON.stringify(embeddedSourceEvidence(root,paths.map(([path,manifestDir])=>({path,manifestDir,text:readFileSync(path,'utf8')})))));"
 embedded=json.loads(run(['node','--input-type=module','--eval',script,json.dumps([str(repo),[[path,TARGET_MANIFESTS.get(path)] for path in rust]])],cwd=SDK))
 files.update(item['path'] for item in embedded['assets'])
 digest=hashlib.sha256()
 for name in sorted(files):digest.update(name.encode()+b'\0'+(repo/name).read_bytes()+b'\0')
 return {'revision':run(['git','rev-parse','HEAD'],cwd=repo),'checkout_sha256':digest.hexdigest(),'embedded_gaps':embedded['gaps'],'working_tree_status':run(['git','status','--porcelain'],cwd=repo)}
def restore_lock(repo,before):
 path=repo/'Cargo.lock'
 if path.read_bytes()!=before:
  temporary=repo/('.Cargo.lock.restore-'+uuid.uuid4().hex);temporary.write_bytes(before);os.replace(temporary,path)
def sdk_state():
 files=[]
 for root in [SDK/'packages',SDK/'node_modules']:
  files.extend(path for path in root.rglob('*') if path.is_file() and not path.is_symlink())
 files.extend(SDK/name for name in ['package.json','package-lock.json','scripts/verify-manage-bridge-sdk.mjs'])
 digest=hashlib.sha256()
 for path in sorted(set(files)):
  digest.update(str(path.relative_to(SDK)).encode()+b'\0'+path.read_bytes()+b'\0')
 return {'sha256':digest.hexdigest(),'files':len(set(files)),'scope':'Source, compiled package artifacts, manifests/lock, installed node_modules bytes and actual wire probe. No claim of final integrated release acceptance.'}
def main():
 OUT.mkdir(parents=True,exist_ok=True)
 # Cargo metadata binds the exact compiled target to its manifest directory.
 # Preserve input locks around resolution before capturing the tested sources.
 metadata_locks={repo:(repo/'Cargo.lock').read_bytes() for repo in [MANAGE,AGENTIC]}
 try:
  for repo in [MANAGE,AGENTIC]:
   metadata=json.loads(run(['cargo','metadata','--offline','--format-version=1','--filter-platform',next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '))],cwd=repo))
   for package in metadata['packages']:
    for target in package['targets']:TARGET_MANIFESTS[str(Path(target['src_path']).resolve())]=str(Path(package['manifest_path']).parent.resolve())
 finally:
  for repo,data in metadata_locks.items():restore_lock(repo,data)
 sdk_before=sdk_state()
 snapshots={key:state(repo) for key,repo in [('manage',MANAGE),('agentic',AGENTIC)]}
 dependencies={name:state(SDK.parent/'Service/faiber-sdk/crates'/name) for name in ['infera-idp-sdk','infera-idp-macro','infera-profile-sdk','infera-asset-sdk','infera-flow-sdk']}
 before={repo:(repo/'Cargo.lock').read_bytes() for repo in [MANAGE,AGENTIC]}
 name='infera-manage-authority-'+uuid.uuid4().hex[:8];created=False
 commands=[];started=time.monotonic();failure=None;image=None
 binary=SDK.parent/'Service/target/debug/infera_manage'
 env=dict(os.environ,INFERA_MANAGE_SDK_PROBE=str(SDK/'scripts/verify-manage-bridge-sdk.mjs'),WORKER_SHARED_SECRET=SEED,DEV='false',AUTH_ID='',AUTH_ROLES='',AUTH_PERMISSIONS='')
 try:
  run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=capability-contract-test','--name',name,'-p','127.0.0.1::27017','mongo:7.0','--bind_ip_all']);created=True
  image=run(['docker','inspect','--format','{{.Image}}',name])
  for _ in range(30):
   if subprocess.run(['docker','exec',name,'mongosh','--quiet','--eval','db.adminCommand({ping:1}).ok'],capture_output=True).returncode==0:break
   time.sleep(1)
  else:raise RuntimeError('Owned Mongo failed readiness')
  port=run(['docker','port',name,'27017/tcp']).rsplit(':',1)[1];env['INFERA_MANAGE_AUTHORITY_TEST_URI']=f'mongodb://127.0.0.1:{port}/?directConnection=true'
  binary=SDK.parent/'Service/target/debug/infera_manage';env['INFERA_MANAGE_TEST_BINARY']=str(binary)
  sequence=[('manage-authority-components',['cargo','test','--offline','--bin','infera_manage'],MANAGE),('manage-authority-binary',['cargo','build','--offline','--bin','infera_manage'],MANAGE),('agentic-manage-authority',['cargo','test','--offline','-p','infera_agentic','project::admin_open','--','--include-ignored','--test-threads=1','--nocapture'],AGENTIC)]
  for identifier,command,repo in sequence:
   start=time.monotonic();command_env=dict(env)
   if repo==AGENTIC:command_env['CARGO_TARGET_DIR']=str(SDK.parent/'infera-agentic/target')
   result=subprocess.run(command,cwd=repo,env=command_env,capture_output=True,text=True);log=(result.stdout+result.stderr).rstrip('\n')+'\n';path=OUT/(identifier+'.log');path.write_text(log)
   summaries=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',log)
   commands.append({'id':identifier,'command':' '.join(command),'exit_code':result.returncode,'duration_seconds':round(time.monotonic()-start,3),'tests_executed':sum(int(p)+int(f) for p,f,_ in summaries),'tests_failed':sum(int(f) for _,f,_ in summaries),'tests_ignored':sum(int(i) for _,_,i in summaries),'artifact_path':'evidence/'+path.name,'artifact_sha256':hashlib.sha256(log.encode()).hexdigest()})
   print(identifier,result.returncode,commands[-1]['tests_executed'],flush=True)
   if result.returncode:raise RuntimeError(identifier+' failed; see retained log')
   if identifier=='agentic-manage-authority' and 'Manage actual SDK probe: {"status":"passed"' not in log:raise RuntimeError('Actual SDK wire probe did not report success')
   if 'test' in command and (not summaries or commands[-1]['tests_ignored'] or commands[-1]['tests_failed'] or commands[-1]['tests_executed'] < (24 if repo==MANAGE else 3)):
    raise RuntimeError(identifier+' did not execute the required regressions')
  # Empty owned dotenv stops dotenvy's parent search. Neither request may bind a
  # server when configuration is absent/blank, including in explicit DEV mode.
  for dev,worker,cloud in [('false',None,None),('true',' ','')]:
   with tempfile.TemporaryDirectory(prefix='infera-manage-config-') as directory:
    Path(directory,'.env').write_text('')
    missing=dict(env,DEV=dev);missing.pop('WORKER_SHARED_SECRET',None);missing.pop('CLOUD_WORKER_SECRET',None)
    if worker is not None:missing['WORKER_SHARED_SECRET']=worker
    if cloud is not None:missing['CLOUD_WORKER_SECRET']=cloud
    result=subprocess.run([str(binary),'serve'],cwd=directory,env=missing,text=True,capture_output=True,timeout=5)
    assert result.returncode!=0 and 'Manage signing must be explicitly configured' in result.stderr,'Manage accepted missing signing configuration'
  commands.append({'id':'manage-missing-signing-startup','exit_code':0,'tests_executed':2,'tests_failed':0,'tests_ignored':0,'scope':'Actual Manage serve process rejects absent and whitespace-only seeds, including DEV mode, before listening.'})
 except Exception as error:failure=str(error)
 finally:
  locks={}
  for repo,data in before.items():
   resolved=(repo/'Cargo.lock').read_bytes();digest=hashlib.sha256(resolved).hexdigest();path=OUT/(repo.name+'-authority-resolved-'+digest+'.Cargo.lock');path.write_bytes(resolved)
   locks[repo.name]={'input_sha256':hashlib.sha256(data).hexdigest(),'resolved_sha256':digest,'artifact_path':'evidence/'+path.name};restore_lock(repo,data)
  after={key:state(repo) for key,repo in [('manage',MANAGE),('agentic',AGENTIC)]}
  dependencies_after={key:state(SDK.parent/'Service/faiber-sdk/crates'/key) for key in dependencies}
  sdk_after=sdk_state()
  same=sdk_before==sdk_after and all(snapshots[key]['checkout_sha256']==after[key]['checkout_sha256'] and snapshots[key]['embedded_gaps']==after[key]['embedded_gaps'] for key in snapshots) and all(dependencies[key]['checkout_sha256']==dependencies_after[key]['checkout_sha256'] for key in dependencies)
  passed=not failure and same and all(not s['embedded_gaps'] for s in [*snapshots.values(),*dependencies.values()])
  report={'schema_version':'1.0','status':'passed' if passed else 'failed','kind':'local_cross_service_authority_regression','observed_at':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'failure':failure,'duration_seconds':round(time.monotonic()-started,3),'source':snapshots,'source_after':after,'agentic_checkout':str(AGENTIC),'cargo_target_manifest_bindings':{path:manifest for path,manifest in TARGET_MANIFESTS.items() if 'sse-stream/src/lib.rs' in path},'runner_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),'source_unchanged_during_run':same,'rust_sdk_dependencies':dependencies,'rust_sdk_dependencies_after':dependencies_after,'resolved_locks':locks,'sdk_before':sdk_before,'sdk_after':sdk_after,'sdk_wire_probe_required':True,'mongo_image':image,'commands':commands,'scope':'Actual Manage process and Agentic admin-status handler, real disposable Mongo current membership/configuration; Control lifecycle HTTP is an explicit fixture. Production gateway, Control lifecycle itself, IDP exchange/refresh, SDK/Manage UI and deployment remain unverified. No live configuration or migration.'}
  if binary.exists():report['manage_binary_sha256']=hashlib.sha256(binary.read_bytes()).hexdigest()
  (OUT/'manage-authority-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['status','failure','source_unchanged_during_run','duration_seconds']},indent=2))
  if created:subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 if not passed:raise SystemExit(1)
if __name__=='__main__':main()
