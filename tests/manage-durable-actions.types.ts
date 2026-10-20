import {FaiberSDK,type ManageAgentActionView,isManageDurableActionEvent} from '../packages/sdk/dist/index.js';
const sdk=new FaiberSDK({domains:{}}),id='cf1b746e-98bd-4da4-9be1-ceae4b395d85';
const captured={operation_id:id,expected_version:1,payload_hash:'a'.repeat(64)};
sdk.manage.getAgentActionCapabilities().then(r=>{const durable:true=r.data.durable;void durable;});
sdk.manage.listAgentActions(id);
sdk.manage.getAgentAction(id,id).then(r=>{const action:ManageAgentActionView=r.data.action;void action;});
sdk.manage.reviewAgentAction(id,id,{...captured,kind:'edit',body:{name:'Reviewed'}});
sdk.manage.operations.reviewAgentAction(id,id,{...captured,kind:'approve',reason:'Reviewed'});
sdk.manage.executeAgentAction(id,id,captured);
sdk.manage.operations.executeAgentAction(id,id,captured);
// @ts-expect-error approval requires reason
sdk.manage.reviewAgentAction(id,id,{...captured,kind:'approve'});
// @ts-expect-error an edit requires an explicit body
sdk.manage.reviewAgentAction(id,id,{...captured,kind:'edit'});
// @ts-expect-error execution cannot accept a browser replacement payload
sdk.manage.executeAgentAction(id,id,{...captured,body:{}});
// @ts-expect-error captured hash cannot be omitted
sdk.manage.operations.executeAgentAction(id,id,{operation_id:id,expected_version:1});
// @ts-expect-error internal execution commands are not public review decisions
sdk.manage.reviewAgentAction(id,id,{...captured,kind:'finish',reason:'No'});
void isManageDurableActionEvent;
