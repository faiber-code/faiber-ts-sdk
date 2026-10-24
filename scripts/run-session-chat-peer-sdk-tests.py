#!/usr/bin/env python3
"""Source-fenced real Session/Chat pair; owned PostgreSQL/RabbitMQ, bounded builds."""
from pathlib import Path
import os,json,subprocess,time,hashlib,signal,re,shutil,uuid
SDK=Path(__file__).resolve().parents[1];SESSION=Path(os.environ['INFERA_SESSION_PEER_TEST_REPO']).resolve();CHAT=Path(os.environ['INFERA_CHAT_SDK_TEST_REPO']).resolve();OUT=Path(os.environ['INFERA_SESSION_PEER_VERIFICATION_OUTPUT']).resolve();OUT.mkdir(parents=True,exist_ok=True)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def files(root):
 return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(root.rglob('*')) if p.is_file() and not p.is_symlink() and not any(x in p.relative_to(root).parts for x in ['target','.git','__pycache__'])}
def tree(root):
 d=files(root);return {'files':len(d),'sha256':hashlib.sha256(json.dumps(d,sort_keys=True,separators=(',',':')).encode()).hexdigest()}
for repo in [SESSION,CHAT]:assert not run(['git','status','--porcelain'],cwd=repo)
if shutil.disk_usage(SESSION).free<4*1024**3:raise RuntimeError('Less than4GiB free; no cleanup performed')
production=json.loads((SDK/'service-source-revisions.json').read_text());assert run(['git','rev-parse','HEAD'],cwd=CHAT)==production['chat']['revision'];assert run(['git','merge-base',production['session']['revision'],'HEAD'],cwd=SESSION)==production['session']['revision']
# The Session descendant may add this test module only; production sources stay canonical.
assert not run(['git','diff',production['session']['revision'],'HEAD','--','.',':!src/main.rs',':!src/sdk_peer_tests.rs'],cwd=SESSION)
canonical_main=run(['git','show',production['session']['revision']+':src/main.rs'],cwd=SESSION)
assert (SESSION/'src/main.rs').read_text().strip()==(canonical_main+'\n\n#[cfg(test)]\nmod sdk_peer_tests;').strip()
host=next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '));metas={repo.name:json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=repo)) for repo in [SESSION,CHAT]}
def dependencies():return {service:{p['id']:{'source':p['source'],**tree(Path(p['manifest_path']).parent)}for p in meta['packages']}for service,meta in metas.items()}
def sdk_inputs():
 d={}
 for part in ['packages','node_modules']:
  for name,h in files(SDK/part).items():d[part+'/'+name]=h
 for part in ['scripts/run-session-chat-peer-sdk-tests.py','scripts/verify-session-chat-peer-sdk-wire.mjs','service-contracts.json','service-source-revisions.json','package-lock.json']:d[part]=hashlib.sha256((SDK/part).read_bytes()).hexdigest()
 return d
before=dependencies();sdk_before=sdk_inputs();started=time.monotonic();created=[];images={};failure=None;code=None;commands=[];binary=None;binary_hash=None
for repo in [SESSION,CHAT]:shutil.copyfile(repo/'Cargo.lock',OUT/(repo.name+'-resolved-Cargo.lock'))
env=dict(os.environ,CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_PROFILE_TEST_DEBUG='0',CARGO_TARGET_DIR=str(Path(os.environ.get('FAIBER_WORKSPACE_ROOT',SDK.parent))/'Service/target'),DEV='false',AWS_EC2_METADATA_DISABLED='true',INFERA_SESSION_PEER_SDK_PROBE=str(SDK/'scripts/verify-session-chat-peer-sdk-wire.mjs'))
for key in ['DATABASE_URL','BROKER_URL','AUTH_ID','AUTH_ROLES','AUTH_PERMISSIONS','INFERA_DEV_AUTH_USER_ID','CHAT_SERVICE_URL','DRM_SERVICE_URL','LMS_SERVICE_URL','ASSET_SERVICE_URL','PROFILE_SERVICE_URL','WORKER_AUTH_SEED']:env.pop(key,None)
def bounded(command,repo,log):
 with log.open('w')as out:
  error=None
  proc=subprocess.Popen(command,cwd=repo,env=env,stdin=subprocess.DEVNULL,stdout=out,stderr=subprocess.STDOUT,start_new_session=True)
  while proc.poll() is None:
   error=None
   if shutil.disk_usage(SESSION).free<3*1024**3:error='Owned process stopped at3GiB free-space guard'
   elif time.monotonic()-started>900:error='Owned process stopped at900second bound'
   if error:
    os.killpg(proc.pid,signal.SIGTERM)
    try:proc.wait(timeout=10)
    except subprocess.TimeoutExpired:os.killpg(proc.pid,signal.SIGKILL);proc.wait()
    break
   time.sleep(.5)
  commands.append({'command':command,'cwd':str(repo),'exit_code':proc.returncode,'failure':error,'artifact':log.name,'sha256':hashlib.sha256(log.read_bytes()).hexdigest()})
  if error:raise RuntimeError(error)
  if proc.returncode:raise RuntimeError('Command failed: '+log.name)
try:
 build=['cargo','--config','profile.test.package.infera_chat.debug=0','--config','profile.test.package.infera_chat.strip="debuginfo"','test','--locked','--offline','--lib','--no-run','--message-format=json'];build_log=OUT/'chat-build.jsonl';bounded(build,CHAT,build_log)
 for line in build_log.read_text().splitlines():
  try:item=json.loads(line)
  except ValueError:continue
  if item.get('reason')=='compiler-artifact'and item.get('target',{}).get('name')=='infera_chat'and item.get('executable'):binary=Path(item['executable'])
 if binary is None:raise RuntimeError('Actual Chat test executable missing')
 binary_hash=hashlib.sha256(binary.read_bytes()).hexdigest();env['INFERA_CHAT_TEST_BINARY']=str(binary);ports={};session_db='infera_session_sdk_'+uuid.uuid4().hex[:10];chat_db='infera_chat_sdk_'+uuid.uuid4().hex[:10]
 for kind,image,args in [('postgres','postgres:16-alpine',['-e','POSTGRES_PASSWORD=owned-password','-e','POSTGRES_DB='+session_db,'-p','127.0.0.1::5432']),('rabbit','rabbitmq:3-alpine',['--tmpfs','/var/lib/rabbitmq:rw,uid=100,gid=101,mode=0700','-e','RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS=+S 2:2 +SDcpu 1 +SDio 1','-p','127.0.0.1::5672'])]:
  name='infera-session-chat-sdk-'+kind+'-'+uuid.uuid4().hex[:8];run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=session-chat-sdk-test','--name',name,*args,image]);created.append(name);images[kind]=run(['docker','inspect','--format','{{.Image}}',name]);ready=['pg_isready','-h','127.0.0.1','-U','postgres','-d',session_db]if kind=='postgres'else['rabbitmq-diagnostics','-q','check_port_connectivity']
  for _ in range(60):
   if subprocess.run(['docker','exec',*(['--user','rabbitmq']if kind=='rabbit'else[]),name,*ready],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=10).returncode==0:break
   time.sleep(.5)
  else:raise RuntimeError('Owned '+kind+' listener readiness failed')
  ports[kind]=run(['docker','port',name,'5432/tcp'if kind=='postgres'else'5672/tcp']).rsplit(':',1)[1]
  if kind=='postgres':run(['docker','exec',name,'createdb','-U','postgres',chat_db])
 env.update(INFERA_SESSION_PEER_DATABASE_URL=f"postgres://postgres:owned-password@127.0.0.1:{ports['postgres']}/{session_db}",INFERA_CHAT_SDK_DATABASE_URL=f"postgres://postgres:owned-password@127.0.0.1:{ports['postgres']}/{chat_db}",BROKER_URL=f"amqp://guest:guest@127.0.0.1:{ports['rabbit']}/%2f")
 command=['cargo','test','--locked','--offline','--bin','mra_session','--','--include-ignored','--test-threads=1','--nocapture'];bounded(command,SESSION,OUT/'session-chat-sdk-tests.log');code=0
except Exception as error:failure=str(error)
finally:
 for name in created:subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 after=dependencies();sdk_after=sdk_inputs();same=before==after and sdk_before==sdk_after and all(not run(['git','status','--porcelain'],cwd=repo)for repo in [SESSION,CHAT]);binary_same=binary is not None and hashlib.sha256(binary.read_bytes()).hexdigest()==binary_hash
 log=OUT/'session-chat-sdk-tests.log';text=log.read_text()if log.exists()else'';matches=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p)for p,f,i in matches);failed=sum(int(f)for p,f,i in matches);ignored=sum(int(i)for p,f,i in matches);wire=None
 for match in re.finditer(r'\{\s*"status"\s*:\s*"passed"',text):
  try:item=json.JSONDecoder().raw_decode(text[match.start():])[0]
  except ValueError:continue
  if item.get('id')=='session-chat-actual-sdk':wire=item
 report={'status':'passed'if code==0 and not failure and same and binary_same and passed==70 and failed==0 and ignored==0 and wire and wire.get('status')=='passed'and wire.get('assertions')==26 else'failed','failure':failure,'exit_code':code,'commands':commands,'source_revisions':{repo.name:run(['git','rev-parse','HEAD'],cwd=repo)for repo in [SESSION,CHAT]},'production_revisions':{k:production[k]['revision']for k in ['session','chat']},'sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'chat_test_binary':str(binary),'chat_test_binary_sha256':binary_hash,'chat_test_binary_unchanged':binary_same,'session_tests':69,'nested_chat_tests':1,'parsed_tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'wire_result':wire,'duration_seconds':round(time.monotonic()-started,3),'owned_dependency_images':images,'scope':'Full canonical-derived Session suite plus actual repaired Chat peer test with compiled Session SDK and owned separate PostgreSQL databases/RabbitMQ. Trusted gateway actor fixture; no live IDP/gateway, room-scoped AI/group, other peer success, SSE or Sockudo delivery certification.'}
 (OUT/'session-chat-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps({k:report[k]for k in ['status','failure','exit_code','parsed_tests_passed','tests_failed','source_unchanged_during_run','chat_test_binary_unchanged','wire_result','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
