from pathlib import Path
import subprocess,os,signal,time,json,shutil,datetime
base=Path(__file__).resolve().parent
minimum=3*1024**3
resume=os.environ.get("SUMMARY_CHECK_RESUME")
if not resume and shutil.disk_usage(base).free < 4*1024**3:raise SystemExit('Need at least 4GiB before final builds')
commands=[]
for service in ['task','session','chat','crm']:
 manifest=f'infera-{service}/Cargo.toml'
 commands.append((f'{service}-production-final.log',['cargo','check','--manifest-path',manifest,'--offline']))
 commands.append((f'{service}-production-locked-final.log',['cargo','check','--manifest-path',manifest,'--locked','--offline']))
commands.append(('crm-native-lock.log',['cargo','generate-lockfile','--manifest-path','infera-crm/tests/summary-native/Cargo.toml','--offline']))
for service in ['task','chat','session','crm']:
 commands.append((f'{service}-native-final.log',['bash',f'infera-{service}/tests/run-summary-native.sh']))
commands.append(('idp-summary-acl-final.log',['cargo','test','--manifest-path','infera-idp/entity/Cargo.toml','--locked','--offline','summary_evidence_transports_have_explicit_source_permissions','--','--nocapture']))
report=json.loads((base/"final-check-progress.json").read_text()) if resume else []
started_resume=not bool(resume)
for log,cmd in commands:
 if not started_resume:
  if log != resume: continue
  started_resume=True
 if shutil.disk_usage(base).free < minimum:raise SystemExit('Storage guard before '+log)
 print('Running '+log,flush=True)
 started=time.monotonic()
 with (base/log).open('w') as f:
  process=subprocess.Popen(cmd,cwd=base,stdout=f,stderr=subprocess.STDOUT,start_new_session=True)
  while process.poll() is None:
   if shutil.disk_usage(base).free < minimum:
    os.killpg(process.pid,signal.SIGTERM);process.wait();raise SystemExit('Storage guard stopped '+log)
   time.sleep(.5)
 result={'log':log,'command':cmd,'exit_code':process.returncode,'seconds':round(time.monotonic()-started,3)}
 report.append(result);(base/'final-check-progress.json').write_text(json.dumps(report,indent=2))
 if process.returncode:raise SystemExit('Failed '+log)
print('All final checks passed',flush=True)
