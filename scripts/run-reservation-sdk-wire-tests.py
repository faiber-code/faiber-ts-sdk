#!/usr/bin/env python3
"""Bounded immutable Reservation candidate against owned PostgreSQL/RabbitMQ."""
from pathlib import Path
import os,json,subprocess,time,hashlib,signal,re,shutil,uuid
SDK=Path(__file__).resolve().parents[1];REPO=Path(os.environ['INFERA_RESERVATION_SDK_TEST_REPO']).resolve();OUT=Path(os.environ['INFERA_RESERVATION_SDK_VERIFICATION_OUTPUT']).resolve();OUT.mkdir(parents=True,exist_ok=True)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def files(root):
 return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(root.rglob('*')) if p.is_file() and not p.is_symlink() and not any(x in p.relative_to(root).parts for x in ['target','.git','__pycache__'])}
def tree(root):
 d=files(root);return {'files':len(d),'sha256':hashlib.sha256(json.dumps(d,sort_keys=True,separators=(',',':')).encode()).hexdigest()}
assert not run(['git','status','--porcelain'],cwd=REPO)
source=run(['git','rev-parse','HEAD'],cwd=REPO)
if shutil.disk_usage(REPO).free<4*1024**3:raise RuntimeError('Less than4GiB free; no cleanup performed')
host=next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '));meta=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=REPO))
def dependencies():return {p['id']:{'source':p['source'],**tree(Path(p['manifest_path']).parent)} for p in meta['packages']}
def sdk_inputs():
 d={}
 for part in ['packages','node_modules']:
  for name,h in files(SDK/part).items():d[part+'/'+name]=h
 for part in ['scripts/run-reservation-sdk-wire-tests.py','service-contracts.json','service-source-revisions.json','package-lock.json','scripts/verify-reservation-sdk-wire.mjs']:
  if (SDK/part).exists():d[part]=hashlib.sha256((SDK/part).read_bytes()).hexdigest()
 return d
kind=os.environ.get('INFERA_RESERVATION_SDK_TEST_KIND','red');assert kind in ['red','suite']
command=['cargo','test','--locked','--offline',*(['--test','provider_capacity_test','legacy_user_claim_is_not_offered_as_public_available_capacity']if kind=='red' else ['--lib','--tests']),'--','--include-ignored','--test-threads=1','--nocapture']
before=dependencies();sdk_before=sdk_inputs();started=time.monotonic();failure=None;code=None;created=[];images={};log=OUT/'reservation-sdk-tests.log';lock=OUT/'reservation-resolved-Cargo.lock';shutil.copyfile(REPO/'Cargo.lock',lock)
env=dict(os.environ,CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_PROFILE_TEST_DEBUG='0',CARGO_TARGET_DIR=str(Path(os.environ.get('FAIBER_WORKSPACE_ROOT',SDK.parent))/'Service/target'),DEV='false',FLOW_EVENTS_ENABLED='false',AWS_EC2_METADATA_DISABLED='true',INFERA_RESERVATION_SDK_TEST_PROBE=str(SDK/'scripts/verify-reservation-sdk-wire.mjs'))
for key in ['AUTH_ID','AUTH_ROLES','AUTH_PERMISSIONS','INFERA_DEV_AUTH_USER_ID']:env.pop(key,None)
try:
 ports={}
 for kind2,image,args in [('postgres','postgres:16-alpine',['-e','POSTGRES_PASSWORD=owned-password','-e','POSTGRES_DB=infera_contracts','-p','127.0.0.1::5432']),('rabbit','rabbitmq:3-alpine',['--tmpfs','/var/lib/rabbitmq:rw,uid=100,gid=101,mode=0700','-e','RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS=+S 2:2 +SDcpu 1 +SDio 1','-p','127.0.0.1::5672'])]:
  name='infera-reservation-sdk-'+kind2+'-'+uuid.uuid4().hex[:8];run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=reservation-sdk-test','--name',name,*args,image]);created.append(name);images[kind2]=run(['docker','inspect','--format','{{.Image}}',name]);ready=['pg_isready','-h','127.0.0.1','-U','postgres','-d','infera_contracts'] if kind2=='postgres' else ['rabbitmq-diagnostics','-q','check_port_connectivity']
  for _ in range(60):
   if subprocess.run(['docker','exec',*(['--user','rabbitmq']if kind2=='rabbit'else[]),name,*ready],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=10).returncode==0:break
   time.sleep(.5)
  else:raise RuntimeError('Owned '+kind2+' listener readiness failed')
  ports[kind2]=run(['docker','port',name,'5432/tcp'if kind2=='postgres'else'5672/tcp']).rsplit(':',1)[1]
 env.update(DATABASE_URL=f"postgres://postgres:owned-password@127.0.0.1:{ports['postgres']}/infera_contracts",BROKER_URL=f"amqp://guest:guest@127.0.0.1:{ports['rabbit']}/%2f")
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
 for name in created:subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 after=dependencies();sdk_after=sdk_inputs();text=log.read_text()if log.exists()else'';matches=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p)for p,f,i in matches);failed=sum(int(f)for p,f,i in matches);ignored=sum(int(i)for p,f,i in matches);same=before==after and sdk_before==sdk_after and source==run(['git','rev-parse','HEAD'],cwd=REPO)and not run(['git','status','--porcelain'],cwd=REPO)
 wire=None
 for match in re.finditer(r'\{\s*"status"\s*:\s*"passed"',text):
  try:candidate=json.JSONDecoder().raw_decode(text[match.start():])[0]
  except ValueError:continue
  if len(candidate.get('operations',[]))==30:wire=candidate;break
 wire_required=kind=='suite' and (REPO/'tests/sdk_wire_test.rs').exists()
 report={'status':'passed'if code==0 and not failure and passed>=(1 if kind=='red'else (42 if wire_required else 41))and (not wire_required or wire is not None)and failed==0 and ignored==0 and same else'failed','failure':failure,'exit_code':code,'source_revision':source,'sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'command':command,'test_kind':kind,'wire_result':wire,'production_source_revision':json.loads((SDK/'service-source-revisions.json').read_text())['reservation']['revision'],'tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'duration_seconds':round(time.monotonic()-started,3),'owned_dependency_images':images,'artifact_path':log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest()if log.exists()else None,'resolved_cargo_lock_artifact_path':lock.name,'resolved_cargo_lock_sha256':hashlib.sha256(lock.read_bytes()).hexdigest(),'scope':'Owned real PostgreSQL/RabbitMQ and immutable standalone locked dependency closure. Filtered legacy-claim regression or full backend suite. When wire_result is present, all30 actual mounted operations are called through current compiled SDK. Gateway identities are trusted fixtures, not live JWT/namespace/IDP membership or cross-service user existence proof.'}
 (OUT/'reservation-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k]for k in ['status','failure','exit_code','tests_passed','tests_failed','source_unchanged_during_run','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
