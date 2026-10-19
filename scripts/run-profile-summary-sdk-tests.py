#!/usr/bin/env python3
"""Bounded source-fenced Profile REST/compiled SDK run using owned PostgreSQL/RabbitMQ."""
from pathlib import Path
import os,json,subprocess,time,hashlib,signal,re,shutil,uuid
SDK=Path(__file__).resolve().parents[1]
REPO=Path(os.environ['INFERA_PROFILE_SUMMARY_TEST_REPO']).resolve()
OUT=Path(os.environ.get('INFERA_PROFILE_SUMMARY_VERIFICATION_OUTPUT',SDK/'contracts/service-capabilities/evidence')).resolve();OUT.mkdir(parents=True,exist_ok=True)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def files(root):
 return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(root.rglob('*')) if p.is_file() and not p.is_symlink() and not any(x in p.relative_to(root).parts for x in ['target','.git','__pycache__'])}
def tree(root):
 d=files(root);return {'files':len(d),'sha256':hashlib.sha256(json.dumps(d,sort_keys=True,separators=(',',':')).encode()).hexdigest()}
assert not run(['git','status','--porcelain'],cwd=REPO),'Profile test source must be clean'
if shutil.disk_usage(REPO).free<4*1024**3:raise RuntimeError('Less than4GiB free; no cleanup performed')
pin=json.loads((SDK/'service-source-revisions.json').read_text())['profile']['revision']
assert all(p.startswith('tests/') for p in run(['git','diff','--name-only',pin,'HEAD'],cwd=REPO).splitlines()),'Test candidate must not change Profile production source'
host=next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '))
meta=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=REPO))
def dependencies():return {p['id']:{'source':p['source'],**tree(Path(p['manifest_path']).parent)} for p in meta['packages']}
def sdk_inputs():
 result={}
 for part in ['packages','node_modules']:
  for name,h in files(SDK/part).items():result[part+'/'+name]=h
 for part in ['scripts/run-profile-summary-sdk-tests.py','service-contracts.json','service-source-revisions.json','package-lock.json']:result[part]=hashlib.sha256((SDK/part).read_bytes()).hexdigest()
 return result
before=dependencies();sdk_before=sdk_inputs();source=run(['git','rev-parse','HEAD'],cwd=REPO);started=time.monotonic();failure=None;code=None;proc=None
log=OUT/'profile-summary-sdk-tests.log';command=['cargo','test','--locked','--offline','--test','summary_rest_sdk','--','--ignored','--nocapture'];containers=[];images={}
env=dict(os.environ,SUMMARY_SDK_PACKAGE_ENTRY=str(SDK/'packages/profile/dist/index.js'),CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_TARGET_DIR=str(Path(os.environ.get('FAIBER_WORKSPACE_ROOT',SDK.parent))/'Service/target'))
try:
 ports={}
 for kind,image,args in [('postgres','postgres:16-alpine',['-e','POSTGRES_PASSWORD=summary-test','-e','POSTGRES_DB=summary_test','-p','127.0.0.1::5432']),('rabbit','rabbitmq:3-alpine',['--tmpfs','/var/lib/rabbitmq:rw,uid=100,gid=101,mode=0700','-e','RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS=+S 2:2 +SDcpu 1 +SDio 1','-p','127.0.0.1::5672'])]:
  name='infera-profile-sdk-'+kind+'-'+uuid.uuid4().hex[:8]
  run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=profile-summary-sdk-test','--name',name,*args,image]);containers.append(name)
  images[kind]=run(['docker','inspect','--format','{{.Image}}',name])
  ready=['pg_isready','-h','127.0.0.1','-U','postgres','-d','summary_test'] if kind=='postgres' else ['rabbitmq-diagnostics','-q','check_port_connectivity']
  for _ in range(60):
   if subprocess.run(['docker','exec',*(['--user','rabbitmq'] if kind=='rabbit' else []),name,*ready],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=10).returncode==0:break
   time.sleep(.5)
  else:raise RuntimeError('Owned '+kind+' listener readiness failed')
  ports[kind]=run(['docker','port',name,'5432/tcp' if kind=='postgres' else '5672/tcp']).rsplit(':',1)[1]
 env.update(SUMMARY_TEST_DATABASE_URL=f"postgres://postgres:summary-test@127.0.0.1:{ports['postgres']}/summary_test",SUMMARY_TEST_BROKER_URL=f"amqp://guest:guest@127.0.0.1:{ports['rabbit']}/%2f",SUMMARY_SDK_CONSUMER=str(REPO/'tests/summary-rest-sdk.mjs'))
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
 for name in containers:
  subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 after=dependencies();sdk_after=sdk_inputs();text=log.read_text() if log.exists() else '';matches=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p) for p,f,i in matches);failed=sum(int(f) for p,f,i in matches);ignored=sum(int(i) for p,f,i in matches)
 wire=None
 for match in re.finditer(r'\{\s*"status"\s*:\s*"passed"',text):
  try:wire=json.JSONDecoder().raw_decode(text[match.start():])[0]
  except ValueError:continue
  if wire.get('assertions')==348 and len(wire.get('operations',[]))==20:break
 same=before==after and sdk_before==sdk_after and source==run(['git','rev-parse','HEAD'],cwd=REPO) and not run(['git','status','--porcelain'],cwd=REPO)
 report={'status':'passed' if code==0 and not failure and passed==1 and failed==0 and ignored==0 and same and wire and wire.get('assertions')==348 and len(wire.get('operations',[]))==20 else 'failed','failure':failure,'exit_code':code,'source_revision':source,'production_source_revision':pin,'sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'command':command,'owned_dependency_images':images,'tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'wire_result':wire,'duration_seconds':round(time.monotonic()-started,3),'artifact_path':log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest() if log.exists() else None,'scope':'All20 mounted Profile summary operations with compiled current SDK, real PostgreSQL/RabbitMQ and actual worker logic. IDP/Agentic/MCP evidence and gateway identities are deterministic fixtures; minimal identity tables, no live provider/billing, namespace/current gateway verification, six-domain interoperability or deployed acceptance.'}
 (OUT/'profile-summary-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k] for k in ['status','failure','exit_code','tests_passed','tests_failed','source_unchanged_during_run','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
