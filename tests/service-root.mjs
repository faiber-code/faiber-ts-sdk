import {existsSync} from 'node:fs';
import {dirname,join} from 'node:path';

/** Discover sibling service sources from a checkout or nested Git worktree. */
export function serviceRoot(root){
 if(process.env.FAIBER_SERVICES_ROOT)return process.env.FAIBER_SERVICES_ROOT;
 for(let parent=dirname(root);;parent=dirname(parent)){
  for(const name of ['services','Service']){const path=join(parent,name);if(existsSync(join(path,'infera-idp','src')))return path}
  if(parent===dirname(parent))break;
 }
 throw new Error('Set FAIBER_SERVICES_ROOT to the service checkout directory');
}
