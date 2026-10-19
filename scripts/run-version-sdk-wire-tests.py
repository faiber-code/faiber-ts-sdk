#!/usr/bin/env python3
"""Run Version correctness regressions on an owned disposable PostgreSQL only."""
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import time
import uuid

SDK = Path(__file__).resolve().parents[1]
REPO = Path(os.environ['INFERA_VERSION_SDK_TEST_REPO']).resolve()
OUTPUT = SDK / 'contracts/service-capabilities/evidence'
COMMAND = ['cargo', '--config', 'profile.test.package.infera_version.debug=0', '--config', 'profile.test.package.infera_version.strip="debuginfo"', 'test', '--offline', '--workspace', '--', '--include-ignored', '--test-threads=1']

def run(args, **kwargs):
    return subprocess.run(args, check=True, text=True, capture_output=True, timeout=90, **kwargs).stdout.strip()

def source_state(repo):
    files = sorted(set(run(['git', 'ls-files', '-co', '--exclude-standard', '--', 'src', 'entity', 'migration', 'auth', 'auth_macro', 'crates', 'tests', '.cargo', 'Cargo.toml', 'Cargo.lock'], cwd=repo).splitlines()))
    digest = hashlib.sha256()
    for name in files:
        digest.update(name.encode() + b'\0' + (repo / name).read_bytes() + b'\0')
    return {'revision': run(['git', 'rev-parse', 'HEAD'], cwd=repo),
            'working_tree_status': run(['git', 'status', '--porcelain'], cwd=repo),
            'checkout_sha256': digest.hexdigest()}

def sdk_state():
    digest = hashlib.sha256()
    files = []
    for folder in ['packages', 'node_modules']:
        for path in sorted((SDK / folder).rglob('*')):
            if path.is_file() and not path.is_symlink():
                name = str(path.relative_to(SDK))
                checksum = hashlib.sha256(path.read_bytes()).hexdigest()
                digest.update(name.encode()+b'\0'+checksum.encode()+b'\0')
                files.append({'path':name,'sha256':checksum})
    for path in [SDK/'service-contracts.json',SDK/'scripts/verify-version-sdk-wire.mjs',SDK/'scripts/run-version-sdk-wire-tests.py',SDK/'package-lock.json']:
        checksum=hashlib.sha256(path.read_bytes()).hexdigest();name=str(path.relative_to(SDK))
        digest.update(name.encode()+b'\0'+checksum.encode()+b'\0');files.append({'path':name,'sha256':checksum})
    return {'checksum':digest.hexdigest(),'files':files}

def main():
    import shutil
    if shutil.disk_usage(SDK).free < 3*1024**3:
        raise RuntimeError('Less than 3 GiB free; no cleanup authorized')
    source = source_state(REPO)
    sdk_before = sdk_state()
    control = SDK.parent / 'Service/infera-control'
    publisher = control / 'crates/faiber-core/src/ops/apk/publish_release.js'
    producer = source_state(control)
    publisher_sha256 = hashlib.sha256(publisher.read_bytes()).hexdigest()
    name = 'infera-version-contract-' + uuid.uuid4().hex[:8]
    before = (REPO / 'Cargo.lock').read_bytes()
    created = False
    rabbit_name = name + "-rmq"
    rabbit_created = False
    try:
        run(['docker', 'run', '--detach', '--rm', '--pull=never', '--label', 'io.infera.purpose=capability-contract-test',
             '-e', 'POSTGRES_HOST_AUTH_METHOD=trust', '-e', 'POSTGRES_DB=infera_version_contracts',
             '-p', '127.0.0.1::5432', '--name', name, 'postgres:16-alpine'])
        created = True
        image = run(['docker', 'inspect', '--format', '{{.Image}}', name])
        for _ in range(30):
            if subprocess.run(['docker', 'exec', name, 'pg_isready', '-U', 'postgres'], capture_output=True).returncode == 0:
                break
            time.sleep(1)
        else:
            raise RuntimeError('Disposable PostgreSQL failed readiness')
        run(['docker', 'run', '--detach', '--pull=never', '--label', 'io.infera.purpose=capability-contract-test',
             '--tmpfs', '/var/lib/rabbitmq:rw,uid=100,gid=101,mode=0700',
             '-e', 'RABBITMQ_SERVER_ADDITIONAL_ERL_ARGS=+S 2:2 +SDcpu 1 +SDio 1',
             '-p', '127.0.0.1::5672', '--name', rabbit_name, 'rabbitmq:3-alpine'])
        rabbit_created = True
        rabbit_image = run(['docker', 'inspect', '--format', '{{.Image}}', rabbit_name])
        for _ in range(60):
            if subprocess.run(['docker', 'exec', '--user', 'rabbitmq', rabbit_name, 'rabbitmq-diagnostics', '-q', 'check_port_connectivity'], capture_output=True).returncode == 0:
                break
            state = run(['docker', 'inspect', '--format', '{{.State.Status}}', rabbit_name])
            if state == 'exited':
                raise RuntimeError(run(['docker', 'logs', rabbit_name]))
            time.sleep(1)
        else:
            raise RuntimeError('Disposable RabbitMQ failed readiness: ' + run(['docker', 'logs', rabbit_name]))
        rabbit_port = run(['docker', 'port', rabbit_name, '5672/tcp']).rsplit(':', 1)[1]
        port = run(['docker', 'port', name, '5432/tcp']).rsplit(':', 1)[1]
        env = dict(os.environ, INFERA_CONTROL_PUBLISHER_SCRIPT=str(publisher.resolve()), INFERA_VERSION_SDK_TEST_PROBE=str((SDK/'scripts/verify-version-sdk-wire.mjs').resolve()), CARGO_BUILD_JOBS='2', CARGO_INCREMENTAL='0', CARGO_TARGET_DIR='/Users/mohammadralizadeh/Infera/Service/target', AUTH_ID='', AUTH_ROLES='', AUTH_PERMISSIONS='', DATABASE_URL=f'postgresql://postgres@127.0.0.1:{port}/infera_version_contracts', BROKER_URL=f'amqp://guest:guest@127.0.0.1:{rabbit_port}/%2f', DEV='false', FLOW_EVENTS_ENABLED='false')
        started = time.monotonic()
        result = subprocess.run(COMMAND, cwd=REPO, env=env, capture_output=True, text=True, timeout=900)
        elapsed = time.monotonic() - started
        # Build resolution may temporarily rewrite the checkout lock. Preserve it
        # as dependency evidence, then restore the input before checking source.
        resolved_lock = (REPO / 'Cargo.lock').read_bytes()
        (REPO / 'Cargo.lock').write_bytes(before)
        sdk_after = sdk_state()
        unchanged = (sdk_before == sdk_after and source_state(REPO)['checkout_sha256'] == source['checkout_sha256']
                     and source_state(control)['checkout_sha256'] == producer['checkout_sha256']
                     and hashlib.sha256(publisher.read_bytes()).hexdigest() == publisher_sha256)
        log = result.stdout + result.stderr
        summaries = re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;', log)
        executed = sum(int(passed) + int(failed) for passed, failed, _ in summaries)
        passed = unchanged and result.returncode == 0 and len(summaries) >= 4 and executed >= 12 and all(int(failed) == int(ignored) == 0 for _, failed, ignored in summaries) and 'skipped:' not in log
        OUTPUT.mkdir(parents=True, exist_ok=True)
        lock_artifact = OUTPUT / ('version-resolved-' + hashlib.sha256(resolved_lock).hexdigest() + '.Cargo.lock')
        lock_artifact.write_bytes(resolved_lock)
        log_bytes = (log.rstrip('\n') + '\n').encode()
        (OUTPUT / 'version-sdk-wire-tests.log').write_bytes(log_bytes)
        evidence = {'schema_version': '1.0', 'kind': 'correctness_regression', 'status': 'passed' if passed else 'failed',
                    'observed_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'command': ' '.join(COMMAND),
                    'source_unchanged_during_run': unchanged, 'exit_code': result.returncode, 'tests_executed': executed, 'tests_passed': sum(int(p) for p, _, _ in summaries), 'tests_failed': sum(int(f) for _, f, _ in summaries), 'tests_ignored': sum(int(i) for _, _, i in summaries), 'duration_seconds': round(elapsed, 3),
                    'sdk_before': sdk_before, 'sdk_after': sdk_after, 'source_revisions': {'version': source['revision'], 'control': producer['revision']}, 'source': source,
                    'control_source': producer, 'control_publisher_script_sha256': publisher_sha256,
                    'node': run(['node', '--version']),
                    'resolved_cargo_lock_sha256': hashlib.sha256(resolved_lock).hexdigest(),
                    'resolved_cargo_lock_artifact_path': 'evidence/' + lock_artifact.name,
                    'rustc': run(['rustc', '--version']), 'postgres_image': image, 'rabbitmq_image': rabbit_image, 'storage': 'disposable_real_postgresql',
                    'artifact_path': 'evidence/version-sdk-wire-tests.log', 'artifact_sha256': hashlib.sha256(log_bytes).hexdigest(),
                    'scope': 'Actual compiled TypeScript SDK over loopback HTTP to mounted Version service with real disposable PostgreSQL/RabbitMQ, all seven operations. Also Version workspace and Control publisher regressions. Current deployed gateway grants, canonical service merge and Manage UI acceptance remain separate gates'}
        (OUTPUT / 'version-sdk-wire-tests.json').write_text(json.dumps(evidence, indent=2) + '\n')
        print(json.dumps({key:value for key,value in evidence.items() if key not in ['sdk_before','sdk_after']}, indent=2))
        if not passed:
            print(log[-12000:])
            raise SystemExit(1)
    finally:
        (REPO / 'Cargo.lock').write_bytes(before)
        if rabbit_created:
            subprocess.run(['docker', 'rm', '-f', rabbit_name], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        if created:
            subprocess.run(['docker', 'rm', '-f', name], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

if __name__ == '__main__':
    main()
