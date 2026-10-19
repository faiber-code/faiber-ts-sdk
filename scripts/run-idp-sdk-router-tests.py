#!/usr/bin/env python3
"""Owned source-fenced IDP/Manage acceptance; no live credentials, clusters or publication."""
from pathlib import Path
import os,json,subprocess,time,uuid,hashlib,signal,re,shutil
SDK=Path(__file__).resolve().parents[1];ROOT=Path(os.environ.get('FAIBER_WORKSPACE_ROOT',SDK.parent)).resolve();REPO=Path(os.environ['INFERA_IDP_SDK_TEST_REPO']).resolve();OUT=Path(os.environ.get('INFERA_IDP_SDK_VERIFICATION_OUTPUT',SDK/'contracts/service-capabilities/evidence')).resolve();OUT.mkdir(parents=True,exist_ok=True)
def run(args,**kw):return subprocess.check_output(args,stdin=subprocess.DEVNULL,stderr=subprocess.PIPE,text=True,timeout=90,**kw).strip()
def snapshot(root,parts):
 out={}
 for part in parts:
  base=root/part
  for p in sorted(base.rglob('*')) if base.is_dir() else [base]:
   if p.is_file() and not p.is_symlink() and 'target' not in p.relative_to(root).parts and '.git' not in p.relative_to(root).parts:out[str(p.relative_to(root))]=hashlib.sha256(p.read_bytes()).hexdigest()
 return out
assert not run(['git','status','--porcelain'],cwd=REPO)
if shutil.disk_usage(REPO).free<4*1024**3:raise RuntimeError('Less than4GiB free')
host=next(line.split(': ',1)[1] for line in run(['rustc','-vV']).splitlines() if line.startswith('host: '))
metadata=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=REPO))
def dependencies():
 return {p['id']:{'source':p['source'],'files':snapshot(Path(p['manifest_path']).parent,['.'])} for p in metadata['packages']}
MANAGE=Path(os.environ['INFERA_MANAGE_IDP_TEST_REPO']).resolve()
assert not run(['git','status','--porcelain'],cwd=MANAGE)
manage_before=snapshot(MANAGE,['src','Cargo.toml','Cargo.lock'])
manage_meta=json.loads(run(['cargo','metadata','--locked','--offline','--filter-platform',host,'--format-version','1'],cwd=MANAGE));metadata['packages']=list({p['id']:p for p in metadata['packages']+manage_meta['packages']}.values())
build_command=['cargo','--config','profile.test.package.infera_manage.debug=0','--config','profile.test.package.infera_manage.strip="debuginfo"','test','--locked','--offline','--no-run','--message-format=json']
build_env=dict(os.environ,CARGO_TARGET_DIR=str(ROOT/'Service/target'),CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0')
build_started=time.monotonic()
with (OUT/'idp-manage-test-build.jsonl').open('w') as stdout,(OUT/'idp-manage-test-build.log').open('w') as stderr:
 build=subprocess.Popen(build_command,cwd=MANAGE,env=build_env,stdout=stdout,stderr=stderr,start_new_session=True)
 while build.poll() is None:
  if shutil.disk_usage(MANAGE).free<3*1024**3 or time.monotonic()-build_started>600:
   os.killpg(build.pid,signal.SIGTERM)
   try:build.wait(timeout=10)
   except subprocess.TimeoutExpired:os.killpg(build.pid,signal.SIGKILL);build.wait()
   raise RuntimeError('Owned Manage compiler stopped at disk/time bound; retained logs')
  time.sleep(.5)
assert build.returncode==0,'Actual Manage test binary build failed; retained logs'
binaries=[json.loads(line)['executable'] for line in (OUT/'idp-manage-test-build.jsonl').read_text().splitlines() if line.startswith('{') and json.loads(line).get('reason')=='compiler-artifact' and json.loads(line).get('executable') and json.loads(line).get('profile',{}).get('test')]
assert len(binaries)==1,'Ambiguous Manage test binary'
manage_binary=Path(binaries[0]);manage_binary_before=hashlib.sha256(manage_binary.read_bytes()).hexdigest()
runner_before=hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
before=dependencies();sdk_before=snapshot(SDK,['packages','node_modules','scripts/verify-idp-router-sdk-wire.mjs','scripts/router-contract-overrides.mjs','service-source-revisions.json','service-contracts.json','package-lock.json']);lock=(REPO/'Cargo.lock').read_bytes()
name='infera-idp-sdk-'+uuid.uuid4().hex[:8];db='infera_idp_sdk_'+uuid.uuid4().hex[:10];created=[];failure=None;exit_code=None;started=time.monotonic();images={}
command=['cargo','--config','profile.test.package.mra_idp.debug=0','--config','profile.test.package.mra_idp.strip="debuginfo"','test','--locked','--offline','--workspace','--','--include-ignored','--test-threads=1','--nocapture']
log=OUT/'idp-router-sdk-tests.log'
try:
 for kind,image,args in [('postgres','postgres:16-alpine',['-e','POSTGRES_PASSWORD=owned-password','-e','POSTGRES_DB='+db,'-p','127.0.0.1::5432']),('rabbit','rabbitmq:3-alpine',['--tmpfs','/var/lib/rabbitmq:rw,uid=100,gid=101,mode=0700','-e','RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS=+S 2:2 +SDcpu 1 +SDio 1','-p','127.0.0.1::5672'])]:
  container=name+'-'+kind;run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=idp-sdk-release-test','--name',container,*args,image]);created.append(container);images[kind]=run(['docker','inspect','--format','{{.Image}}',container])
 for _ in range(60):
  if subprocess.run(['docker','exec',name+'-postgres','pg_isready','-h','127.0.0.1','-U','postgres','-d',db],capture_output=True).returncode==0:break
  time.sleep(.5)
 else:raise RuntimeError('Owned PostgreSQL readiness failed')
 for _ in range(30):
  if subprocess.run(['docker','exec','--user','rabbitmq',name+'-rabbit','rabbitmq-diagnostics','-q','check_port_connectivity'],capture_output=True,timeout=10).returncode==0:break
  time.sleep(1)
 else:raise RuntimeError('Owned RabbitMQ readiness failed')
 creation='creation_test_'+uuid.uuid4().hex[:10];password='self_password_test_'+uuid.uuid4().hex[:10]
 for database in [creation,password]:run(['docker','exec',name+'-postgres','createdb','-U','postgres',database])
 pg=run(['docker','port',name+'-postgres','5432/tcp']).rsplit(':',1)[1];rmq=run(['docker','port',name+'-rabbit','5672/tcp']).rsplit(':',1)[1]
 env=dict(os.environ,CREATION_IDP_TEST_DATABASE_URL=f'postgres://postgres:owned-password@127.0.0.1:{pg}/{creation}',CREATION_CHECKOUT_TEST_DATABASE_URL=f'postgres://postgres:owned-password@127.0.0.1:{pg}/{creation}',SELF_PASSWORD_TEST_DATABASE_URL=f'postgres://postgres:owned-password@127.0.0.1:{pg}/{password}',DATABASE_URL=f'postgres://postgres:owned-password@127.0.0.1:{pg}/{db}',BROKER_URL=f'amqp://guest:guest@127.0.0.1:{rmq}/%2f',DEV='false',FLOW_EVENTS_ENABLED='false',AWS_EC2_METADATA_DISABLED='true',INFERA_IDP_SDK_TEST_PROBE=str(SDK/'scripts/verify-idp-router-sdk-wire.mjs'),CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_TARGET_DIR=str(ROOT/'Service/target'),INFERA_MANAGE_IDP_TEST_BINARY=str(manage_binary))
 for key in ['AUTH_ID','AUTH_ROLES','AUTH_PERMISSIONS','INFERA_DEV_AUTH_USER_ID']:env.pop(key,None)
 with log.open('w') as out:
  proc=subprocess.Popen(command,cwd=REPO,env=env,stdout=out,stderr=subprocess.STDOUT,start_new_session=True)
  while proc.poll() is None:
   if shutil.disk_usage(REPO).free<3*1024**3:failure='Owned process stopped at3GiB free-space guard'
   elif time.monotonic()-started>900:failure='Owned process stopped at900seconds'
   if failure:
    os.killpg(proc.pid,signal.SIGTERM)
    try:proc.wait(timeout=10)
    except subprocess.TimeoutExpired:os.killpg(proc.pid,signal.SIGKILL);proc.wait()
    break
   time.sleep(.5)
  exit_code=proc.returncode
except Exception as error:failure=str(error)
finally:
 after=dependencies();sdk_after=snapshot(SDK,['packages','node_modules','scripts/verify-idp-router-sdk-wire.mjs','scripts/router-contract-overrides.mjs','service-source-revisions.json','service-contracts.json','package-lock.json']);text=log.read_text() if log.exists() else ''
 summaries=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',text);passed=sum(int(p) for p,f,i in summaries);failed=sum(int(f) for p,f,i in summaries);ignored=sum(int(i) for p,f,i in summaries)
 manage_after=snapshot(MANAGE,['src','Cargo.toml','Cargo.lock']);manage_binary_after=hashlib.sha256(manage_binary.read_bytes()).hexdigest()
 same=before==after and sdk_before==sdk_after and (REPO/'Cargo.lock').read_bytes()==lock and manage_before==manage_after and manage_binary_before==manage_binary_after and runner_before==hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
 report={'status':'passed' if exit_code==0 and not failure and same and passed>=60 and failed==0 and ignored==0 and '\"assertions\":23' in text and 'actual_manage_issue_exchange_caller: passed' in text else 'failed','failure':failure,'exit_code':exit_code,'source_revision':run(['git','rev-parse','HEAD'],cwd=REPO),'source_base':'1983731640c4542391eeed2599347b45ab6caf4b','sdk_revision':run(['git','rev-parse','HEAD'],cwd=SDK),'source_and_dependencies_before':before,'source_and_dependencies_after':after,'sdk_before':sdk_before,'sdk_after':sdk_after,'source_unchanged_during_run':same,'resolved_lock_sha256':hashlib.sha256(lock).hexdigest(),'runner_sha256':runner_before,'manage_build_command':build_command,'nested_manage_tests_executed':1 if 'actual_manage_issue_exchange_caller: passed' in text else 0,'manage_revision':run(['git','rev-parse','HEAD'],cwd=MANAGE),'manage_source_before':manage_before,'manage_source_after':manage_after,'manage_binary_sha256':manage_binary_before,'images':images,'command':command,'tests_passed':passed,'tests_failed':failed,'tests_ignored':ignored,'duration_seconds':round(time.monotonic()-started,3),'artifact_path':log.name,'artifact_sha256':hashlib.sha256(log.read_bytes()).hexdigest() if log.exists() else None,'scope':'Targeted actual mounted IDP router with real PostgreSQL/RabbitMQ and compiled Axios SDK; no live gateway/current principal verification; Requires a configured project credential; actual Manage issue/exchange caller verified against owned IDP; no deployed boundary or secret reconciliation certification.'}
 (OUT/'idp-router-sdk-tests.json').write_text(json.dumps(report,indent=2)+'\n');(OUT/'idp-router-resolved-Cargo.lock').write_bytes(lock)
 for container in created:subprocess.run(['docker','rm','-f',container],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 print(json.dumps({k:report[k] for k in ['status','failure','exit_code','tests_passed','tests_failed','source_unchanged_during_run','duration_seconds']},indent=2))
 if report['status']!='passed':raise SystemExit(1)
