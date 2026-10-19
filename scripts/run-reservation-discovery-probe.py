#!/usr/bin/env python3
"""Characterize Reservation using a disposable real PostgreSQL; never certify bugs.
Requires Docker, cached postgres:16-alpine and offline Rust dependencies. No live DB is accepted.
"""
import hashlib
import json
import os
from pathlib import Path
import subprocess
import time
import uuid

SDK = Path(__file__).resolve().parents[1]
REPO = SDK.parent / 'Service/infera-reservation'
OUTPUT = SDK / 'contracts/service-capabilities/evidence'
TARGET = REPO / 'tests/capability_discovery_probe.rs'
COMMANDS = [
    ['cargo', 'test', '--offline', '--test', 'capability_discovery_probe', '--', '--nocapture'],
    ['cargo', 'test', '--offline', '--test', 'reservation_concurrency_test', '--', '--nocapture'],
]

def run(args, **kwargs):
    return subprocess.run(args, check=True, text=True, capture_output=True, **kwargs).stdout.strip()

def main():
    if TARGET.exists():
        raise RuntimeError(f'Refusing to overwrite {TARGET}')
    # Bind evidence to the entire actual checkout, including uncommitted sources.
    revision = run(['git', 'rev-parse', 'HEAD'], cwd=REPO)
    files = run(['git', 'ls-files', 'src', 'entity', 'migration', 'Cargo.toml', 'Cargo.lock'], cwd=REPO).splitlines()
    source_hash = hashlib.sha256()
    for name in sorted(files):
        source_hash.update(name.encode() + b'\0' + (REPO / name).read_bytes() + b'\0')
    status = run(['git', 'status', '--porcelain'], cwd=REPO)
    name = 'infera-capability-probe-' + uuid.uuid4().hex[:8]
    lock = REPO / 'Cargo.lock'
    before = lock.read_bytes()
    created = False
    try:
        run(['docker', 'run', '--detach', '--rm', '--pull=never', '--label', 'io.infera.purpose=capability-discovery',
             '-e', 'POSTGRES_HOST_AUTH_METHOD=trust', '-e', 'POSTGRES_DB=infera_contracts',
             '-p', '127.0.0.1::5432', '--name', name, 'postgres:16-alpine'])
        created = True
        for _ in range(30):
            ready = subprocess.run(['docker', 'exec', name, 'pg_isready', '-U', 'postgres'], capture_output=True)
            if ready.returncode == 0:
                break
            time.sleep(1)
        else:
            raise RuntimeError('Disposable PostgreSQL failed readiness')
        port = run(['docker', 'port', name, '5432/tcp']).rsplit(':', 1)[1]
        env = dict(os.environ, DATABASE_URL=f'postgresql://postgres@127.0.0.1:{port}/infera_contracts')
        TARGET.write_bytes((SDK / 'contracts/probes/reservation.rs').read_bytes())
        logs, runs = [], []
        for command in COMMANDS:
            result = subprocess.run(command, cwd=REPO, env=env, capture_output=True, text=True)
            log = result.stdout + result.stderr
            logs.append('$ ' + ' '.join(command) + '\n' + log)
            runs.append({'command': ' '.join(command), 'exit_code': result.returncode,
                         'tests_executed': 1 if '1 passed; 0 failed' in log and 'skipped:' not in log else 0})
            if result.returncode or runs[-1]['tests_executed'] != 1:
                raise RuntimeError(log)
        observation = next(line.split('DISCOVERY_OBSERVATION ', 1)[1] for line in logs[0].splitlines() if line.startswith('DISCOVERY_OBSERVATION '))
        OUTPUT.mkdir(parents=True, exist_ok=True)
        log_bytes = '\n'.join(logs).encode()
        (OUTPUT / 'reservation-characterization.log').write_bytes(log_bytes)
        evidence = {'schema_version': '1.0', 'kind': 'characterization_not_certification',
                    'observed_at': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
                    'source_revisions': {'reservation': revision}, 'working_tree_status': status,
                    'checkout_source_sha256': source_hash.hexdigest(),
                    'probe_sha256': hashlib.sha256(TARGET.read_bytes()).hexdigest(),
                    'artifact_sha256': hashlib.sha256(log_bytes).hexdigest(),
                    'storage': 'disposable_real_postgresql', 'runs': runs, 'observations': json.loads(observation)}
        (OUTPUT / 'reservation-characterization.json').write_text(json.dumps(evidence, indent=2) + '\n')
        print(json.dumps(evidence, indent=2))
    finally:
        TARGET.unlink(missing_ok=True)
        lock.write_bytes(before)
        if created:
            subprocess.run(['docker', 'rm', '-f', name], check=True, stdout=subprocess.DEVNULL)

if __name__ == '__main__':
    main()
