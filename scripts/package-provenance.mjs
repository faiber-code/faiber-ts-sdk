import {readFileSync,writeFileSync,readdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const read=p=>readFileSync(resolve(root,p));
const json=p=>JSON.parse(read(p));
const sha=x=>createHash('sha256').update(x).digest('hex');
const pins=json('service-source-revisions.json'),contracts=json('service-contracts.json');
const actions=json('contracts/manage-durable-actions-v1/operations.json');
const treeHashes=(dir)=>Object.fromEntries(readdirSync(resolve(root,dir),{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name)).flatMap(e=>e.isDirectory()?Object.entries(treeHashes(`${dir}/${e.name}`)):[[`${dir}/${e.name}`,sha(read(`${dir}/${e.name}`))]]));
const check=process.argv.includes('--check');
for(const directory of readdirSync(resolve(root,'packages')).sort()){
 const pkg=json(`packages/${directory}/package.json`);
 const service=pins[directory];
 const sources=directory==='sdk'||directory==='core'?pins:service?{[directory]:service}:directory==='game'?{state:pins.state}:directory==='manage'?{manage:{revision:actions.manage_source},agentic:{revision:actions.agentic_source}}:{};
 const manifest={schema_version:1,package:pkg.name,version:pkg.version,source_revisions:sources,
  package_source_sha256:treeHashes(`packages/${directory}/src`),
  capability_review_sha256:existsSync(resolve(root,`contracts/service-capabilities/${directory}.json`))?sha(read(`contracts/service-capabilities/${directory}.json`)):null,
  source_pin_file_sha256:sha(read('service-source-revisions.json')),
  http_contract_file_sha256:sha(read('service-contracts.json')),
  public_contract:contracts[directory]?{kind:'source-extracted-http',operation_count:contracts[directory].length,sha256:sha(JSON.stringify(contracts[directory]))}:directory==='manage'?{kind:'reviewed-durable-actions',operation_count:actions.operations.length,sha256:sha(read('contracts/manage-durable-actions-v1/operations.json')),wire_sha256:sha(read('contracts/manage-durable-actions-v1/wire-and-runtime-contract.json'))}:{kind:directory==='game'?'local-game-runtime-with-state-transport':'shared-client-or-facade'},
  verification_scope:'Source and contract identity only. This manifest is not proof of deployed compatibility, current authorization, or complete semantic verification.'};
 const content=JSON.stringify(manifest,null,2)+'\n',path=resolve(root,`packages/${directory}/provenance.json`);
 if(check){if(readFileSync(path,'utf8')!==content)throw Error(`Stale provenance: ${pkg.name}`);if(!pkg.files.includes('provenance.json'))throw Error(`Missing packed provenance: ${pkg.name}`)}else{writeFileSync(path,content);if(!pkg.files.includes('provenance.json')){pkg.files.push('provenance.json');writeFileSync(resolve(root,`packages/${directory}/package.json`),JSON.stringify(pkg,null,2)+'\n')}}
}
console.log(`23 package provenance manifests ${check?'verified':'generated'}`);
