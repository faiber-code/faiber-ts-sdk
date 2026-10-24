import assert from 'node:assert/strict';
import {FaiberClient} from '../composed-feature-sdk-source-v1/frozen/consumer/node_modules/@faiber/sdk-core/dist/index.js';
import {GisApi} from '../composed-feature-sdk-source-v1/frozen/consumer/node_modules/@faiber/faiber-gis/dist/index.js';
const base=new URL(process.env.GIS_PACKED_BASE);assert.equal(base.hostname,'127.0.0.1');assert.equal(base.protocol,'http:');
const api=new GisApi(new FaiberClient('gis',{domains:{gis:base.origin},getAuthorization:()=> 'Bearer owned-gis-bff-key-at-least-thirty-two-characters',axios:{timeout:12000,headers:{'x-user-id':'10000000-0000-4000-8000-000000000001','x-organization-id':process.env.GIS_PACKED_TENANT,'x-user-permissions':'gis:*'}}})).operations;
let assertions=0;
const eq=(a,b)=>{assert.deepEqual(a,b);assertions++;};
let job=process.env.GIS_IMPORT_JOB;
if(process.env.GIS_IMPORT_PHASE==='create') {
 const r=await api.createImport({name:'Owned SDK import',scope:'organization',bounds:[0,0,0.01,0.01]});eq(r.status,200);eq(r.data.data.state,'queued');job=r.data.data.id;assert.ok(job);assertions++;
 const d=await api.dataset(r.data.data.dataset_id);eq(d.data.data.scope,'organization');
 await assert.rejects(()=>api.retryImport(job),e=>e.response?.status===404);assertions++;
 const jobs=await api.imports();eq(jobs.data.data.some(j=>j.id===job&&j.protocol_version===2),true);
} else {
 eq(process.env.GIS_IMPORT_PHASE,'retry');const r=await api.retryImport(job);eq(r.status,200);eq(r.data.data,{id:job,state:'queued'});const jobs=await api.imports();const j=jobs.data.data.find(j=>j.id===job);eq(j.attempts,0);eq(j.error,null);eq(j.authority_revision,'b'.repeat(64));
}
console.log(JSON.stringify({id:'gis-native-packed-import',status:'passed',phase:process.env.GIS_IMPORT_PHASE,job_id:job,assertions,scope:'Actual SDK HTTP create/retry with explicit current-IDP loopback fixture and real PostGIS records. Failed-state setup is performed by native fixture between phases, not an external provider failure claim.'}));
