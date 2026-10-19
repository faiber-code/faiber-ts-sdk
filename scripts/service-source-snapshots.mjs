import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

/** Include schemas, migrations and dependency configuration in immutable evidence. */
export function archiveSourceRevision(repository, revision, destination) {
  if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error('Invalid source revision');
  const entries = execFileSync('git', ['ls-tree', '--name-only', revision], { cwd: repository, encoding: 'utf8' }).split('\n');
  const paths = ['src','entity','migration','crates','domain','faiber-agent-core','Cargo.toml','Cargo.lock'].filter(path=>entries.includes(path));
  if (!paths.some(path=>['src','crates'].includes(path))) throw new Error(`Missing runtime source: ${repository}@${revision}`);
  const archive = execFileSync('git', ['archive', revision, '--', ...paths], { cwd: repository, maxBuffer: 128 * 1024 * 1024 });
  mkdirSync(destination,{recursive:true});
  // A file avoids macOS tar's early-stdin-close/EPIPE race on archive padding.
  const archivePath=join(destination,'.source-snapshot.tar');
  writeFileSync(archivePath,archive);
  try { execFileSync('tar',['-xf',archivePath,'-C',destination]); }
  finally { rmSync(archivePath,{force:true}); }
}

/** Resolve immutable audited source revisions without touching consumers' service working trees. */
export function serviceSources(sdkRoot, fallback, options = {}) {
  if (process.env.FAIBER_SERVICES_ROOT && !options.ignoreWorkingOverride) return process.env.FAIBER_SERVICES_ROOT;
  const lockPath = options.lockPath ?? process.env.FAIBER_SOURCE_REVISIONS_FILE ?? join(sdkRoot, 'service-source-revisions.json');
  if (!existsSync(lockPath)) return fallback;
  const lock = JSON.parse(readFileSync(lockPath, 'utf8'));
  const temporary = mkdtempSync(join(tmpdir(), 'faiber-service-sources-'));
  process.once('exit', () => rmSync(temporary, { recursive: true, force: true }));
  for (const { directory, revision } of Object.values(lock)) {
    if (!/^infera[-_][a-z]+$/.test(directory) || !/^[a-f0-9]{40}$/.test(revision)) throw new Error('Invalid service source lock');
    const repository = join(fallback, directory);
    const destination = join(temporary, directory);
    archiveSourceRevision(repository,revision,destination);
  }
  return temporary;
}
