import type { QualityProfile } from "./quality.js";
export interface TextureVariant{url:string;width:number;height:number;format?:"avif"|"webp"|"png"|"ktx2";bytes?:number}
export function selectTexture(variants:TextureVariant[],quality:QualityProfile,displayPixels:number):TextureVariant{if(!variants.length)throw new Error("At least one texture variant is required");const target=Math.min(quality.capabilities.maxTextureSize,displayPixels*quality.features.textureScale);return[...variants].sort((a,b)=>a.width-b.width).find(v=>v.width>=target)??[...variants].sort((a,b)=>b.width-a.width)[0]!}
export interface AssetLoader{loadTexture(variants:TextureVariant[],displayPixels:number):Promise<unknown>;preload(urls:string[]):Promise<void>}
