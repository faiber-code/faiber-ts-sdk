import type { ModulesApi, CreateModuleRequestInput, CreateSampleInput, CreatePricingInput, Product, AutocompleteQuery, ContentDocument, ModulesAuthSelf, ModulesSettings, CartResponse, ModulesOrderResponse } from '@faiber/faiber-modules';
declare const api:ModulesApi;
const request:CreateModuleRequestInput={key:'support',name:'Support'};
const sample:CreateSampleInput={slug:'hello',name:'Hello'};
const pricing:CreatePricingInput={service_name:'modules',hourly_price:'1',monthly_price:'2',annual_price:'3'};
const query:AutocompleteQuery={q:'fa',scope:'mixed'};
const content:ContentDocument['legacy_id']=null;
const locale:ModulesSettings['locales']={arbitrary:'backend JSON'};
const session:Promise<ModulesAuthSelf>=api.authSelf().then(response=>response.data);
const product:Promise<string|null>=api.products.show('p').then(response=>response.data.data.description);
const order:Promise<ModulesOrderResponse>=api.orders.show('o').then(response=>response.data);
const deleted:Promise<string>=api.orders.delete('o').then(response=>response.data.message);
const cart:Promise<CartResponse>=api.cart().then(response=>response.data);
const sse:Promise<string>=api.operations.managementApiRunAgentPost({operation:'draft',message:'Draft',specialist:'content',target_type:'content'},{headers:{'Idempotency-Key':'key'}}).then(response=>response.data);
// @ts-expect-error category is not a supported autocomplete scope
const invalid:AutocompleteQuery={q:'x',scope:'categories'};
// @ts-expect-error request keys are required by the backend
const missingKey:CreateModuleRequestInput={name:'Support'};
// @ts-expect-error output decimal is serialized as a string
const price:Product['name']=42;
void [request,sample,pricing,query,content,locale,session,product,order,deleted,cart,sse,invalid,missingKey,price];
