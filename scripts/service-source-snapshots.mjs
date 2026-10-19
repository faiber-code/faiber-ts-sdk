import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { embeddedSourceEvidence } from './embedded-source-evidence.mjs';

/** Include schemas, migrations and dependency configuration in immutable evidence. */
export function archiveSourceRevision(repository, revision, destination) {
  if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error('Invalid source revision');
  const entries = execFileSync('git', ['ls-tree', '--name-only', revision], { cwd: repository, encoding: 'utf8' }).split('\n');
  const paths = ['src','entity','migration','crates','domain','faiber-agent-core','auth','auth_macro','Cargo.toml','Cargo.lock','build.rs','rust-toolchain.toml'].filter(path=>entries.includes(path));
  if (entries.includes('.cargo') && execFileSync('git',['ls-tree','--name-only',revision,'--','.cargo/config.toml'],{cwd:repository,encoding:'utf8'}).trim()) paths.push('.cargo/config.toml');
  if (!paths.some(path=>['src','crates'].includes(path))) throw new Error(`Missing runtime source: ${repository}@${revision}`);
  mkdirSync(destination,{recursive:true});
  const extract = selected => {
    const archive = execFileSync('git',['archive',revision,'--',...selected],{cwd:repository,maxBuffer:128*1024*1024});
    const archivePath=join(destination,'.source-snapshot.tar');
    writeFileSync(archivePath,archive);
    try {execFileSync('tar',['-xf',archivePath,'-C',destination]);}
    finally {rmSync(archivePath,{force:true});}
  };
  extract(paths);
  // Preserve compiler inputs outside the ordinary Rust roots (for example UI
  // locale/CSS assets embedded by the server), using only the pinned Git tree.
  const rustFiles = directory => readdirSync(directory,{withFileTypes:true}).flatMap(item=>{
    const path=join(directory,item.name);
    return item.isDirectory()?rustFiles(path):item.isFile()&&item.name.endsWith('.rs')?[path]:[];
  });
  for(let depth=0;depth<8;depth++) {
    const sources=rustFiles(destination).map(path=>({path,text:readFileSync(path,'utf8')}));
    const missing=embeddedSourceEvidence(destination,sources).gaps.filter(gap=>gap.asset_path).map(gap=>gap.asset_path);
    const tracked=[...new Set(missing)].filter(path=>execFileSync('git',['ls-tree','--name-only',revision,'--',path],{cwd:repository,encoding:'utf8'}).trim());
    if(!tracked.length)break;
    extract(tracked);
  }
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
