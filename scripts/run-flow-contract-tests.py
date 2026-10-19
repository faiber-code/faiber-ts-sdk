#!/usr/bin/env python3
"""Run Flow correctness regressions on an owned disposable PostgreSQL only."""
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import time
import uuid

SDK = Path(__file__).resolve().parents[1]
REPO = SDK.parent / 'Service/infera-flow'
OUTPUT = SDK / 'contracts/service-capabilities/evidence'
COMMAND = ['cargo', 'test', '--offline', '--lib', '--tests', '--', '--include-ignored', '--test-threads=1']

def run(args, **kwargs):
    return subprocess.run(args, check=True, text=True, capture_output=True, **kwargs).stdout.strip()

def source_state(repo):
    files = sorted(set(run(['git', 'ls-files', '-co', '--exclude-standard', '--', 'src', 'entity', 'migration', 'tests', '.cargo', 'Cargo.toml', 'Cargo.lock'], cwd=repo).splitlines()))
    digest = hashlib.sha256()
    for name in files:
        digest.update(name.encode() + b'\0' + (repo / name).read_bytes() + b'\0')
    return {'revision': run(['git', 'rev-parse', 'HEAD'], cwd=repo),
            'working_tree_status': run(['git', 'status', '--porcelain'], cwd=repo),
            'checkout_sha256': digest.hexdigest()}

def main():
    source = source_state(REPO)
    name = 'infera-flow-contract-' + uuid.uuid4().hex[:8]
    before = (REPO / 'Cargo.lock').read_bytes()
    created = False
    rabbit_name = name + "-rmq"
    rabbit_created = False
    try:
        run(['docker', 'run', '--detach', '--rm', '--pull=never', '--label', 'io.infera.purpose=capability-contract-test',
             '-e', 'POSTGRES_HOST_AUTH_METHOD=trust', '-e', 'POSTGRES_DB=infera_flow_contracts',
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
        env = dict(os.environ, AUTH_ID='', AUTH_ROLES='', AUTH_PERMISSIONS='', DATABASE_URL=f'postgresql://postgres@127.0.0.1:{port}/infera_flow_contracts', BROKER_URL=f'amqp://guest:guest@127.0.0.1:{rabbit_port}/%2f', DEV='false', FLOW_EVENTS_ENABLED='false')
        started = time.monotonic()
        result = subprocess.run(COMMAND, cwd=REPO, env=env, capture_output=True, text=True)
        elapsed = time.monotonic() - started
        log = result.stdout + result.stderr
        summaries = re.findall(r'test result: (?:ok|FAILED)\. (\d+) passed; (\d+) failed; (\d+) ignored;', log)
        executed = sum(int(passed) + int(failed) for passed, failed, _ in summaries)
        passed = result.returncode == 0 and len(summaries) >= 2 and executed >= 16 and all(int(failed) == int(ignored) == 0 for _, failed, ignored in summaries) and 'skipped:' not in log
        OUTPUT.mkdir(parents=True, exist_ok=True)
        resolved_lock = (REPO / 'Cargo.lock').read_bytes()
        lock_artifact = OUTPUT / ('flow-resolved-' + hashlib.sha256(resolved_lock).hexdigest() + '.Cargo.lock')
        lock_artifact.write_bytes(resolved_lock)
        log_bytes = (log.rstrip('\n') + '\n').encode()
        (OUTPUT / 'flow-contract-tests.log').write_bytes(log_bytes)
        evidence = {'schema_version': '1.0', 'kind': 'correctness_regression', 'status': 'passed' if passed else 'failed',
                    'observed_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()), 'command': ' '.join(COMMAND),
                    'exit_code': result.returncode, 'tests_executed': executed, 'tests_passed': sum(int(p) for p, _, _ in summaries), 'tests_failed': sum(int(f) for _, f, _ in summaries), 'tests_ignored': sum(int(i) for _, _, i in summaries), 'duration_seconds': round(elapsed, 3),
                    'source_revisions': {'flow': source['revision']}, 'source': source,
                    'rust_sdk_revision': run(['git', 'rev-parse', 'HEAD'], cwd=SDK.parent / 'Service/faiber-sdk'),
                    'rust_sdk_working_status': run(['git', 'status', '--porcelain'], cwd=SDK.parent / 'Service/faiber-sdk'),
                    'rust_sdk_dependencies': {name: source_state(SDK.parent / 'Service/faiber-sdk/crates' / name) for name in ['infera-idp-sdk', 'infera-idp-macro', 'infera-flow-sdk']},
                    'resolved_cargo_lock_sha256': hashlib.sha256(resolved_lock).hexdigest(),
                    'resolved_cargo_lock_artifact_path': 'evidence/' + lock_artifact.name,
                    'rustc': run(['rustc', '--version']), 'postgres_image': image, 'rabbitmq_image': rabbit_image, 'storage': 'disposable_real_postgresql',
                    'artifact_path': 'evidence/flow-contract-tests.log', 'artifact_sha256': hashlib.sha256(log_bytes).hexdigest(),
                    'scope': 'Flow full Rust suite, real PostgreSQL/RabbitMQ, bounded filtered cursor history and real HTTP current-identity/permission checks; gateway/IDP identity, SDK and Manage journeys remain separate gates'}
        if executed == 0:
            unresolved = OUTPUT / ('flow-unresolved-input-' + evidence.pop('resolved_cargo_lock_sha256') + '.Cargo.lock')
            lock_artifact.rename(unresolved)
            evidence.pop('resolved_cargo_lock_artifact_path')
            evidence['input_cargo_lock_artifact_path'] = 'evidence/' + unresolved.name
            evidence['input_cargo_lock_sha256'] = hashlib.sha256(resolved_lock).hexdigest()
            evidence['status'] = 'not_executed_dependency_or_compile_blocked'
        (OUTPUT / 'flow-contract-tests.json').write_text(json.dumps(evidence, indent=2) + '\n')
        print(json.dumps(evidence, indent=2))
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
