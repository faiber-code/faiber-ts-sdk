import type {ManageAgentActionReviewInput,ManageAgentActionExecuteInput,ManageAgentActionCapabilities} from './durable.types.js';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function actionIdentifier(value:unknown):asserts value is string {
 if(typeof value!=='string'||!UUID.test(value)||/^0{8}-0{4}-0{4}-0{4}-0{12}$/.test(value))throw new TypeError('A non-nil action, thread or operation UUID is required');
}
function object(value:unknown):asserts value is Record<string,unknown>{
 if(value===null||typeof value!=='object'||Array.isArray(value)||![Object.prototype,null].includes(Object.getPrototypeOf(value)))throw new TypeError('A structured durable action request is required');
}
function capture(value:unknown,keys:string[]):asserts value is Record<string,unknown>{
 object(value);if(Object.keys(value).some(key=>!keys.includes(key)))throw new TypeError('Only reviewed durable action fields may be supplied');
 actionIdentifier(value.operation_id);
 if(!Number.isSafeInteger(value.expected_version)||(value.expected_version as number)<1||typeof value.payload_hash!=='string'||!/^[a-f0-9]{64}$/i.test(value.payload_hash))throw new TypeError('The captured action version and SHA256 payload hash are required');
}
function json(value:unknown,depth=0,ancestors=new Set<object>()):void{
 if(depth>32)throw new TypeError('Durable action input nesting exceeds the supported bound');
 if(value===null||typeof value==='string'||typeof value==='boolean')return;
 if(typeof value==='number'&&Number.isFinite(value))return;
 if(typeof value!=='object'||ancestors.has(value))throw new TypeError('Durable action input must be finite acyclic JSON');
 if(!Array.isArray(value))object(value);
 ancestors.add(value);for(const child of (Array.isArray(value)?value:Object.values(value)))json(child,depth+1,ancestors);ancestors.delete(value);
}
function bounded(value:unknown){json(value);if(new TextEncoder().encode(JSON.stringify(value)).length>32768)throw new TypeError('Durable action input exceeds32KiB');}
export function validateReview(value:ManageAgentActionReviewInput):void{
 capture(value,['operation_id','expected_version','payload_hash','kind','body','reason']);
 if(value.kind==='edit'){if(!Object.hasOwn(value,'body'))throw new TypeError('An explicit edited body is required');}
 else if(value.kind==='approve'||value.kind==='reject'){if(Object.hasOwn(value,'body')||typeof value.reason!=='string'||!value.reason.trim())throw new TypeError('Approval or rejection requires a reason and no replacement body');}
 else throw new TypeError('Only edit, approve and reject decisions are public');
 if(value.reason!==undefined&&(typeof value.reason!=='string'||new TextEncoder().encode(value.reason).length>2048))throw new TypeError('The review reason exceeds2048 UTF8 bytes');
 bounded(value);
}
export function validateExecution(value:ManageAgentActionExecuteInput):void{capture(value,['operation_id','expected_version','payload_hash']);bounded(value);}
export function validateCapabilities(value:unknown):asserts value is ManageAgentActionCapabilities{
 object(value);if(value.protocol!=='durable-manage-action-v1'||value.durable!==true||value.legacy_completion!==false||value.schema_mode!=='closed-json-schema-subset')throw new Error('Durable Manage action protocol is unavailable');
}
