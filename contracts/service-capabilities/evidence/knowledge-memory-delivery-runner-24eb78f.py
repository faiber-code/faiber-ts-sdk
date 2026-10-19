#!/usr/bin/env python3
"""Owned real-PostgreSQL E-W tests; never uses a live service or cleans host caches."""
from pathlib import Path
import hashlib,json,os,re,signal,subprocess,time,uuid
SDK=Path(__file__).resolve().parents[1];REPO=Path(os.environ['INFERA_KNOWLEDGE_DELIVERY_REPO']).resolve();OUT=SDK/'contracts/service-capabilities/evidence'
def run(args,**kw):return subprocess.check_output(args,text=True,stderr=subprocess.PIPE,**kw).strip()
def snapshot(packages):
 states={}
 for package in packages:
  root=Path(package['manifest_path']).parent;digest=hashlib.sha256();count=0
  for path in sorted(root.rglob('*')):
   relative=path.relative_to(root)
   if any(part in ['target','node_modules','.git'] for part in relative.parts) or not path.is_file():continue
   digest.update(str(relative).encode()+b'\0'+path.read_bytes()+b'\0');count+=1
  states[package['id']]={'manifest':str(root/'Cargo.toml'),'source':package['source'],'sha256':digest.hexdigest(),'files':count}
 return states
def main():
 OUT.mkdir(parents=True,exist_ok=True);assert not run(['git','status','--porcelain'],cwd=REPO),'Commit the owned test source first'
 host=next(x.split(': ',1)[1] for x in run(['rustc','-vV']).splitlines() if x.startswith('host: '));metadata=json.loads(run(['cargo','metadata','--locked','--offline','--format-version=1','--filter-platform',host],cwd=REPO));before=snapshot(metadata['packages']);lock=(REPO/'Cargo.lock').read_bytes()
 name='infera-memory-delivery-'+uuid.uuid4().hex[:8];db='infera_memory_contract_'+uuid.uuid4().hex[:12];created=False;failure=None;started=time.monotonic();result=None;image=None;minimum_free=4*1024**3
 command=['cargo','--config','profile.test.package.infera_knowledge.debug=0','--config','profile.test.package.infera_knowledge.strip="debuginfo"','test','--locked','--offline','--lib','--','--include-ignored','--skip','platform::memory_delivery_tests::worker_process_entry','--test-threads=1']
 log=OUT/'knowledge-memory-delivery-tests.log'
 try:
  run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=memory-delivery-contract-test','--name',name,'-e','POSTGRES_PASSWORD=owned-test-password','-e','POSTGRES_DB='+db,'-p','127.0.0.1::5432','pgvector/pgvector:pg16']);created=True;image=run(['docker','inspect','--format','{{.Image}}',name])
  for _ in range(40):
   if subprocess.run(['docker','exec',name,'pg_isready','-U','postgres','-d',db],capture_output=True).returncode==0:break
   time.sleep(.25)
  else:raise RuntimeError('Owned PostgreSQL readiness failed')
  run(['docker','exec',name,'psql','-U','postgres','-d',db,'-v','ON_ERROR_STOP=1','-c','CREATE EXTENSION IF NOT EXISTS vector; CREATE EXTENSION IF NOT EXISTS pg_trgm;'])
  port=run(['docker','port',name,'5432/tcp']).rsplit(':',1)[1];env=dict(os.environ,INFERA_MEMORY_TEST_DATABASE_URL=f'postgres://postgres:owned-test-password@127.0.0.1:{port}/{db}',DEV='false',CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_TARGET_DIR=str(SDK.parent/'Service/target'));env.pop('KNOWLEDGE_SERVICE_TOKEN',None)
  with log.open('w') as output:
   process=subprocess.Popen(command,cwd=REPO,env=env,stdout=output,stderr=subprocess.STDOUT,start_new_session=True)
   while process.poll() is None:
    stat=os.statvfs(REPO)
    if stat.f_bavail*stat.f_frsize<minimum_free:failure='Stopped owned compiler/test process group at4GiB free-space guard; no host-cache cleanup.'
    elif time.monotonic()-started>900:failure='Stopped owned test process group at900second bound.'
    if failure:
     os.killpg(process.pid,signal.SIGTERM)
     try:process.wait(timeout=10)
     except subprocess.TimeoutExpired:os.killpg(process.pid,signal.SIGKILL);process.wait()
     break
    time.sleep(.5)
   result=process.returncode
  if result and not failure:failure='Cargo or real PostgreSQL regressions failed; retained complete output'
 except Exception as error:failure=str(error)
 finally:
  after=snapshot(metadata['packages']);same=before==after and (REPO/'Cargo.lock').read_bytes()==lock and not run(['git','status','--porcelain'],cwd=REPO)
  text=log.read_text() if log.exists() else '';summaries=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);executed=sum(int(p)+int(f) for p,f,i in summaries);failed=sum(int(f) for p,f,i in summaries);ignored=sum(int(i) for p,f,i in summaries)
  report={'schema_version':'1.0','status':'passed' if not failure and same and result==0 and executed>=53 and not failed and not ignored else 'failed','failure':failure,'source_revision':run(['git','rev-parse','HEAD'],cwd=REPO),'checkout':str(REPO),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'source_unchanged_during_run':same,'lock_sha256':hashlib.sha256(lock).hexdigest(),'postgres_image':image,'owned_database':db,'command':command,'exit_code':result,'tests_executed':executed,'tests_failed':failed,'tests_ignored':ignored,'child_harness':'worker_process_entry excluded from parent counts; explicitly invoked owned subprocesses exercise physical process death','minimum_free_bytes':minimum_free,'duration_seconds':round(time.monotonic()-started,3),'artifact_path':'evidence/'+log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest() if log.exists() else None,'runner_sha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),'scope':'Owned disposable PostgreSQL with full actual migrations and production worker helpers; current wire receipt characterization, lease recovery/fences, atomic effects and real process crash/expiry/concurrency. No live gateway/project subject authorization, producer outbox, source-version correction, forgetting fence, E-ID acceptance, deployment/publication or memory cutover.'}
  (OUT/'knowledge-memory-delivery-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['status','failure','tests_executed','tests_failed','source_unchanged_during_run','duration_seconds']},indent=2))
  if created:subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 if report['status']!='passed':raise SystemExit(1)
if __name__=='__main__':main()
