from pathlib import Path
import subprocess,os,signal,time,json,hashlib,shutil
base=Path(__file__).resolve().parent

def fence():
 result={}
 for service in ['task','chat','session','crm','idp']:
  d=base/f'infera-{service}'
  names=set(subprocess.check_output(['git','ls-files','-c','-o','--exclude-standard','-z'],cwd=d).decode().split('\0'))
  names.update(['Cargo.lock','tests/summary-native/Cargo.lock'] if service!='idp' else ['tests/summary-acl/Cargo.lock'])
  result[service]={name:hashlib.sha256((d/name).read_bytes()).hexdigest() for name in sorted(names) if name and (d/name).is_file()}
 return result
before=fence();(base/'sealed-test-source-before.json').write_text(json.dumps(before,indent=2))
if shutil.disk_usage(base).free<4*1024**3:raise SystemExit('Need4GiB before final source-fenced suite')
commands=[]
for service in ['task','session','chat','crm']:
 commands.append((f'{service}-sealed-production.log',['cargo','check','--manifest-path',f'infera-{service}/Cargo.toml','--locked','--offline']))
 commands.append((f'{service}-sealed-native.log',['bash',f'infera-{service}/tests/run-summary-native.sh']))
 commands.append((f'{service}-own-test-binary-cleanup.log',['cargo','clean','--manifest-path',f'infera-{service}/tests/summary-native/Cargo.toml','-p',f'{service}-summary-native-contract']))
commands.append(('idp-sealed-acl.log',['python3','infera-idp/tests/run-summary-acl.py']))
report=[]
for log,cmd in commands:
 print('Running '+log,flush=True)
 start=time.monotonic()
 with (base/log).open('w') as output:
  p=subprocess.Popen(cmd,cwd=base,stdout=output,stderr=subprocess.STDOUT,start_new_session=True)
  while p.poll() is None:
   if shutil.disk_usage(base).free<3*1024**3:
    os.killpg(p.pid,signal.SIGTERM);p.wait();raise SystemExit('Storage guard stopped '+log)
   time.sleep(.5)
 row={'log':log,'command':cmd,'exit_code':p.returncode,'seconds':round(time.monotonic()-start,3)};report.append(row);(base/'sealed-check-results.json').write_text(json.dumps(report,indent=2))
 if p.returncode:raise SystemExit('Failed '+log)
after=fence();(base/'sealed-test-source-after.json').write_text(json.dumps(after,indent=2));assert before==after,'Source changed during test suite'
print('All sealed checks passed; all source files unchanged throughout.',flush=True)
