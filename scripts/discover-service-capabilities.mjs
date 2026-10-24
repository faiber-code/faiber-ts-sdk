import { classifyReviewedProtocolAlternatives } from './reviewed-protocol-alternatives.mjs';
import { capabilityInventoryRevision, retainCapabilitySourceDecision, retainCapabilityConsumerReview } from './capability-source-selection.mjs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { embeddedSourceEvidence } from './embedded-source-evidence.mjs';
import { sourceIndex, resolveSymbol, functionEvidence } from './capability-source.mjs';
import { mountedRouterOperations } from './capability-router.mjs';
import { serviceSources, archiveSourceRevision } from './service-source-snapshots.mjs';

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
const inventoryMode=process.env.FAIBER_CAPABILITY_SOURCE_MODE??'canonical';
const canonicalRevisions=Object.fromEntries(Object.entries(locks).map(([service,lock])=>{
  const revision=remote.repositories[service];
  if(revision?.fetch_exit!==0 || !revision.origin_main)throw new Error(`No fetched canonical source for ${service}`);
  return [service,{directory:lock.directory,revision:revision.origin_main}];
}));

function walk(directory, includeManifests = false) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).sort((a,b) => a.name.localeCompare(b.name)).flatMap(item => {
    if (['target', 'node_modules', '.git', 'vendor', 'panel', 'dist'].includes(item.name)) return [];
    const path = join(directory, item.name);
    return item.isDirectory() ? walk(path, includeManifests) : (/\.(?:rs|sql)$/.test(path) || (includeManifests && ['Cargo.toml','Cargo.lock'].includes(item.name))) ? [path] : [];
  });
}

function sourceFiles(root, directory) {
  const paths = [...new Set([...walk(join(root, 'src')), ...walk(join(root, 'entity/src')),
    ...walk(join(root,'auth')), ...walk(join(root,'auth_macro')), ...walk(join(root,'shared'),true),
    ...walk(join(root, 'crates/faiber-server/src')), ...walk(join(root, 'crates/faiber-core/src')),
    ...walk(join(root, 'domain/src')), ...walk(join(root, 'faiber-agent-core/src')),
    ...walk(join(root,'migration')), ...['Cargo.toml','Cargo.lock','build.rs','rust-toolchain.toml',
      '.cargo/config.toml','entity/Cargo.toml','migration/Cargo.toml','auth/Cargo.toml','auth_macro/Cargo.toml',
      'crates/faiber-core/Cargo.toml','crates/faiber-server/Cargo.toml'].map(path=>join(root,path)).filter(existsSync)])];
  const files = paths.map(path => {
    const text = readFileSync(path, 'utf8'), index = sourceIndex(text, `${directory}/${relative(root, path)}`);
    return { ...index, checksum: hash(text) };
  });
  const embedded = embeddedSourceEvidence(root, paths.filter(path=>path.endsWith('.rs')).map(path=>({path,text:readFileSync(path,'utf8')})));
  for (const asset of embedded.assets) {
    const path = join(root,asset.path);
    if (paths.includes(path)) continue;
    const bytes = readFileSync(path);
    files.push({...sourceIndex(asset.path.endsWith('.rs')?bytes.toString('utf8'):'',`${directory}/${asset.path}`),
      checksum:asset.checksum,embedded_by:`${directory}/${asset.embedded_by}`});
  }
  files.embedded_source_gaps = embedded.gaps;
  return files;
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
    `- Canonical source revision: \`${data.canonical_revision}\`\n- SDK source revision: \`${data.sdk_source_revision??'not in current SDK source lock'}\`\n- Evidence inventory revision: \`${data.inventory_revision}\` (${data.inventory_source})\n- Working HEAD: \`${data.working_revision}\`\n- Source relationship: ${data.source_relationship}\n\n`+
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
writeFileSync(join(target,'canonical-source-revisions.json'),JSON.stringify({schema_version:'1.0',services:Object.fromEntries(
  Object.entries(universe.services).map(([service,entry])=>[service,{directory:entry.directory,revision:remote.repositories[service]?.origin_main}])
)},null,2)+'\n');
// Extract both immutable SDK snapshots and the working source tree. Do not overwrite the released manifest.
const runExtractor=(root,label,lockFile)=>{
  const path=join(temporary,`${label}-contracts.json`);
  const environment={...process.env};
  if(root)environment.FAIBER_SERVICES_ROOT=root;
  else if(lockFile)delete environment.FAIBER_SERVICES_ROOT;
  if(lockFile)environment.FAIBER_SOURCE_REVISIONS_FILE=lockFile;
  try {
    const output=execFileSync(process.execPath,[join(sdkRoot,'scripts/extract-service-contracts.mjs'),path],{
      cwd:sdkRoot,env:environment,encoding:'utf8',stdio:['ignore','pipe','pipe'],maxBuffer:8*1024*1024,
    });
    return {manifest:readJson(path),output};
  } catch (error) {
    // An unrelated dirty router must not erase the canonical source inventory.
    // Retain the failure as unresolved drift; never certify an empty working tree.
    if (label !== 'working') throw error;
    const stderr=String(error.stderr??error.message),artifact='working-contract-extraction.stderr.log';
    writeFileSync(join(target,artifact),stderr);
    return {manifest:{},error:{status:'failed',artifact_path:artifact,artifact_sha256:hash(stderr),exit_code:error.status??null}};
  }
};
const canonical=runExtractor(null,'canonical',canonicalLock).manifest;
const inventoryRevisions=Object.fromEntries(Object.entries(canonicalRevisions).map(([service,entry])=>[service,{...entry,revision:capabilityInventoryRevision(inventoryMode,entry.revision,locks[service]?.revision)}]));
const inventoryLock=join(temporary,'inventory-revisions.json');writeFileSync(inventoryLock,JSON.stringify(inventoryRevisions));
const inventoryContracts=inventoryMode==='canonical'?canonical:runExtractor(null,'selected-sdk',inventoryLock).manifest;
const published=readJson(join(sdkRoot,'service-contracts.json'));
const workingCapture=runExtractor(join(workspace,'Service'),'working');
const working=workingCapture.manifest;
const pinnedRoot=serviceSources(sdkRoot,join(workspace,'Service'),{lockPath:inventoryLock,ignoreWorkingOverride:true});
const summary={schema_version:'1.0',services:{},gates:{discovery:'blocked',sdk:'blocked_by_discovery',manage:'blocked_by_sdk',knowledge:'blocked_by_manage',memory:'blocked_by_knowledge'}};
for(const [service,entry] of Object.entries(universe.services)) {
  const root=join(workspace,entry.directory),revision=git(root,'rev-parse','HEAD');
  const lock=locks[service];let relationship='not_in_sdk_lock';
  if(lock){
    const ancestor=(a,b)=>{try{git(root,'merge-base','--is-ancestor',a,b);return true;}catch{return false;}};
    relationship=revision===lock.revision?'same':ancestor(revision,lock.revision)?'working_behind_sdk':ancestor(lock.revision,revision)?'working_ahead_of_sdk':'diverged';
  }
  const canonicalRevision=remote.repositories[service];
  if(canonicalRevision?.fetch_exit!==0 || !canonicalRevision.origin_main)throw new Error(`Missing canonical revision for ${service}`);
  const inventoryRoot=lock?join(pinnedRoot,lock.directory):join(temporary,service);
  const inventoryRevision=capabilityInventoryRevision(inventoryMode,canonicalRevision.origin_main,lock?.revision);
  if(!lock)archiveSourceRevision(root,inventoryRevision,inventoryRoot);
  const files=sourceFiles(inventoryRoot,entry.directory.replace(/^Service\//,''));
  const currentFiles=sourceFiles(root,entry.directory.replace(/^Service\//,''));
  const reviews=readJson(join(target,'reviews',`${service}.json`))??{};
  const extraRouterEntries={manage:{path:'src/router.rs',function:'app'},agentic:{path:'src/router.rs',function:'api_router'},control:{path:'crates/faiber-server/src/routes.rs',function:'api_router'},
    social:{path:'src/main.rs',function:'main',variable:'app'},knowledge:{path:'src/main.rs',function:'main',variable:'app'},chat:{path:'src/main.rs',function:'main',variable:'app'},state:{path:'src/main.rs',function:'main',variable:'app'},
    task:{path:'src/routes.rs',function:'app'}};
  const defaultRouter=files.find(file=>file.path.endsWith('/src/router.rs'));
  const mainRouter=files.find(file=>file.path===`${entry.directory.replace(/^Service\//,'')}/src/main.rs`);
  const routerEntry=service==='lms' && mainRouter?.functions.some(fn=>fn.name==='run_server')
    ? {path:'src/main.rs',function:'run_server',variable:'app'}
    : service==='session' && mainRouter?.functions.some(fn=>fn.name==='application_router')
    ? {path:'src/main.rs',function:'application_router'}
    : service==='crm' && defaultRouter?.functions.some(fn=>fn.name==='application')
    ? {path:'src/router.rs',function:'application'}
    : extraRouterEntries[service]??(defaultRouter?.functions.some(fn=>fn.name==='routes')?{path:'src/router.rs',function:'routes'}:null);
  const mounted=routerEntry?mountedRouterOperations(files,routerEntry):null;
  if(mounted)classifyReviewedProtocolAlternatives(mounted,service,files);
  const extracted=inventoryContracts[service]??[];
  const endpoints=mounted?mounted.operations.map(operation=>{
    const signature=extracted.find(x=>x.method===operation.method&&x.path===operation.path)
      ??extracted.find(x=>x.method===operation.method&&x.handler===operation.handler&&x.source===operation.source);
    return {...signature,...operation};
  }):extracted;
  const treeChecksum=hash(JSON.stringify(files.map(({path,checksum})=>({path,checksum}))));
  const old=new Map(endpoints.map(x=>[`${x.method} ${x.path}`,x])),now=new Map((working[service]??[]).map(x=>[`${x.method} ${x.path}`,x]));
  const sdk=new Map((published[service]??[]).map(x=>[`${x.method} ${x.path}`,x]));
  const meaningSources=entry.sources.map(path=>{
    try {const bytes=execFileSync('git',['show',`${inventoryRevision}:${path}`],{cwd:root,stdio:['ignore','pipe','pipe']});return {path:`${entry.directory}/${path}`,checksum:hash(bytes)};}
    catch{return {path:`${entry.directory}/${path}`,missing:true};}
  });
  const prior=readJson(join(target,`${service}.json`));
  const priorOperations=new Map((prior?.operations??[]).map(operation=>[operation.id,operation]));
  const data={schema_version:'1.0',service,...entry,inventory_source:inventoryMode,inventory_revision:inventoryRevision,source_decision:retainCapabilitySourceDecision(prior?.source_decision,inventoryRevision,treeChecksum),relationship_review:prior?.source_tree_checksum===treeChecksum&&prior?.inventory_revision===inventoryRevision?prior?.relationship_review??null:null,canonical_revision:canonicalRevision.origin_main,sdk_source_revision:lock?.revision??null,working_revision:revision,
    working_changes:git(root,'status','--short','--','src','entity','migration','crates','shared','auth','auth_macro','Cargo.toml','Cargo.lock','build.rs').split('\n').filter(Boolean),
    source_relationship:relationship,
    source_tree_checksum:treeChecksum,
    source_files:files.map(({path,checksum,embedded_by})=>({path,checksum,...(embedded_by?{embedded_by}:{})})),
    protocol_mounts:(mounted?.protocol_mounts??[]).map(mount=>{
      const id=`PROTOCOL ${mount.path}${mount.conditions?.length?' ['+mount.conditions.map(c=>`${c.expression}=${c.pattern}`).join(';')+']':''}`;
      return {...mount,id,source_checksum:treeChecksum,review:reviews[id]??null};
    }),
    embedded_source_gaps:{inventory:files.embedded_source_gaps,working:currentFiles.embedded_source_gaps},
    working_source_tree_checksum:hash(JSON.stringify(currentFiles.map(({path,checksum})=>({path,checksum})))),
    working_source_files:currentFiles.map(({path,checksum,embedded_by})=>({path,checksum,...(embedded_by?{embedded_by}:{})})),
    operations:endpoints.map(endpoint=>{
      const operation=operationEvidence(files,endpoint,reviews[`${endpoint.method} ${endpoint.path}`],treeChecksum);
      const previous=priorOperations.get(operation.id);
      return {...operation,
        sdk:retainCapabilityConsumerReview(previous?.sdk,operation.source_checksum,'requires_wire_verification'),
        manage:retainCapabilityConsumerReview(previous?.manage,operation.source_checksum,'requires_workflow_verification')};
    }),
    sdk_contract_drift:{missing:[...old.keys()].filter(k=>!sdk.has(k)),extra:[...sdk.keys()].filter(k=>!old.has(k)),changed:[...old.keys()].filter(k=>sdk.has(k)&&JSON.stringify(old.get(k))!==JSON.stringify(sdk.get(k)))},
    router_reconciliation:mounted?{unresolved:mounted.unresolved,duplicates:mounted.duplicates,
      independent_mounted_operations:mounted.operations,
      missing_from_extracted_manifest:mounted.operations.filter(op=>!extracted.some(x=>`${x.method} ${x.path}`===`${op.method} ${op.path}`)).map(op=>`${op.method} ${op.path}`),
      absent_from_mounted_graph:extracted.filter(op=>!old.has(`${op.method} ${op.path}`)).map(op=>`${op.method} ${op.path}`)}:null,
    working_drift:{added:[...now.keys()].filter(k=>!old.has(k)),absent:workingCapture.error?[]:[...old.keys()].filter(k=>!now.has(k)),changed:[...now.keys()].filter(k=>old.has(k)&&JSON.stringify(old.get(k))!==JSON.stringify(now.get(k))),extraction_errors:workingCapture.error?[workingCapture.error]:[]},
    working_route_candidates:candidateRegistrations(currentFiles),
    middleware_sources:files.filter(x=>/(?:auth|context|router|main|session|policy)\.rs$/.test(x.path)).map(x=>({path:x.path,checksum:x.checksum})),
    working_middleware_sources:currentFiles.filter(x=>/(?:auth|context|router|main|session|policy)\.rs$/.test(x.path)).map(x=>({path:x.path,checksum:x.checksum})),
    meaning_sources:meaningSources.filter(source=>!source.missing),
    missing_meaning_sources:meaningSources.filter(source=>source.missing).map(source=>source.path),
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
