import type { ReservationApi, BookableService, Provider, Reservation, WorkSchedule } from '@faiber/faiber-reservation';
declare const api: ReservationApi;
declare const service: BookableService;
declare const provider: Provider;
declare const reservation: Reservation;
declare const schedule: WorkSchedule;
const ids: number[] = [service.id, provider.id, reservation.id, reservation.time_slot_id];
const weekday: string = schedule.day_of_week;
void [ids, weekday];
api.providers.create({name:'Consultant',capacity:2,is_active:true});
api.services.create({name:'Consultation',duration_minutes:30,buffer_minutes:5});
api.reservations.create({time_slot_id:8,user_id:'00000000-0000-4000-8000-000000000042'});
// @ts-expect-error slot IDs on the JSON wire are numbers
api.reservations.create({time_slot_id:'8',user_id:'00000000-0000-4000-8000-000000000042'});
// @ts-expect-error booking requires an existing time slot and user UUID
api.reservations.create({service_id:1,provider_id:2,starts_at:'2026-11-02T09:00:00Z'});
// @ts-expect-error generation requires service_id
api.generateSlots({provider_id:42,from_date:'2026-11-02',to_date:'2026-11-02'});
api.setSchedules(42,{schedules:[{day_of_week:'monday',start_time:'09:00',end_time:'12:00'}]});
api.assignService(42,{service_id:8});
// @ts-expect-error assignment body ID is numeric
api.assignService(42,{service_id:'8'});
api.updateSlot(8,{provider_id:42,service_id:8});
api.reservations.list({status:'cancelled',provider_id:42,'page[number]':2,'page[size]':1});
api.generateSlots({provider_id:42,service_id:8,from_date:'2026-11-02',to_date:'2026-11-02'}).then(r=>{ const count:number=r.data.data;void count; });
api.reservations.list().then(r=>{const records:Reservation[]=r.data.data.data; const total:number=r.data.data.meta.total_items;void [records,total];});
api.providerServices(42).then(r=>{const services:BookableService[]=r.data.data;void services;});
api.reservations.delete(9).then(r=>{const receipt:null=r.data.data;void receipt;});
api.providers.delete(42).then(r=>{const receipt:null=r.data.data;void receipt;});
api.services.delete(8).then(r=>{const receipt:null=r.data.data;void receipt;});
api.assignService(42,{service_id:8}).then(r=>{const receipt:null=r.data.data;void receipt;});
api.deleteSlot(8).then(r=>{const receipt:null=r.data.data;void receipt;});
api.operations.integrationFlowIntegrationShowGet().then(r=>{const queue:string=r.data.data.queue;const events:Array<{event_name:string;payload_fields:Array<{name:string;field_type:string;required:boolean;description:string}>}>=r.data.data.events;void [queue,events];});
