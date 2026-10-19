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
