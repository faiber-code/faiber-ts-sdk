import test from 'node:test';
import assert from 'node:assert/strict';
import {cpSync,mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,symlinkSync,statSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {tmpdir} from 'node:os';
import {spawnSync,spawn} from 'node:child_process';
import {createServer} from 'node:http';
const root=resolve(import.meta.dirname,'..');
function fixture(){
 const work=mkdtempSync(join(tmpdir(),'faiber-generate-check-'));
 cpSync(join(root,'scripts'),join(work,'scripts'),{recursive:true});
 symlinkSync(join(root,'node_modules'),join(work,'node_modules'),'dir');
 writeFileSync(join(work,'package.json'),JSON.stringify({type:'module'}));
 const source=join(work,'Service/infera-profile/src');mkdirSync(source,{recursive:true});
 writeFileSync(join(source,'routes.rs'),'pub async fn settings() -> Json<Value> { todo!() }\n');
 const dest=join(work,'packages/profile/src');mkdirSync(dest,{recursive:true});
 writeFileSync(join(dest,'index.ts'),'import { ServiceApi } from "@faiber/sdk-core";\nexport class ProfileApi extends ServiceApi {\n}\n');
 const operation=JSON.parse(readFileSync(join(root,'service-contracts.json'),'utf8')).profile.find(op=>op.method==='GET'&&op.path==='/api/v1/ai-summaries/settings');
 writeFileSync(join(work,'manifest.json'),JSON.stringify({profile:[operation]}));
 return {work,dest,env:{...process.env,FAIBER_SERVICES_ROOT:join(work,'Service')}};
}
function generate(f,...args){return spawnSync(process.execPath,[join(f.work,'scripts/generate-service-operations.mjs'),join(f.work,'manifest.json'),...args],{env:f.env,encoding:'utf8',timeout:15000});}
test('generation check compares complete output and export wiring without changing bytes or mtimes',()=>{
 const f=fixture();
 try{
  const created=generate(f,'profile');assert.equal(created.status,0,created.stderr);
  const paths=['index.ts','operations.ts','operations.types.ts'].map(name=>join(f.dest,name));
  const snapshot=()=>paths.map(path=>({bytes:readFileSync(path,'utf8'),mtime:statSync(path,{bigint:true}).mtimeNs}));
  const initial=snapshot();const checked=generate(f,'--check','profile');
  assert.equal(checked.status,0,checked.stderr);assert.deepEqual(snapshot(),initial);
  writeFileSync(paths[1],readFileSync(paths[1],'utf8')+'\n// stale operation body\n');
  writeFileSync(paths[0],readFileSync(paths[0],'utf8').replace('export * from "./operations.types.js";',''));
  const stale=snapshot(),rejected=generate(f,'profile','--check');
  assert.notEqual(rejected.status,0);assert.match(rejected.stderr,/Generated SDK outputs are stale/);
  assert.match(rejected.stderr,/operations.ts/);assert.match(rejected.stderr,/index.ts/);
  assert.deepEqual(snapshot(),stale);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});
test('unknown service selection fails rather than reporting an empty successful generation',()=>{
 const f=fixture();
 try{const result=generate(f,'does-not-exist','--check');assert.notEqual(result.status,0);assert.match(result.stderr,/Unknown contract service/);}
 finally{rmSync(f.work,{recursive:true,force:true});}
});
test('optional OpenAPI import never probes a legacy fallback when explicit source configuration is missing',async()=>{
 const f=fixture();let requests=0;
 const server=createServer((_request,response)=>{requests++;response.setHeader('content-type','application/json');response.end(JSON.stringify({openapi:'3.0.3',info:{title:'Owned',version:'1'},paths:{}}));});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{
  writeFileSync(join(f.work,'openapi.config.json'),JSON.stringify({services:{profile:{env:'FAIBER_PROFILE_OPENAPI',fallback:'http://127.0.0.1:'+server.address().port+'/api-doc/openapi.json'}}}));
  const result=await new Promise((resolve,reject)=>{
   const child=spawn(process.execPath,[join(f.work,'scripts/generate-openapi.mjs'),'--services=profile','--check'],{env:{...f.env,FAIBER_PROFILE_OPENAPI:''}});
   let stderr='';child.stderr.on('data',bytes=>stderr+=bytes);const timer=setTimeout(()=>{child.kill();reject(new Error('Owned optional import timeout'));},8000);
   child.on('error',reject);child.on('close',code=>{clearTimeout(timer);resolve({code,stderr});});
  });
  assert.notEqual(result.code,0);assert.match(result.stderr,/set FAIBER_PROFILE_OPENAPI/);assert.match(result.stderr,/no service was probed/);assert.equal(requests,0);
 }finally{await new Promise(resolve=>server.close(resolve));rmSync(f.work,{recursive:true,force:true});}
});

test('serde skipped internal fields are absent while conditional wire fields remain',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'Service/infera-profile/src/routes.rs'),`
#[derive(Deserialize, Serialize)]
pub struct Query {
 pub user_id: String,
 #[serde(skip)]
 surface: Option<String>,
 #[serde(default, skip)]
 pub internal_default: String,
 #[serde(skip_serializing_if = "Option::is_none")]
 pub optional_wire: Option<String>,
}
pub async fn query(Json(body): Json<Query>) -> Json<Query> { todo!() }
`);
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'POST',path:'/query',module:'routes',handler:'query',handlerModule:'routes',source:'infera-profile/src/routes.rs',body:'Query',response:'Query',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  const types=readFileSync(join(f.dest,'operations.types.ts'),'utf8');
  assert.doesNotMatch(types,/surface|internal_default/);
  assert.match(types,/"user_id": string/);
  assert.match(types,/"optional_wire"\??: string \| null/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});

test('serde response presence is distinct from request defaults, including nested fields',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'Service/infera-profile/src/routes.rs'),`
#[derive(Deserialize, Serialize)]
pub struct Child {
 #[serde(default)]
 pub enabled: bool,
 pub note: Option<String>,
}
#[derive(Deserialize, Serialize)]
pub struct Query {
 #[serde(default, rename = "displayName")]
 pub display_name: String,
 pub note: Option<String>,
 #[serde(skip_serializing_if = "Option::is_none")]
 pub conditional: Option<String>,
 #[serde(skip_deserializing)]
 pub server_value: String,
 #[serde(skip_serializing)]
 pub password: String,
 pub child: Child,
}
pub async fn query(Json(body): Json<Query>) -> Json<Query> { todo!() }
`);
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'POST',path:'/query',module:'routes',handler:'query',handlerModule:'routes',source:'infera-profile/src/routes.rs',body:'Query',response:'Query',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  const types=readFileSync(join(f.dest,'operations.types.ts'),'utf8');
  const body=name=>types.match(new RegExp('export interface '+name+' extends JsonObject \\{([\\s\\S]*?)\\n\\}'))?.[1]??assert.fail('Missing '+name);
  const input=body('RoutesQueryPostInput'),output=body('RoutesQueryPostResponseData');
  assert.match(input,/"displayName"\?: string/);assert.match(output,/"displayName": string/);
  assert.match(input,/"note"\?: string \| null/);assert.match(output,/"note": string \| null/);
  assert.match(output,/"conditional"\?: string \| null/);
  assert.doesNotMatch(input,/server_value/);assert.match(output,/"server_value": string/);
  assert.match(input,/"password": string/);assert.doesNotMatch(output,/password/);
  assert.match(body('RoutesQueryPostInputChild'),/"enabled"\?: boolean/);
  assert.match(body('RoutesQueryPostResponseDataChild'),/"enabled": boolean/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});

test('literal bracket query names and legacy nested query fields share one URL parameter',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'Service/infera-profile/src/routes.rs'),`
#[derive(Deserialize)]
pub struct Page { pub number: Option<u64> }
#[derive(Deserialize)]
pub struct Query {
 pub page: Option<Page>,
 #[serde(default, rename = "page[number]")]
 pub page_number: Option<String>,
}
pub async fn query(Query(body): Query<Query>) -> Json<Value> { todo!() }
`);
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'GET',path:'/query',module:'routes',handler:'query',handlerModule:'routes',source:'infera-profile/src/routes.rs',query:'Query',response:'Value',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  const types=readFileSync(join(f.dest,'operations.types.ts'),'utf8');
  assert.equal((types.match(/"page\[number\]"/g)??[]).length,1);
  assert.match(types,/"page\[number\]"\?: number \| null \| string/);
  assert.doesNotMatch(types,/"page_number"/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});


test('Rust unit fields serialize to JSON null rather than an object',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'Service/infera-profile/src/routes.rs'),`
#[derive(Serialize)]
pub struct UnitReceipt { pub result: (), }
pub async fn receipt() -> Json<UnitReceipt> { todo!() }
`);
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'GET',path:'/unit-receipt',module:'routes',handler:'receipt',handlerModule:'routes',source:'infera-profile/src/routes.rs',response:'UnitReceipt',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  const types=readFileSync(join(f.dest,'operations.types.ts'),'utf8');
  assert.match(types,/"result": null/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});

test('serde enum payloads preserve tags, fields and wire presence instead of becoming string literals',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'Service/infera-profile/src/routes.rs'),`
#[derive(Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "snake_case")]
pub enum Condition {
 Always,
 Equals { operator: String, value: i32, #[serde(default)] enabled: bool, #[serde(skip)] secret: String },
 Nested { conditions: Vec<Condition> },
}
#[derive(Serialize, Deserialize)]
#[serde(tag = "kind", content = "payload", rename_all = "snake_case")]
pub enum Adjacent { Empty, Count(u32), Pair(String, bool), }
#[derive(Serialize, Deserialize)]
pub enum External { Empty, Text(String), Record { #[serde(rename = "wireName")] name: String }, }
#[derive(Serialize, Deserialize)]
#[serde(untagged)]
pub enum Loose { Text(String), Count(u32), }
#[derive(Serialize, Deserialize)]
pub struct EnumReceipt { pub condition: Condition, pub adjacent: Adjacent, pub external: External, pub loose: Loose }
pub async fn enums(Json(body): Json<EnumReceipt>) -> Json<EnumReceipt> { todo!() }
`);
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'POST',path:'/enum-receipt',module:'routes',handler:'enums',handlerModule:'routes',source:'infera-profile/src/routes.rs',body:'EnumReceipt',response:'EnumReceipt',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  const types=readFileSync(join(f.dest,'operations.types.ts'),'utf8');
  assert.match(types,/"type": "always"/);
  assert.match(types,/"type": "equals"/);
  assert.match(types,/"operator": string/);
  assert.match(types,/"enabled"\?: boolean/);
  assert.match(types,/"enabled": boolean/);
  assert.doesNotMatch(types,/"secret"/);
  assert.match(types,/"kind": "count"; "payload": number/);
  assert.match(types,/"kind": "pair"; "payload": \[string, boolean\]/);
  assert.match(types,/\{ "Text": string \}/);
  assert.match(types,/"wireName": string/);
  assert.match(types,/Loose = string \| number/);
  assert.doesNotMatch(types,/BackendJson<"Condition">/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});


test('JSON aliases retain an explicit JSON type without an unresolved DTO brand',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'Service/infera-profile/src/routes.rs'),`
use serde_json::Value as JsonValue;
use sea_orm::prelude::Json;
#[derive(Serialize)]
pub struct Metadata { pub custom: JsonValue, pub metadata: Json, pub qualified: sea_orm::prelude::Json }
pub async fn metadata() -> Json<Metadata> { todo!() }
`);
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'GET',path:'/metadata-fixture',module:'routes',handler:'metadata',handlerModule:'routes',source:'infera-profile/src/routes.rs',response:'Metadata',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  const types=readFileSync(join(f.dest,'operations.types.ts'),'utf8');
  assert.match(types,/"custom": JsonValue/);
  assert.match(types,/"metadata": JsonValue/);
  assert.match(types,/"qualified": JsonValue/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});

test('purpose-only release review preserves existing collaboration wire metadata',()=>{
 const f=fixture();
 try{
  writeFileSync(join(f.work,'scripts/collaboration-contract-overrides.mjs'),'export const collaborationContracts = {"profile:GET /precedence": {response: "{ value: string }"}};\n');
  const override=join(f.work,'scripts/release-contract-overrides.mjs');
  writeFileSync(override,readFileSync(override,'utf8')+'\nreleaseContracts["profile:GET /precedence"] = {purpose: "Reviewed source behavior"};\n');
  writeFileSync(join(f.work,'manifest.json'),JSON.stringify({profile:[{method:'GET',path:'/precedence',module:'routes',handler:'settings',handlerModule:'routes',source:'infera-profile/src/routes.rs',response:'Value',responseEnvelope:'raw',permissions:[]}]}));
  const result=generate(f,'profile');assert.equal(result.status,0,result.stderr);
  assert.match(readFileSync(join(f.dest,'operations.types.ts'),'utf8'),/Response = \{ value: string \}/);
  assert.match(readFileSync(join(f.dest,'operations.ts'),'utf8'),/Reviewed source behavior/);
 }finally{rmSync(f.work,{recursive:true,force:true});}
});
