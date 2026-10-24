#!/usr/bin/env python3
"""Actual Payment router/SDK with owned dependencies and immutable production/test fences."""
from pathlib import Path
import os,json,subprocess,time,hashlib,signal,re,shutil,uuid
SDK=Path(__file__).resolve().parents[1];REPO=Path(os.environ['INFERA_PAYMENT_SDK_TEST_REPO']).resolve();OUT=Path(os.environ['INFERA_PAYMENT_SDK_VERIFICATION_OUTPUT']).resolve();OUT.mkdir(parents=True,exist_ok=False)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def files(root):
 return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest()for p in sorted(root.rglob('*'))if p.is_file()and not p.is_symlink()and not any(x in p.relative_to(root).parts for x in ['target','.git','__pycache__'])}
def tree(root):
 data=files(root);return {'files':len(data),'sha256':hashlib.sha256(json.dumps(data,sort_keys=True,separators=(',',':')).encode()).hexdigest()}
pinned=json.loads((SDK/'service-source-revisions.json').read_text())['payment']['revision'];production=os.environ.get('INFERA_PAYMENT_SDK_PRODUCTION_REVISION',pinned);source=run(['git','rev-parse','HEAD'],cwd=REPO)
assert not run(['git','status','--porcelain'],cwd=REPO)
assert run(['git','merge-base',pinned,production],cwd=REPO)==pinned
assert run(['git','merge-base',production,source],cwd=REPO)==production
assert run(['git','diff','--name-only',production,source],cwd=REPO)=='tests/sdk_admin_wire.rs'
if shutil.disk_usage(REPO).free<4*1024**3:raise RuntimeError('Less than4GiB free; no compiler/container/cleanup started')
host=next(line.split(': ',1)[1]for line in run(['rustc','-vV']).splitlines()if line.startswith('host: '));meta=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=REPO));idp=[p['id']for p in meta['packages']if p['name']=='infera-idp-sdk'];assert len(idp)==1
assert all('dev-fallback'not in node['features']for node in meta['resolve']['nodes']if node['id']in idp)
def dependencies():return {p['id']:{'source':p['source'],**tree(Path(p['manifest_path']).parent)}for p in meta['packages']}
def sdk_inputs():
 data={}
 for part in ['packages','node_modules']:
  for name,value in files(SDK/part).items():data[part+'/'+name]=value
 for name in ['scripts/run-payment-admin-sdk-tests.py','scripts/verify-payment-admin-sdk-wire.mjs','service-source-revisions.json','package-lock.json']:data[name]=hashlib.sha256((SDK/name).read_bytes()).hexdigest()
 return data
before=dependencies();sdk_before=sdk_inputs();lock_before=hashlib.sha256((REPO/'Cargo.lock').read_bytes()).hexdigest();shutil.copyfile(REPO/'Cargo.lock',OUT/'payment-resolved-Cargo.lock');created=[];images={};failure=None;code=None;started=time.monotonic();log=OUT/'payment-sdk-tests.log'
env=dict(os.environ,CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_PROFILE_TEST_DEBUG='0',CARGO_TARGET_DIR=str(Path(os.environ['FAIBER_WORKSPACE_ROOT'])/'Service/target'),DEV='false',INFERA_PAYMENT_SDK_PROBE=str(SDK/'scripts/verify-payment-admin-sdk-wire.mjs'))
for key in ['DATABASE_URL','BROKER_URL','AUTH_ID','AUTH_ROLES','AUTH_PERMISSIONS','APP_KEY','INFERA_DEV_AUTH_USER_ID','ZARINPAL_MODE']:env.pop(key,None)
command=['cargo','test','--locked','--offline','--test','sdk_admin_wire','--','--test-threads=1','--nocapture']
try:
 ports={}
 for kind,image,args in [('postgres','postgres:16-alpine',['-e','POSTGRES_PASSWORD=owned-password','-e','POSTGRES_DB=infera_payment_sdk','-p','127.0.0.1::5432']),('rabbit','rabbitmq:3-alpine',['--tmpfs','/var/lib/rabbitmq:rw,uid=100,gid=101,mode=0700','-e','RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS=+S 2:2 +SDcpu 1 +SDio 1','-p','127.0.0.1::5672'])]:
  name='infera-payment-sdk-'+kind+'-'+uuid.uuid4().hex[:8];run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=payment-sdk-test','--name',name,*args,image]);created.append(name);images[kind]=run(['docker','inspect','--format','{{.Image}}',name]);ready=['pg_isready','-h','127.0.0.1','-U','postgres','-d','infera_payment_sdk']if kind=='postgres'else['rabbitmq-diagnostics','-q','check_port_connectivity']
  for _ in range(60):
   if subprocess.run(['docker','exec',*(['--user','rabbitmq']if kind=='rabbit'else[]),name,*ready],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=10).returncode==0:break
   time.sleep(.5)
  else:raise RuntimeError('Owned '+kind+' listener readiness failed')
  ports[kind]=run(['docker','port',name,'5432/tcp'if kind=='postgres'else'5672/tcp']).rsplit(':',1)[1]
 env.update(INFERA_PAYMENT_SDK_DATABASE_URL=f"postgres://postgres:owned-password@127.0.0.1:{ports['postgres']}/infera_payment_sdk",INFERA_PAYMENT_SDK_BROKER_URL=f"amqp://guest:guest@127.0.0.1:{ports['rabbit']}/%2f")
 with log.open('w')as output:
  proc=subprocess.Popen(command,cwd=REPO,env=env,stdin=subprocess.DEVNULL,stdout=output,stderr=subprocess.STDOUT,start_new_session=True)
  while proc.poll()is None:
   if shutil.disk_usage(REPO).free<3*1024**3:failure='Owned process stopped at3GiB free-space guard'
   elif time.monotonic()-started>900:failure='Owned process stopped at900second bound'
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
 after=dependencies();sdk_after=sdk_inputs();same=before==after and sdk_before==sdk_after and not run(['git','status','--porcelain'],cwd=REPO)and run(['git','rev-parse','HEAD'],cwd=REPO)==source;lock_after=hashlib.sha256((REPO/'Cargo.lock').read_bytes()).hexdigest();text=log.read_text()if log.exists()else'';matches=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p)for p,f,i in matches);failed=sum(int(f)for p,f,i in matches);ignored=sum(int(i)for p,f,i in matches);wire=None
 for match in re.finditer(r'\{"status":"passed","id":"payment-admin-actual-sdk"',text):
  try:wire=json.JSONDecoder().raw_decode(text[match.start():])[0]
  except ValueError:continue
 ok=code==0 and not failure and same and lock_before==lock_after and passed==1 and failed==0 and ignored==0 and wire and wire.get('assertions',0)>=80
 report={'status':'passed'if ok else'failed','failure':failure,'exit_code':code,'command':command,'production_candidate_revision':production,'sdk_pinned_source_revision':pinned,'candidate_matches_sdk_pin':production==pinned,'source_revision':source,'sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'lock_before_sha256':lock_before,'lock_after_sha256':lock_after,'tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'wire_result':wire,'duration_seconds':round(time.monotonic()-started,3),'owned_dependency_images':images,'scope':'One full-production-router Payment SDK native test, actual owned PostgreSQL/full migrations/RabbitMQ, gateway CRUD/list and seeded negative/audit/report transaction cases. Trusted gateway header fixture; no provider success or live payment, gateway/JWT/cookie, current deployed source or all-capability certification.'};(OUT/'payment-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k]for k in ['status','failure','exit_code','tests_passed','source_unchanged_during_run','candidate_matches_sdk_pin','wire_result','duration_seconds']},indent=2))
 if not ok:raise SystemExit(1)
