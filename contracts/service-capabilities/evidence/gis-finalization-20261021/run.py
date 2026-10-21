from pathlib import Path
import subprocess, json, hashlib, time, datetime, os, shutil, signal, re, uuid, sys
ROOT=Path('/Users/mohammadralizadeh/Infera'); OUT=Path(__file__).parent.resolve(); REPO=ROOT/'.task-worktrees/gis-sdk-native-20261020/infera-gis'
SDK=Path(__file__).resolve().parents[3]
class Helper:
 def tree(self, root):
  return {str(p.relative_to(root)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(root.rglob('*')) if p.is_file() and not p.is_symlink()}
 def tracked(self, root):
  names=subprocess.check_output(['git','ls-files'],cwd=root,text=True).splitlines()
  return {n:hashlib.sha256((root/n).read_bytes()).hexdigest() for n in names if (root/n).is_file()}
 def dependencies(self, meta):
  return {p['manifest_path']:self.tree(Path(p['manifest_path']).parent) for p in meta['packages'] if p['source'] is None and Path(p['manifest_path']).parent != REPO}
helper=Helper()
def run(args,**kwargs):return subprocess.check_output(args,text=True,stderr=subprocess.PIPE,timeout=90,**kwargs).strip()
assert run(['git','rev-parse','HEAD'],cwd=REPO)=='82fa0ca586a38ca71603e76f5ab1ed5dc1deca8d'
assert not run(['git','status','--porcelain'],cwd=REPO)
meta=json.loads(run(['cargo','metadata','--locked','--offline','--format-version','1','--filter-platform','aarch64-apple-darwin'],cwd=REPO))
before=helper.tracked(REPO); deps=helper.dependencies(meta); consumer={folder:helper.tree(SDK/folder) for folder in ['packages','node_modules']}; probe_sha=hashlib.sha256(b''.join((OUT/name).read_bytes()for name in ['probe.mjs','business-probe.mjs','import-probe.mjs'])).hexdigest()
assert shutil.disk_usage(ROOT).free>=4*1024**3,'4GiB start guard'
assert subprocess.run(['pgrep','-x','cargo'],stdout=subprocess.DEVNULL).returncode!=0,'another Cargo owner active'
name='gis-owned-import-'+uuid.uuid4().hex[:10]; start=time.monotonic(); minimum=shutil.disk_usage(ROOT).free; failure=None; code=None; image=None
command=['cargo','test','--locked','--offline','-p','infera-gis','sdk_http_tests','--','--include-ignored','--nocapture','--test-threads=1']
try:
 run(['docker','run','--detach','--rm','--pull=never','--label','io.infera.purpose=owned-gis-native-fixture','--name',name,'-p','127.0.0.1::5432','--tmpfs','/var/lib/postgresql/data','-e','POSTGRES_PASSWORD=gis-fixture','-e','POSTGRES_DB=gis_owned_native','postgis/postgis:16-3.4'])
 image=run(['docker','inspect','--format','{{.Image}}',name])
 for _ in range(80):
  if subprocess.run(['docker','exec',name,'pg_isready','-h','127.0.0.1','-U','postgres','-d','gis_owned_native'],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=5).returncode==0:break
  time.sleep(.5)
 else:raise RuntimeError('owned PostGIS readiness failed')
 port=run(['docker','port',name,'5432/tcp']).rsplit(':',1)[1]
 url=f'postgres://postgres:gis-fixture@127.0.0.1:{port}/gis_owned_native'
 assert url.startswith('postgres://postgres:gis-fixture@127.0.0.1:') and name.startswith('gis-owned-import-')
 import socket
 with socket.socket()as port_socket:
  port_socket.bind(('127.0.0.1',0));martin_port=port_socket.getsockname()[1]
 martin_binary=ROOT/'acceptance-results/three-feature-completion-20261019/martin-exact-official-asset-20261020/verified-extraction/martin'
 assert hashlib.sha256(martin_binary.read_bytes()).hexdigest()=='19f1ee26c73697323cf91851350f90907d88e3bf436e142f28d197758d318720'
 env=dict(os.environ,CARGO_TARGET_DIR=str(ROOT/'Service/target'),CARGO_BUILD_JOBS='2',CARGO_INCREMENTAL='0',CARGO_PROFILE_TEST_DEBUG='0',CARGO_PROFILE_DEV_DEBUG='0',GIS_IMPORT_TEST_DATABASE_URL=url,GIS_PACKED_SDK_PROBE=str(OUT/'probe.mjs'),GIS_PACKED_ACTUAL_MARTIN_URL=f'http://127.0.0.1:{martin_port}',GIS_PACKED_MARTIN_BINARY=str(martin_binary),GIS_PACKED_POSTGIS_CONTAINER=name)
 with (OUT/'native.log').open('w') as log:
  proc=subprocess.Popen(command,cwd=REPO,env=env,stdout=log,stderr=subprocess.STDOUT,start_new_session=True)
  while proc.poll() is None:
   free=shutil.disk_usage(ROOT).free;minimum=min(minimum,free)
   if free<3*1024**3:failure='3GiB stop guard'
   elif time.monotonic()-start>900:failure='900second bounded stop'
   if failure:
    os.killpg(proc.pid,signal.SIGTERM)
    try:proc.wait(timeout=10)
    except subprocess.TimeoutExpired:os.killpg(proc.pid,signal.SIGKILL);proc.wait()
    break
   time.sleep(.5)
  code=proc.returncode
except Exception as error:failure=str(error)
finally:
 subprocess.run(['docker','rm','-f',name],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,timeout=30)
 unchanged=before==helper.tracked(REPO) and deps==helper.dependencies(meta) and consumer=={folder:helper.tree(SDK/folder) for folder in ['packages','node_modules']} and probe_sha==hashlib.sha256(b''.join((OUT/name).read_bytes()for name in ['probe.mjs','business-probe.mjs','import-probe.mjs'])).hexdigest()
 log=(OUT/'native.log').read_text() if (OUT/'native.log').exists() else ''
 tests=re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;',log)
 passed=code==0 and not failure and unchanged and ('2','0','0') in tests
 receipt={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed' if passed else 'failed','source_revision':run(['git','rev-parse','HEAD'],cwd=REPO),'source_before':before,'source_after':helper.tracked(REPO),'dependencies_before':deps,'dependencies_after':helper.dependencies(meta),'all_inputs_unchanged':unchanged,'consumer_tree_sha256':hashlib.sha256(json.dumps(consumer,sort_keys=True).encode()).hexdigest(),'probe_sha256':probe_sha,'frozen_sdk':run(['git','rev-parse','HEAD'],cwd=SDK),'command':command,'exit_code':code,'failure':failure,'tests':tests,'seconds':round(time.monotonic()-start,3),'minimum_free_bytes':minimum,'free_bytes':shutil.disk_usage(ROOT).free,'owned_image':image,'log_sha256':hashlib.sha256(log.encode()).hexdigest(),'scope':'Current compiled SDK HTTP consumer through production GIS router and full migrated owned PostGIS. Trusted BFF identity and IDP fixture remains explicit; tiles use actual pinned Martin1.16.1. Unconfigured imports/retry503 negative coverage; actual import business lease proof is separate. No deployed IDP or all-service certification.'}
 (OUT/'sdk-inputs.json').write_text(json.dumps(consumer,indent=2)+'\n')
 (OUT/'resolved-Cargo.lock').write_bytes((REPO/'Cargo.lock').read_bytes())
 (OUT/'receipt.json').write_text(json.dumps(receipt,indent=2)+'\n');print(json.dumps({k:v for k,v in receipt.items() if k not in ['source_before','source_after','dependencies_before','dependencies_after']}),flush=True)
 sys.exit(0 if passed else 1)
