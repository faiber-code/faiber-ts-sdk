import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { sourceIndex, resolveSymbol, functionEvidence } from './capability-source.mjs';
import { mountedRouterOperations } from './capability-router.mjs';
import { serviceSources } from './service-source-snapshots.mjs';

const sdkRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const workspace = resolve(process.env.FAIBER_WORKSPACE_ROOT ?? join(sdkRoot, '..'));
const target = resolve(process.env.FAIBER_CAPABILITY_OUTPUT ?? join(sdkRoot, 'contracts/service-capabilities'));
const universe = JSON.parse(readFileSync(join(sdkRoot, 'contracts/service-capabilities/service-universe.json'), 'utf8'));
const locks = JSON.parse(readFileSync(join(sdkRoot, 'service-source-revisions.json'), 'utf8'));
const hash = value => createHash('sha256').update(value).digest('hex');
const readJson = path => existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;
const git = (directory, ...args) => execFileSync('git', args, { cwd: directory, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const remote = readJson(join(target,'remote-baseline.json')) ?? readJson(join(sdkRoot,'contracts/service-capabilities/remote-baseline.json'));
if (!remote) throw new Error('Capture a fresh remote baseline before canonical service discovery');
const canonicalRevisions=Object.fromEntries(Object.entries(locks).map(([service,lock])=>{
  const revision=remote.repositories[service];
  if(revision?.fetch_exit!==0 || !revision.origin_main)throw new Error(`No fetched canonical source for ${service}`);
  return [service,{directory:lock.directory,revision:revision.origin_main}];
}));

function walk(directory) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name)).flatMap(item => {
    if (['target', 'node_modules', '.git', 'vendor', 'panel', 'dist'].includes(item.name)) return [];
    const path = join(directory, item.name);
    return item.isDirectory() ? walk(path) : path.endsWith('.rs') ? [path] : [];
  });
}

function sourceFiles(root, directory) {
  return [...walk(join(root, 'src')), ...walk(join(root, 'entity/src')),
    ...walk(join(root, 'crates/faiber-server/src')), ...walk(join(root, 'crates/faiber-core/src')),
    ...walk(join(root, 'domain/src')), ...walk(join(root, 'faiber-agent-core/src'))].map(path => {
    const text = readFileSync(path, 'utf8'), index = sourceIndex(text, `${directory}/${relative(root, path)}`);
    return { ...index, checksum: hash(text) };
  });
}

function modelsFor(files, endpoint) {
  const types = Object.fromEntries(['body','query','response','pathParam'].filter(key => endpoint[key]).map(key => [key, endpoint[key]]));
  return Object.fromEntries(Object.entries(types).map(([kind, raw]) => {
    const names = [...raw.matchAll(/\b([A-Z][A-Za-z0-9_]+)\b/g)].map(x=>x[1]).filter(x=>!['Option','Vec','String','Uuid','Value'].includes(x));
    return [kind, { declared_type: raw, models: names.map(name => {
      const result = resolveSymbol(files, name, endpoint.source, raw.includes('::') ? raw.split('::').slice(0,-1).join('::') : null, 'models');
      return result.resolved ? { ...result.resolved } : { name, unresolved: true, candidates: result.candidates };
    }) }];
  }));
}

function operationEvidence(files, endpoint, review, treeChecksum) {
  // The manifest identifies registration source; a qualified handler may live elsewhere.
  const result = resolveSymbol(files, endpoint.handler, endpoint.source, endpoint.handlerModule);
  const evidence = functionEvidence(endpoint.inline_handler??result.resolved);
  const dependencies = evidence?.calls.map(call => {
    const parts=call.split('::'), result=resolveSymbol(files,parts.at(-1),evidence.path,parts.slice(0,-1).join('::'));
    return { call, evidence: functionEvidence(result.resolved), ...(result.resolved ? {} : { unresolved:true,candidates:result.candidates }) };
  }) ?? [];
  const models = modelsFor(files, endpoint);
  // A changed repository/policy implementation can change semantics even when
  // its immediate handler signature stays identical. Invalidate conservatively.
  const operationHash = hash(JSON.stringify({treeChecksum,endpoint,evidence,dependencies,models}));
  const reviewCurrent = review?.source_checksum === operationHash;
  return { id: `${endpoint.method} ${endpoint.path}`, registration: endpoint, source_checksum:operationHash,
    handler: evidence, ...(evidence ? {} : { unresolved_handler:result.candidates }),
    related_implementation:dependencies, schemas:models,
    // A field named *_id is a relation candidate, not proof of its target or authorization.
    relation_candidates: Object.values(models).flatMap(x=>x.models).flatMap(x=>(x.fields??[]).filter(f=>/(?:_id|_ids)$/.test(f.rust_name)).map(f=>({field:f.name,type:f.rust_type,model:x.name,target:'requires_semantic_review'}))),
    review: reviewCurrent ? review : {status: review ? 'stale' : 'pending', required:['meaning','permissions','filters','inputs_outputs','lifecycle','relationships','test_evidence']},
    sdk:{status:'requires_wire_verification'},manage:{status:'requires_workflow_verification'} };
}

function compactEvidence(data) {
  const records={};
  function intern(value) {
    if(Array.isArray(value))return value.map(intern);
    if(!value || typeof value!=='object')return value;
    if(value.path && value.line && (value.signature || value.fields)){
      const ref=`${value.path}:${value.line}:${value.name??hash(value.signature).slice(0,12)}`;
      records[ref]=Object.fromEntries(Object.entries(value).map(([key,item])=>[key,intern(item)]));
      return {ref,path:value.path,line:value.line,...(value.name?{name:value.name}:{})};
    }
    return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,intern(item)]));
  }
  return {...intern(data),source_records:records};
}

function candidateRegistrations(files) {
  return files.flatMap(file => [...file.source.matchAll(/\.route\(\s*"([^"]+)"\s*,/g)].map(match=>({
    local_path:match[1],source:file.path,line:file.source.slice(0,match.index).split('\n').length,mount_status:'requires_router_reconciliation',
  })));
}

function markdown(service, data) {
  const rows=data.operations.map(op=>`| \`${op.id}\` | ${op.handler?`\`${op.handler.path}:${op.handler.line}\``:'UNRESOLVED'} | ${op.registration.permissions.join(', ')||'inspect middleware/local scope'} | ${op.review.status} |`);
  return `# ${service} capability discovery\n\n${data.purpose.en}\n\n${data.purpose.fa}\n\n`+
    `Status: evidence inventory; semantic and wire verification remain required.\n\n`+
    `The source snapshots below are intentionally distinct. Missing local routes are not automatically removed from a released SDK.\n\n`+
    `- Canonical source revision: \`${data.canonical_revision}\`\n- SDK source revision: \`${data.sdk_source_revision??'not in current SDK source lock'}\`\n- Working HEAD: \`${data.working_revision}\`\n- Source relationship: ${data.source_relationship}\n\n`+
    `## Operation review matrix\n\n| Method/path | Handler source | Declared permissions | Semantic review |\n|---|---|---|---|\n${rows.join('\n')}\n\n`+
    `Full fields, guards, state/side-effect evidence, call dependencies, source checksums and unresolved symbols are in \`contracts/service-capabilities/${service}.json\`. `+
    `Empty declared permission arrays do not establish public access. Review gateway middleware and resource ownership.\n`;
}

mkdirSync(target,{recursive:true});
const docs=resolve(process.env.FAIBER_CAPABILITY_DOCS ?? join(sdkRoot,'docs/service-capabilities'));mkdirSync(docs,{recursive:true});
const temporary=mkdtempSync(join(tmpdir(),'faiber-capability-discovery-'));
process.once('exit',()=>rmSync(temporary,{recursive:true,force:true}));
const canonicalLock=join(temporary,'canonical-revisions.json');
writeFileSync(canonicalLock,JSON.stringify(canonicalRevisions));
writeFileSync(join(target,'canonical-source-revisions.json'),JSON.stringify(canonicalRevisions,null,2)+'\n');
// Extract both immutable SDK snapshots and the working source tree. Do not overwrite the released manifest.
const runExtractor=(root,label,lockFile)=>{
  const path=join(temporary,`${label}-contracts.json`);
  const output=execFileSync(process.execPath,[join(sdkRoot,'scripts/extract-service-contracts.mjs'),path],{
    cwd:sdkRoot,env:{...process.env,...(root?{FAIBER_SERVICES_ROOT:root}:{}),...(lockFile?{FAIBER_SOURCE_REVISIONS_FILE:lockFile}:{})},encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:8*1024*1024,
  });
  return {manifest:readJson(path),output};
};
const canonical=runExtractor(null,'canonical',canonicalLock).manifest;
const published=readJson(join(sdkRoot,'service-contracts.json'));
const working=runExtractor(join(workspace,'Service'),'working').manifest;
const pinnedRoot=serviceSources(sdkRoot,join(workspace,'Service'),{lockPath:canonicalLock});
const summary={schema_version:'1.0',services:{},gates:{discovery:'blocked',sdk:'blocked_by_discovery',manage:'blocked_by_sdk',knowledge:'blocked_by_manage',memory:'blocked_by_knowledge'}};
for(const [service,entry] of Object.entries(universe.services)) {
  const root=join(workspace,entry.directory),revision=git(root,'rev-parse','HEAD');
  const lock=locks[service];let relationship='not_in_sdk_lock';
  if(lock){
    const ancestor=(a,b)=>{try{git(root,'merge-base','--is-ancestor',a,b);return true;}catch{return false;}};
    relationship=revision===lock.revision?'same':ancestor(revision,lock.revision)?'working_behind_sdk':ancestor(lock.revision,revision)?'working_ahead_of_sdk':'diverged';
  }
  const files=sourceFiles(lock?join(pinnedRoot,lock.directory):root,entry.directory.replace(/^Service\//,''));
  const currentFiles=lock?sourceFiles(root,entry.directory.replace(/^Service\//,'')):files;
  const reviews=readJson(join(target,'reviews',`${service}.json`))??{};
  const extraRouterEntries={manage:{path:'src/router.rs',function:'app'},agentic:{path:'src/router.rs',function:'api_router'},control:{path:'crates/faiber-server/src/routes.rs',function:'api_router'},
    knowledge:{path:'src/main.rs',function:'main',variable:'app'},chat:{path:'src/main.rs',function:'main',variable:'app'},state:{path:'src/main.rs',function:'main',variable:'app'},
    task:{path:'src/routes.rs',function:'app'}};
  const defaultRouter=files.find(file=>file.path.endsWith('/src/router.rs'));
  const routerEntry=extraRouterEntries[service]??(defaultRouter?.functions.some(fn=>fn.name==='routes')?{path:'src/router.rs',function:'routes'}:null);
  const mounted=routerEntry?mountedRouterOperations(files,routerEntry):null;
  const extracted=canonical[service]??[];
  const endpoints=mounted?mounted.operations.map(operation=>{
    const signature=extracted.find(x=>x.method===operation.method&&x.path===operation.path)
      ??extracted.find(x=>x.method===operation.method&&x.handler===operation.handler&&x.source===operation.source);
    return {...signature,...operation};
  }):extracted;
  const treeChecksum=hash(JSON.stringify(files.map(({path,checksum})=>({path,checksum}))));
  const old=new Map(endpoints.map(x=>[`${x.method} ${x.path}`,x])),now=new Map((working[service]??[]).map(x=>[`${x.method} ${x.path}`,x]));
  const sdk=new Map((published[service]??[]).map(x=>[`${x.method} ${x.path}`,x]));
  const data={schema_version:'1.0',service,...entry,canonical_revision:canonicalRevisions[service]?.revision??revision,sdk_source_revision:lock?.revision??null,working_revision:revision,
    working_changes:git(root,'status','--short','--','src','entity','migration','crates').split('\n').filter(Boolean),
    source_relationship:relationship,
    source_tree_checksum:treeChecksum,
    source_files:files.map(({path,checksum})=>({path,checksum})),
    operations:endpoints.map(endpoint=>operationEvidence(files,endpoint,reviews[`${endpoint.method} ${endpoint.path}`],treeChecksum)),
    sdk_contract_drift:{missing:[...old.keys()].filter(k=>!sdk.has(k)),extra:[...sdk.keys()].filter(k=>!old.has(k)),changed:[...old.keys()].filter(k=>sdk.has(k)&&JSON.stringify(old.get(k))!==JSON.stringify(sdk.get(k)))},
    router_reconciliation:mounted?{unresolved:mounted.unresolved,duplicates:mounted.duplicates,
      independent_mounted_operations:mounted.operations,
      missing_from_extracted_manifest:mounted.operations.filter(op=>!extracted.some(x=>`${x.method} ${x.path}`===`${op.method} ${op.path}`)).map(op=>`${op.method} ${op.path}`),
      absent_from_mounted_graph:extracted.filter(op=>!old.has(`${op.method} ${op.path}`)).map(op=>`${op.method} ${op.path}`)}:null,
    working_drift:{added:[...now.keys()].filter(k=>!old.has(k)),absent:[...old.keys()].filter(k=>!now.has(k)),changed:[...now.keys()].filter(k=>old.has(k)&&JSON.stringify(old.get(k))!==JSON.stringify(now.get(k)))},
    working_route_candidates:candidateRegistrations(currentFiles),
    middleware_sources:currentFiles.filter(x=>/(?:auth|context|router|main|session|policy)\.rs$/.test(x.path)).map(x=>({path:x.path,checksum:x.checksum})),
    missing_meaning_sources:entry.sources.filter(path=>!existsSync(join(root,path))),
    completeness:'not_verified'};
  writeFileSync(join(target,`${service}.json`),JSON.stringify(compactEvidence(data),null,2)+'\n');
  writeFileSync(join(docs,`${service}.md`),markdown(service,data));
  summary.services[service]={mounted_operations:data.operations.length,working_route_candidates:data.working_route_candidates.length,
    resolved_handlers:data.operations.filter(x=>x.handler).length,reviewed_operations:data.operations.filter(x=>x.review.status==='verified').length,
    source_relationship:relationship,missing_meaning_sources:data.missing_meaning_sources,unresolved_router_edges:mounted?.unresolved.length??0};
  console.log(`${service}: ${data.operations.length} locked operations; ${summary.services[service].resolved_handlers} resolved handlers; ${data.working_route_candidates.length} working registrations; ${relationship}`);
}
writeFileSync(join(target,'summary.json'),JSON.stringify(summary,null,2)+'\n');
console.log('Discovery evidence written. Release gates remain blocked until semantic/wire/workflow review is verified.');
