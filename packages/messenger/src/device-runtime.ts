import type { MessengerDeliveryApi, PendingDeviceNotification, DeviceDeliveryTransport } from './delivery.js';
/** Runtime-neutral delivery adapter. Persist deduplication by delivery_id before returning true.
 * false means this device could not present/accept the item; it remains recoverable by another transport.
 */
export interface DeviceDeliveryRuntimeOptions {
 api:MessengerDeliveryApi;
 deviceId:string;
 userId:string;
 deliver:(item:PendingDeviceNotification,transport:DeviceDeliveryTransport,signal:AbortSignal)=>Promise<boolean>;
 onError?:(error:unknown)=>void;
 pollIntervalMs?:number;
}
export interface DeviceDeliveryRuntime {
 /** Call true only after authenticated socket subscription succeeds; false on disconnect. */
 setSocketConnected:(connected:boolean)=>void;
 /** Socket/push signals carry no authority: drain the owned durable device queue. */
 notify:()=>void;
 /** Abort in-flight work on logout/account switch. Presence expires without needing a final network call. */
 stop:()=>void;
}
/** Start one serialized queue consumer for an authenticated installation. Socket wakes it immediately,
 * polling repairs lost hints, and each item shares the same receipt across transports. No permission prompt.
 */
export function startDeviceDelivery(options:DeviceDeliveryRuntimeOptions):DeviceDeliveryRuntime {
 const controller=new AbortController();
 const signal=controller.signal;
 let socket=false,dirty=false,running=false,failures=0;
 let timer:ReturnType<typeof setTimeout>|undefined;
 let presenceAt=0;
 let settleTimer:ReturnType<typeof setTimeout>|undefined;
 const interval=Math.max(5000,options.pollIntervalMs??25000);
 async function run(){
  if(signal.aborted)return;
  if(running){dirty=true;return;}
  clearTimeout(timer);running=true;dirty=false;
  let delay=interval;
  try{
   if(Date.now()-presenceAt>=25000){
    await options.api.presence(options.deviceId,{socket_connected:socket},{signal});
    presenceAt=Date.now();
   }
   // Bound work per turn, yielding when a large backlog is successfully drained.
   for(let pageNumber=0;pageNumber<5&&!signal.aborted;pageNumber++){
    const page=(await options.api.pending(options.deviceId,{signal})).data.data;
    let acknowledged=0;
    for(const item of page.items){
     if(signal.aborted)return;
     if(item.recipient_id!==options.userId)continue;
     const transport=socket?'socket':'pull';
     if(await options.deliver(item,transport,signal)){
      if(signal.aborted)return;
      await options.api.acknowledge({delivery_id:item.delivery_id,receipt_token:item.receipt_token,transport},{signal});
      acknowledged++;
     }
    }
    if(!page.has_more||acknowledged===0)break;
    if(pageNumber===4)dirty=true;
   }
   failures=0;
  }catch(error){
   if(!signal.aborted){
    try { options.onError?.(error); } catch { /* Consumer error reporting cannot stop recovery. */ }
    delay=Math.min(60000,1000*2**Math.min(failures++,6))+Math.random()*1000;
   }
  }finally{
   running=false;
   if(!signal.aborted)timer=setTimeout(()=>void run(),dirty?100:delay);
  }
 }
 const wake=()=>{if(signal.aborted)return;dirty=true;void run();};
 const notify=()=>{wake();clearTimeout(settleTimer);settleTimer=setTimeout(wake,1000);};
 void run();
 return {setSocketConnected(connected){if(socket!==connected){socket=connected;presenceAt=0;wake();}},notify,stop(){controller.abort();clearTimeout(timer);clearTimeout(settleTimer);}};
}
