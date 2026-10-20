import {loadRuntimeInventory} from './runtime-inventory.mjs';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateCapabilityGate, verifyRunArtifacts } from './capability-gates.mjs';

const root=resolve(dirname(fileURLToPath(import.meta.url)),'..','contracts/service-capabilities');
const read=path=>existsSync(path)?JSON.parse(readFileSync(path,'utf8')):null;
const universe=read(join(root,'service-universe.json'));
const services=Object.fromEntries(Object.keys(universe.services).map(service=>[service,read(join(root,`${service}.json`))]));
const stage=process.argv.find(arg=>arg.startsWith('--stage='))?.slice('--stage='.length)??'complete';
const selectedSources=read(join(root,'../../service-source-revisions.json'));
const result=evaluateCapabilityGate(universe,services,read(join(root,'relationships.json'))?.relationships??[],verifyRunArtifacts(read(join(root,'verification-runs.json'))??{},root),read(join(root,'known-gaps.json'))?.gaps??[],{stage,runtimeInventory:loadRuntimeInventory(universe.runtime_inventory,root),selectedSources});
console.log(JSON.stringify({stage:result.stage,status:result.status,blocker_count:result.failures.length,blockers:result.failures.slice(0,25),downstream_gaps:result.downstream_gaps,next:'Resolve evidence in each service matrix; source counts do not satisfy semantic/wire verification.'},null,2));
if(result.status!=='passed')process.exitCode=1;
