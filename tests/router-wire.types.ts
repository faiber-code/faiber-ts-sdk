import type { ServiceHealthResponse, ServiceOpenApiDocument } from '@faiber/sdk-core';
import type { IdpApi, OidcIntrospection, OidcUserInfo, ValidateSessionResponse } from '@faiber/faiber-idp';
declare const health:ServiceHealthResponse;
const version:string=health.data.version;
declare const openapi:ServiceOpenApiDocument;
const paths=openapi.paths;
declare const introspection:OidcIntrospection;
if(introspection.active){const expiry:number=introspection.exp;void expiry;}
else {
  // @ts-expect-error inactive responses have no subject
  introspection.sub;
}
declare const validation:ValidateSessionResponse;
// @ts-expect-error forward-auth puts the principal in headers, not a data property
validation.data.user_id;
declare const user:OidcUserInfo;
const name:string|null|undefined=user.name;
declare const api:IdpApi;
api.operations.authGenerateSecureOneTimeTokenRoutePost('00000000-0000-0000-0000-000000000001');
// @ts-expect-error the mounted internal route requires the target user UUID
api.operations.authGenerateSecureOneTimeTokenRoutePost();
void [version,paths,name];

import type {SessionApi,SessionNotificationStateResponse} from '@faiber/faiber-session';
import type {CrmApi} from '@faiber/faiber-crm';
import type {StateApi} from '@faiber/faiber-state-sdk';
declare const session:SessionApi;
session.operations.routerProxyViewServiceAny('chat','conversations/owned/messages','GET',undefined,{limit:2});
// @ts-expect-error the proxy selects only source-defined peer services
session.operations.routerProxyViewServiceAny('external','items','GET',undefined);
// @ts-expect-error ANY is a router filter, not an HTTP wire verb
session.operations.routerProxyViewServiceAny('chat','items','ANY',undefined);
// @ts-expect-error opaque peer transport requires bytes/string, not a fabricated JSON DTO
session.operations.routerProxyViewServiceAny('chat','items','POST',{arbitrary:true});
declare const state:StateApi;
state.operations.mainProcessHealthGet().then(r=>{const service:'infera-state'=r.data.data.service;void service;});
declare const crm:CrmApi;
crm.operations.routerApiPathNotFoundAny('obsolete/items','HEAD',{validateStatus:()=>true}).then(r=>{const code:'api_route_not_found'=r.data.error.code;void code;});
declare const notification:SessionNotificationStateResponse;
const started:string|null=notification.data.actual_started_at;
void started;
