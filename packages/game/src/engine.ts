import { World, type GameSystem } from "./ecs.js";
import { AdaptiveQualityController, detectCapabilities, selectQuality, type QualityProfile, type QualityTier } from "./quality.js";
import { chooseRenderer, HeadlessRenderer, WebGl2Renderer, WebGpuRenderer, type Renderer, type RendererFactory, type RendererKind } from "./renderer.js";
import type { WasmGamePlugin } from "./wasm.js";
export interface GameConfig{canvas?:HTMLCanvasElement;tickRate?:number;maxFrameDelta?:number;quality?:QualityTier;renderer?:RendererKind;rendererFactory?:RendererFactory;autoResize?:boolean}
export class FaiberGame{
  readonly world=new World();readonly systems:GameSystem[]=[];readonly plugins:WasmGamePlugin[]=[];renderer?:Renderer;quality?:AdaptiveQualityController;private running=false;private previous=0;private accumulator=0;private frame=0;
  constructor(readonly config:GameConfig={}){}
  use(system:GameSystem){this.systems.push(system);return this}useWasm(plugin:WasmGamePlugin){this.plugins.push(plugin);return this}
  async start(){if(this.running)return;const canvas=this.config.canvas;const capabilities=detectCapabilities(canvas);const profile=selectQuality(capabilities,this.config.quality);this.quality=new AdaptiveQualityController(profile);const kind=chooseRenderer(profile,this.config.renderer);this.renderer=this.createRenderer(kind);if(canvas)await this.renderer.initialize(canvas,profile);for(const plugin of this.plugins)plugin.start();this.running=true;this.previous=performance.now();this.frame=requestAnimationFrame(time=>this.loop(time));if(canvas&&this.config.autoResize!==false)this.resize()}
  stop(){this.running=false;cancelAnimationFrame(this.frame);for(const plugin of this.plugins)plugin.stop();this.renderer?.dispose()}
  resize(){const canvas=this.config.canvas;if(!canvas||!this.renderer||!this.quality)return;const scale=this.quality.profile.features.resolutionScale;const ratio=Math.min(devicePixelRatio||1,2)*scale;canvas.width=Math.floor(canvas.clientWidth*ratio);canvas.height=Math.floor(canvas.clientHeight*ratio);this.renderer.resize(canvas.clientWidth,canvas.clientHeight,ratio)}
  private loop(time:number){if(!this.running)return;const started=performance.now();const fixed=1/(this.config.tickRate??60);const elapsed=Math.min((time-this.previous)/1000,this.config.maxFrameDelta??.1);this.previous=time;this.accumulator+=elapsed;while(this.accumulator>=fixed){for(const system of this.systems)void system.update(this.world,fixed);for(const plugin of this.plugins)plugin.update(fixed);this.accumulator-=fixed}this.renderer?.render({alpha:this.accumulator/fixed,time});const changed=this.quality?.sampleFrame(performance.now()-started);if(changed)this.frame=requestAnimationFrame(value=>this.loop(value))}
  private createRenderer(kind:RendererKind):Renderer{if(this.config.rendererFactory)return this.config.rendererFactory(kind);if(kind==="webgpu")return new WebGpuRenderer();if(kind==="webgl2")return new WebGl2Renderer();return new HeadlessRenderer()}
}
export type { QualityProfile };
