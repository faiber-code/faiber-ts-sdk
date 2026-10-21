import assert from 'node:assert/strict';
import {spawn,execFileSync} from 'node:child_process';
import {writeFileSync,readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {setTimeout as wait} from 'node:timers/promises';
const db=new URL(process.env.GIS_IMPORT_TEST_DATABASE_URL);assert.equal(db.hostname,'127.0.0.1');assert.equal(db.pathname,'/gis_owned_native');
const container=process.env.GIS_PACKED_POSTGIS_CONTAINER;assert.ok(container.startsWith('gis-owned-import-'));
assert.equal(execFileSync('docker',['inspect','--format','{{index .Config.Labels "io.infera.purpose"}}',container],{encoding:'utf8'}).trim(),'owned-gis-native-fixture');
const psql=(sql,user='postgres')=>execFileSync('docker',['exec','-i',container,'psql','-v','ON_ERROR_STOP=1','-U',user,'-d','gis_owned_native','-At'],{input:sql,encoding:'utf8',stdio:['pipe','pipe','pipe']});
psql("CREATE ROLE gis_owned_renderer LOGIN PASSWORD 'owned-renderer-fixture'; GRANT CONNECT ON DATABASE gis_owned_native TO gis_owned_renderer; GRANT USAGE ON SCHEMA public TO gis_owned_renderer; GRANT EXECUTE ON FUNCTION public.infera_gis_tile(integer,integer,integer,json) TO gis_owned_renderer; ALTER ROLE gis_owned_renderer SET default_transaction_read_only=on;");
assert.throws(()=>psql('SELECT * FROM gis_features LIMIT 1;','gis_owned_renderer'));
assert.throws(()=>psql("UPDATE gis_datasets SET name='forbidden';",'gis_owned_renderer'));
const base=new URL(process.env.GIS_PACKED_ACTUAL_MARTIN_URL);assert.equal(base.hostname,'127.0.0.1');
const binary=process.env.GIS_PACKED_MARTIN_BINARY;assert.equal(createHash('sha256').update(readFileSync(binary)).digest('hex'),'19f1ee26c73697323cf91851350f90907d88e3bf436e142f28d197758d318720');
db.username='gis_owned_renderer';db.password='owned-renderer-fixture';
const config=new URL('./martin-fixture.yaml',import.meta.url);writeFileSync(config,`listen_addresses: '127.0.0.1:${base.port}'\nworker_processes: 2\ncache:\n  size_mb: 32\npostgres:\n  connection_string: '${db.toString()}'\n  auto_publish: false\n  functions:\n    infera_gis:\n      schema: public\n      function: infera_gis_tile\n      minzoom: 0\n      maxzoom: 20\n`);
const log=new URL('./martin.log',import.meta.url);const {openSync,closeSync}=await import('node:fs');const handle=openSync(log,'w');
const childEnv={...process.env,GIS_RENDERER_DATABASE_URL:db.toString()};delete childEnv.DATABASE_URL;
const child=spawn(binary,['--config',fileURLToPath(config)],{env:childEnv,stdio:['ignore',handle,handle]});
try {
 let ready=false;
 for(let i=0;i<80;i++) {if(child.exitCode!==null)break;try{const r=await fetch(new URL('/health',base),{signal:AbortSignal.timeout(500)});if(r.ok){ready=true;break;}}catch{}await wait(100);}
 assert.ok(ready,'actual pinned Martin readiness: '+readFileSync(log,'utf8').slice(-1500));
 await import('./business-probe.mjs');
 console.log(JSON.stringify({id:'gis-actual-martin',status:'passed',version:'1.16.1',renderer_table_select_denied:true,renderer_write_denied:true,auto_publish:false,scope:'Actual pinned Martin process with restricted PostgreSQL role and native full-migration GIS HTTP SDK workflow, private/public MVT and privacy revocation. IDP is still explicit owned fixture; no live deployment or external provider claim.'}));
} finally {child.kill('SIGTERM');await Promise.race([new Promise(r=>child.once('exit',r)),wait(3000)]);if(child.exitCode===null)child.kill('SIGKILL');closeSync(handle);}
