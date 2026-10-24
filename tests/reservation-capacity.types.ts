import type {ReservationApi} from '@faiber/faiber-reservation';
declare const api:ReservationApi;
api.operations.providerStorePost({name:'Owned provider',capacity:2});
// @ts-expect-error capacity is numeric, not a free-form string
api.operations.providerStorePost({name:'Owned provider',capacity:'two'});
api.operations.providerShowGet(1).then(r=>{const capacity:number=r.data.data.capacity;void capacity;});
api.operations.providerCapacityReportGet(1,{'page[number]':1,'page[size]':20}).then(r=>{
 const occupied:number=r.data.data.peak_current_future;
 const observed:string=r.data.data.observed_at;
 const conflicts:Array<{starts_at:string;ends_at:string;occupied:number}>=r.data.data.conflicts;
 void [occupied,observed,conflicts];
});
api.operations.reservationCancelDelete(1).then(r=>{const receipt:null=r.data.data;void receipt;});
api.operations.providerAssignServicePost(1,{service_id:2}).then(r=>{const receipt:null=r.data.data;void receipt;});
api.operations.routerOpenapiJsonGet().then(r=>{const version:string=r.data.openapi;void version;});
