import assert from 'node:assert/strict';
import {FaiberClient} from '../packages/core/dist/index.js';
import {ReservationApi} from '../packages/reservation/dist/index.js';
const f=JSON.parse(process.env.INFERA_RESERVATION_SDK_WIRE_FIXTURE);assert.ok(/^http:\/\/127\.0\.0\.1:\d+$/.test(f.url));
let assertions=0;const covered=new Set();const observations=[];let current='bootstrap';
function check(value){assert.ok(value);assertions++;}
function api(headers=f.headers){return new ReservationApi(new FaiberClient('reservation',{domains:{reservation:f.url},axios:{proxy:false,timeout:5000,headers}}));}
const ops=api().operations,publicOps=api({}).operations;
async function ok(name,...args){current=name;const r=await ops[name](...args);check(r.status===200);check(r.data.status==='success');check('data'in r.data);covered.add(name);observations.push({method:r.config.method,path:r.config.url,status:r.status});return r.data.data;}
async function denied(code,operation){await assert.rejects(operation,e=>e.response?.status===code);assertions++;}
try{
 const h=await ok('routerHealthGet');check(typeof h.version==='string');check((await ok('routerHealthGetHealth')).version===h.version);
 current='routerOpenapiJsonGet';const spec=await ops.routerOpenapiJsonGet();check(spec.status===200);check(typeof spec.data.openapi==='string');covered.add(current);
 check(typeof await ok('integrationFlowIntegrationShowGet')==='object');
 const prefix='SDK-owned-'+Date.now();
 const service=await ok('reservationServiceStorePost',{name:prefix+'-offering',duration_minutes:30,buffer_minutes:0});
 const other=await ok('reservationServiceStorePost',{name:prefix+'-other-offering',duration_minutes:30,buffer_minutes:0});
 const unused=await ok('reservationServiceStorePost',{name:prefix+'-unused',duration_minutes:30,buffer_minutes:0});
 check((await ok('reservationServiceShowGet',service.id)).id===service.id);
 check((await ok('reservationServiceUpdatePatch',unused.id,{description:'owned updated'})).description==='owned updated');
 const page=await ok('reservationServiceIndexGet',{'page[number]':1,'page[size]':1});check(page.meta.page_size===1);check(page.data.length===1);
 const provider=await ok('providerStorePost',{name:prefix+'-provider',capacity:2});check(provider.capacity===2);
 check((await ok('providerShowGet',provider.id)).capacity===2);
 check((await ok('providerUpdatePatch',provider.id,{name:prefix+'-provider-updated'})).capacity===2);
 const providers=await ok('providerIndexGet',{'page[number]':1,'page[size]':1});check(providers.meta.page_size===1);
 for(const s of [service,other,unused])check(await ok('providerAssignServicePost',provider.id,{service_id:s.id})===null);
 const assigned=await ok('providerListServicesGet',provider.id);check(assigned.some(s=>s.id===other.id));
 check(await ok('providerRemoveServiceDelete',provider.id,unused.id)===null);
 check(await ok('reservationServiceDestroyDelete',unused.id)===null);
 const scratch=await ok('providerStorePost',{name:prefix+'-scratch'});check(await ok('providerDestroyDelete',scratch.id)===null);
 const date=new Date(Date.now()+30*86400000).toISOString().slice(0,10);
 const weekday=new Intl.DateTimeFormat('en-US',{weekday:'long',timeZone:'UTC'}).format(new Date(date+'T00:00:00Z')).toLowerCase();
 const schedule=await ok('workScheduleUpsertPut',provider.id,{schedules:[{day_of_week:weekday,start_time:'09:00',end_time:'10:00',is_active:true}]});check(schedule.length===1);
 check((await ok('workScheduleIndexGet',provider.id))[0].day_of_week===weekday);
 for(const s of [service,other])check(await ok('timeSlotGeneratePost',{provider_id:provider.id,service_id:s.id,from_date:date,to_date:date})===4);
 const available=await ok('timeSlotAvailableGet',{provider_id:provider.id,service_id:service.id,date});check(available.length===4);check(available.every(s=>s.reserved_by_user_id===null));
 const slot=available[0];check((await ok('timeSlotShowGet',slot.id)).starts_at===slot.starts_at);
 check((await ok('timeSlotUpdatePatch',slot.id,{starts_at:slot.starts_at,ends_at:slot.ends_at})).id===slot.id);
 const publicSlots=await publicOps.timeSlotAvailableGet({provider_id:provider.id,date});check(publicSlots.status===200);check(publicSlots.data.data.every(s=>s.reserved_by_user_id===null));
 const otherSlots=await ok('timeSlotAvailableGet',{provider_id:provider.id,service_id:other.id,date});const same=otherSlots.find(s=>s.starts_at===slot.starts_at);check(!!same);
 const extra=available.find(s=>s.starts_at!==slot.starts_at);check(await ok('timeSlotDestroyDelete',extra.id)===null);
 const first=await ok('reservationStorePost',{time_slot_id:slot.id,user_id:f.headers['x-user-id'],notes:'owned booking'});check(first.status==='confirmed');
 const second=await ok('reservationStorePost',{time_slot_id:same.id,user_id:f.headers['x-user-id']});
 check((await ok('reservationShowGet',first.id)).user_id===f.headers['x-user-id']);
 check((await ok('reservationUpdatePatch',second.id,{notes:'updated note',status:'confirmed'})).notes==='updated note');
 const capacity=await ok('providerCapacityReportGet',provider.id,{'page[number]':1,'page[size]':1});check(capacity.capacity===2);check(capacity.peak_current_future===2);check(typeof capacity.observed_at==='string');check(capacity.conflict_count===0);
 const remaining=available.find(s=>s.starts_at===slot.starts_at&&s.id!==slot.id);
 await denied(409,()=>ops.reservationStorePost({time_slot_id:remaining.id,user_id:f.headers['x-user-id']}));
 await denied(409,()=>ops.reservationStorePost({time_slot_id:slot.id,user_id:f.headers['x-user-id']}));
 await denied(409,()=>ops.providerUpdatePatch(provider.id,{capacity:1}));
 await denied(409,()=>ops.timeSlotDestroyDelete(slot.id));await denied(409,()=>ops.providerDestroyDelete(provider.id));await denied(409,()=>ops.reservationServiceDestroyDelete(service.id));
 await denied(400,()=>ops.reservationUpdatePatch(first.id,{status:'not-a-state'}));
 await denied(400,()=>ops.timeSlotAvailableGet({date:'invalid'}));await denied(400,()=>ops.providerStorePost({name:prefix+'-invalid',capacity:0}));
 check(await ok('reservationCancelDelete',first.id)===null);check((await ok('reservationShowGet',first.id)).status==='cancelled');
 const rebooked=await ok('reservationStorePost',{time_slot_id:slot.id,user_id:f.headers['x-user-id']});
 check(await ok('reservationCancelDelete',first.id)===null);
 check((await ok('reservationShowGet',rebooked.id)).status==='confirmed');check((await ok('timeSlotShowGet',slot.id)).is_reserved===true);
 check((await ok('providerCapacityReportGet',provider.id)).peak_current_future===2);
 const bookings=await ok('reservationIndexGet',{provider_id:provider.id,service_id:service.id,user_id:f.headers['x-user-id'],status:'cancelled','page[number]':1,'page[size]':1});check(bookings.meta.total_items===1);check(bookings.data[0].id===first.id);
 const anonymous=api({}).operations;await denied(401,()=>anonymous.providerShowGet(provider.id));
 const noGrants=api({...f.headers,'x-user-permissions':''}).operations;await denied(403,()=>noGrants.providerShowGet(provider.id));
 check(covered.size===30);
 console.log(JSON.stringify({status:'passed',assertions,operations:[...covered].sort(),observations,scope:'actual mounted Reservation router and compiled SDK, real PostgreSQL/RabbitMQ; trusted gateway fixture; provider capacity shared across offerings, lifecycle/history, filters and native request permissions; not live IDP/gateway binding or cross-service user identity lookup'}));
}catch(error){console.error(JSON.stringify({status:'failed',assertions,current,code:error.code,statusCode:error.response?.status,message:error instanceof assert.AssertionError?'assertion failed':'workflow failed'}));process.exitCode=1;}
