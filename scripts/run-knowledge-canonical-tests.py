#!/usr/bin/env python3
"""Canonical Knowledge unit baseline with resolved dependency fencing and disk guard."""
from pathlib import Path
import hashlib,json,os,re,signal,subprocess,time
SDK=Path(__file__).resolve().parents[1]
REPO=Path(os.environ['INFERA_KNOWLEDGE_TEST_REPO']).resolve()
OUT=SDK/'contracts/service-capabilities/evidence'
def command(args):return subprocess.check_output(args,cwd=REPO,text=True,stderr=subprocess.PIPE).strip()
def package_state(root):
 digest=hashlib.sha256();count=0
 for path in sorted(root.rglob('*')):
  relative=path.relative_to(root)
  if any(part in ['target','node_modules','.git'] for part in relative.parts) or not path.is_file():continue
  digest.update(str(relative).encode()+b'\0'+path.read_bytes()+b'\0');count+=1
 return {'sha256':digest.hexdigest(),'files':count}
def snapshot(packages):
 return {p['id']:{'name':p['name'],'version':p['version'],'source':p['source'],'manifest_path':p['manifest_path'],**package_state(Path(p['manifest_path']).parent)} for p in packages}
def main():
 assert command(['git','rev-parse','HEAD'])=='70b8a21721dd34125b8f0e167e06da9ad3287223'
 assert not command(['git','status','--porcelain']),'Use a clean canonical checkout'
 lock=(REPO/'Cargo.lock').read_bytes();host=next(x.split(': ',1)[1] for x in command(['rustc','-vV']).splitlines() if x.startswith('host: '))
 metadata=json.loads(command(['cargo','metadata','--locked','--offline','--format-version=1','--filter-platform',host]))
 before=snapshot(metadata['packages']);out=OUT/'knowledge-canonical-unit-retry.log';started=time.monotonic();minimum=6*1024**3;stop=None
 env=dict(os.environ,CARGO_TARGET_DIR=str(SDK.parent/'Service/target'),CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0')
 args=['cargo','test','--locked','--offline','--lib']
 with out.open('w') as stream:
  process=subprocess.Popen(args,cwd=REPO,env=env,stdout=stream,stderr=subprocess.STDOUT,start_new_session=True)
  while process.poll() is None:
   stat=os.statvfs(REPO);free=stat.f_bavail*stat.f_frsize
   if free<minimum:stop='Stopped owned compiler process group at6GiB free-space guard; no cache deletion.'
   elif time.monotonic()-started>900:stop='Stopped owned compiler process group at900second bound.'
   if stop:
    os.killpg(process.pid,signal.SIGTERM)
    try:process.wait(timeout=10)
    except subprocess.TimeoutExpired:os.killpg(process.pid,signal.SIGKILL);process.wait()
    break
   time.sleep(1)
 after=snapshot(metadata['packages']);text=out.read_text();summary=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text)
 same=before==after and (REPO/'Cargo.lock').read_bytes()==lock and not command(['git','status','--porcelain'])
 report={'schema_version':'1.0','observed_at':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),'status':'passed' if process.returncode==0 and same and summary else 'failed','command':' '.join(args),'exit_code':process.returncode,'reason':stop,'source_revision':command(['git','rev-parse','HEAD']),'checkout':str(REPO),'lock_sha256':hashlib.sha256(lock).hexdigest(),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'source_unchanged_during_run':same,'tests_executed':sum(int(p)+int(f) for p,f,i in summary),'tests_failed':sum(int(f) for p,f,i in summary),'tests_ignored':sum(int(i) for p,f,i in summary),'duration_seconds':round(time.monotonic()-started,3),'artifact_path':'evidence/'+out.name,'artifact_sha256':hashlib.sha256(out.read_bytes()).hexdigest(),'runner_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),'rustc':command(['rustc','-vV']),'scope':'Clean fetched canonical Knowledge revision and actual resolved package directories, including pinned git RustSDK and registry inputs. Unit tests only; no real database, gateway, durable worker crash/replay, ingestion, model quality, publication, migration or rollout acceptance.'}
 (OUT/'knowledge-canonical-unit-retry.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['status','exit_code','reason','tests_executed','tests_failed','tests_ignored','source_unchanged_during_run','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
if __name__=='__main__':main()
