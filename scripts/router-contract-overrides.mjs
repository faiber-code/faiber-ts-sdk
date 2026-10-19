/** Source-reviewed mounted router aliases; semantic acceptance remains separate. */
export const routerContracts = {};
for (const service of ["asset", "idp", "modules", "payment"]) {
  const original = service === "asset" || service === "modules" ? "/" : "/health";
  const aliases = service === "payment" ? ["/", "/health", "/up"] : service === "idp" ? ["/health"] : ["/", "/health"];
  for (const path of aliases) {
    const name = path === original ? "RouterStatusRouteGet" : path === "/" ? "RouterRootStatusGet" : path === "/up" ? "RouterUpGet" : "RouterHealthGet";
    routerContracts[`${service}:GET ${path}`] = {
      methodName: name[0].toLowerCase() + name.slice(1), typeBase: name,
      response: 'import("@faiber/sdk-core").ServiceHealthResponse',
      auth: "no handler permission check; deployment gateway policy is separate",
      purpose: "Read process health and the reported service version. Does not verify database, broker or downstream readiness."
    };
  }
  routerContracts[`${service}:GET /api/openapi.json`] = {
    response: 'import("@faiber/sdk-core").ServiceOpenApiDocument',
    auth: "no handler permission check; deployment gateway policy is separate",
    purpose: "Read the raw generated OpenAPI document. Annotations may omit mounted routes; this document is not an endpoint-completeness guarantee."
  };
}
routerContracts["idp:POST /api/v1/auth/secure/generate/one-time/{user_id}"] = {
  pathTypes: {user_id:"string"},
  response:'import("./contracts.types.js").OneTimeTokenResponse',
  auth:"server-only Host-header allowlist in the resolved Rust SDK; this guard does not authenticate a service credential",
  purpose:"Issue a single-use login token for the user UUID in the URL. Missing users return 401; the existing internal-service middleware checks Host only. Deployment network and gateway restrictions require separate verification."
};

for (const method of ["GET", "OPTIONS"]) routerContracts[`idp:${method} /api/v1/auth/validate`] = {
  response: method === "OPTIONS" ? "void" : 'import("./types.js").ValidateSessionResponse',
  auth:"forward-auth policy for the original method/URI/service, or CORS preflight; invalid credentials fail closed",
  purpose:"Validate a forwarded request. Success has status/message and principal headers, not a data.user_id body; HTML failures may redirect to login. The outer CORS layer answers OPTIONS with an empty response; it is not proof of an authenticated session."
};
const oidc = (method,path,response,purpose,auth) => {
  routerContracts[`idp:${method} ${path}`] = {response,purpose,auth};
};
oidc("GET","/.well-known/openid-configuration",'import("./contracts.types.js").OidcDiscoveryDocument',"Read raw OIDC issuer metadata and supported grants, scopes, claims and PKCE methods.","public discovery handler; deployment gateway policy is separate");
oidc("GET","/oauth2/jwks",'import("./contracts.types.js").OidcJwks',"Read public RSA signing keys as a raw JWKS document; key configuration errors propagate.","public signing-key handler; contains no private key material");
for (const method of ["GET","POST"]) {
  oidc(method,"/oauth2/userinfo",'import("./contracts.types.js").OidcUserInfo',"Read the token subject and only claims allowed by its scopes. No API envelope; nullable identity values remain nullable.","valid Bearer access token; missing/invalid tokens or users return 401");
  oidc(method,"/oauth2/logout","void","End the current session and propagate back-channel logout; returns 204 even when no current session is found.","current Bearer token or secure browser cookie when present");
}
oidc("POST","/oauth2/introspect",'import("./contracts.types.js").OidcIntrospection',"Inspect an access or refresh token as a raw active/inactive union using form-encoded client credentials or HTTP Basic authentication.","valid active OAuth client and its configured authentication method");

routerContracts["idp:POST /api/v1/auth/secure/exchange/one-time"]={
  response:'import("./types.js").AuthTokensResponse',
  auth:"server-only Host-header allowlist in the resolved Rust SDK; this guard does not authenticate a service credential",
  purpose:"Consume a single-use token and issue access/refresh tokens for its active matching session. Reuse returns 400; invalid session ownership returns 401. Caller-identity protection requires an independently verified boundary."
};
