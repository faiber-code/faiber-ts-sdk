import {readFileSync,realpathSync} from 'node:fs';
import {resolve,relative,isAbsolute} from 'node:path';
import {createHash} from 'node:crypto';

/** Bind inventory bytes to a retained artifact inside the capability evidence root. */
export function loadRuntimeInventory(descriptor,root) {
 try {
  if(!descriptor||isAbsolute(descriptor.artifact_path??'')||!/^[a-f0-9]{64}$/.test(descriptor.sha256??''))return null;
  const directory=realpathSync(root),path=realpathSync(resolve(directory,descriptor.artifact_path)),rel=relative(directory,path);
  if(!rel||rel==='..'||rel.startsWith('../'))return null;
  const bytes=readFileSync(path);if(!bytes.length||createHash('sha256').update(bytes).digest('hex')!==descriptor.sha256)return null;
  const data=JSON.parse(bytes.toString('utf8'));
  if(!Array.isArray(data.catalog)||!data.catalog.length||!Array.isArray(data.workloads)||!data.workloads.length||!Number.isFinite(Date.parse(data.observed_at)))return null;
  if([...data.catalog,...data.workloads].some(row=>typeof row.name!=='string'))return null;
  return {artifact_verified:true,data};
 }catch{return null;}
}

/** Inventory coverage is separate from capability, permission and runtime certification. */
export function reconcileRuntimeInventory(universe,inventory) {
 const failures=[];
 if(inventory?.artifact_verified!==true){return ['active runtime inventory: missing, stale or invalid retained artifact binding'];}
 const names=[...new Set([...inventory.data.catalog,...inventory.data.workloads].map(row=>row.name).filter(name=>name.startsWith('infera-')))];
 const services=universe.services??{},packages=universe.runtime_packages??{};
 for(const name of names){
  const key=name.slice('infera-'.length);
  if(services[key])continue;
  const descriptor=packages[key];
  if(!descriptor){failures.push(`${name}: active catalog/deployed runtime is absent from service and runtime classification inventories`);continue;}
  if(!['frontend_proxy','execution_worker','external_diagnostic'].includes(descriptor.classification)||!services[descriptor.service_owner]||!descriptor.reason||!descriptor.source_refs?.length||descriptor.review_status!=='source_reviewed')failures.push(`${name}: runtime ownership/classification lacks reviewed source evidence`);
 }
 return failures;
}
