import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

/** Resolve immutable audited source revisions without touching consumers' service working trees. */
export function serviceSources(sdkRoot, fallback, options = {}) {
  if (process.env.FAIBER_SERVICES_ROOT) return process.env.FAIBER_SERVICES_ROOT;
  const lockPath = options.lockPath ?? process.env.FAIBER_SOURCE_REVISIONS_FILE ?? join(sdkRoot, 'service-source-revisions.json');
  if (!existsSync(lockPath)) return fallback;
  const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
  const temporary = mkdtempSync(join(tmpdir(), 'faiber-service-sources-'));
  process.once('exit', () => rmSync(temporary, { recursive: true, force: true }));
  for (const { directory, revision } of Object.values(lock)) {
    if (!/^infera[-_][a-z]+$/.test(directory) || !/^[a-f0-9]{40}$/.test(revision)) throw new Error('Invalid service source lock');
    const repository = join(fallback, directory);
    const entries = execFileSync('git', ['ls-tree', '--name-only', revision], { cwd: repository, encoding: 'utf8' }).split('\n');
    const sourcePaths = ['src', 'entity'].filter(path => entries.includes(path));
    if (!sourcePaths.includes('src')) throw new Error(`Missing service source: ${directory}@${revision}`);
    const archive = execFileSync('git', ['archive', revision, '--', ...sourcePaths], { cwd: repository, maxBuffer: 64 * 1024 * 1024 });
    const destination = join(temporary, directory);
    mkdirSync(destination);
    // Some tar implementations exit after the end-of-archive marker while
    // spawnSync is still writing padding to stdin, producing a spurious EPIPE.
    // A local archive file avoids that race and preserves immutable bytes.
    const archivePath = join(temporary, `${directory}.tar`);
    writeFileSync(archivePath, archive);
    try { execFileSync('tar', ['-xf', archivePath, '-C', destination]); }
    finally { rmSync(archivePath, { force: true }); }
  }
  return temporary;
}
