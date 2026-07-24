export type EntityId=number;
export type ComponentType<T extends object>=symbol&{readonly __component?:T};
export function component<T extends object>(name:string):ComponentType<T>{return Symbol(name) as ComponentType<T>}
export class World{
  private next=1;private alive=new Set<EntityId>();private stores=new Map<ComponentType<object>,Map<EntityId,object>>();
  spawn():EntityId{const entity=this.next++;this.alive.add(entity);return entity}
  despawn(entity:EntityId):void{this.alive.delete(entity);for(const store of this.stores.values())store.delete(entity)}
  add<T extends object>(entity:EntityId,type:ComponentType<T>,value:T):T{if(!this.alive.has(entity))throw new Error(`Entity ${entity} is not alive`);let store=this.stores.get(type as ComponentType<object>);if(!store){store=new Map();this.stores.set(type as ComponentType<object>,store)}store.set(entity,value);return value}
  get<T extends object>(entity:EntityId,type:ComponentType<T>):T|undefined{return this.stores.get(type as ComponentType<object>)?.get(entity) as T|undefined}
  remove<T extends object>(entity:EntityId,type:ComponentType<T>):boolean{return this.stores.get(type as ComponentType<object>)?.delete(entity)??false}
  *query<A extends object>(a:ComponentType<A>):IterableIterator<[EntityId,A]>{for(const [entity,value] of this.stores.get(a as ComponentType<object>)??[])if(this.alive.has(entity))yield[entity,value as A]}
  *query2<A extends object,B extends object>(a:ComponentType<A>,b:ComponentType<B>):IterableIterator<[EntityId,A,B]>{for(const[entity,value]of this.query(a)){const second=this.get(entity,b);if(second)yield[entity,value,second]}}
}
export interface GameSystem{readonly name?:string;update(world:World,deltaSeconds:number):void|Promise<void>}
