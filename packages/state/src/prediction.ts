import type { Entity, InputFrame, StatePatch } from "./types.js";
export interface PredictionAdapter<TState,TInput>{clone(state:TState):TState;apply(state:TState,input:TInput,deltaSeconds:number):TState;reconcile(predicted:TState,authoritative:TState):TState}
export interface PredictionFrame<TState,TInput>{sequence:number;input:TInput;state:TState;deltaSeconds:number}
export class PredictionBuffer<TState,TInput>{
  private frames:PredictionFrame<TState,TInput>[]=[];
  constructor(private readonly adapter:PredictionAdapter<TState,TInput>,private readonly limit=120){}
  predict(sequence:number,state:TState,input:TInput,deltaSeconds:number):TState{const next=this.adapter.apply(this.adapter.clone(state),input,deltaSeconds);this.frames.push({sequence,input,state:this.adapter.clone(next),deltaSeconds});if(this.frames.length>this.limit)this.frames.shift();return next}
  acknowledge(sequence:number,authoritative:TState):TState{const pending=this.frames.filter(frame=>frame.sequence>sequence);this.frames=pending;let current=this.adapter.clone(authoritative);for(const frame of pending)current=this.adapter.apply(current,frame.input,frame.deltaSeconds);return current}
  clear(){this.frames=[]}
}
export interface TransformState{x:number;y:number;z:number}
export const transformPrediction:PredictionAdapter<TransformState,Record<string,number>>={clone:value=>({...value}),apply:(state,input,dt)=>({x:state.x+(input.move_x??0)*dt,y:state.y+(input.move_y??0)*dt,z:state.z+(input.move_z??0)*dt}),reconcile:(predicted,server)=>({x:server.x+(predicted.x-server.x)*.15,y:server.y+(predicted.y-server.y)*.15,z:server.z+(predicted.z-server.z)*.15})};
export type PredictionMessage=InputFrame|StatePatch|Entity;
