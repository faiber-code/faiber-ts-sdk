import { RestResource, ServiceApi, type AuthTokensResponse, type Identifier, type JsonObject, type RequestOptions, type User } from "@faiber/sdk-core";
export class IdpApi extends ServiceApi {
  readonly users = new RestResource<User>(this.client, "/api/v1/users");
  readonly roles = new RestResource(this.client, "/api/v1/acl/roles");
  readonly permissions = new RestResource(this.client, "/api/v1/acl/permissions");
  login(data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post<AuthTokensResponse, JsonObject>("/api/v1/auth/login", data, options); }
  webLogin(data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post<AuthTokensResponse, JsonObject>("/api/v1/auth/web-login", data, options); }
  accountLogin(data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post<AuthTokensResponse, JsonObject>("/api/v1/auth/account-login", data, options); }
  otpLogin(data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post<AuthTokensResponse, JsonObject>("/api/v1/auth/otp-login", data, options); }
  validate(options?: RequestOptions) { return this.client.get("/api/v1/auth/validate", undefined, options); }
  refresh(options?: RequestOptions) { return this.client.get<AuthTokensResponse>("/api/v1/auth/refresh", undefined, options); }
  self(options?: RequestOptions) { return this.client.get<User>("/api/v1/users/self", undefined, options); }
  providers(options?: RequestOptions) { return this.client.get("/api/v1/auth/oauth/providers", undefined, options); }
  linkedIdentities(options?: RequestOptions) { return this.client.get("/api/v1/auth/identities", undefined, options); }
  register(data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.post<User, JsonObject>("/api/v1/users/register", data, options); }
  changePassword(userId: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.patch(`/api/v1/users/${encodeURIComponent(userId)}/change-password`, data, options); }
  changeRoles(userId: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.patch(`/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data, options); }
  setStatus(userId: Identifier, data: JsonObject, options?: RequestOptions<JsonObject>) { return this.client.patch(`/api/v1/users/${encodeURIComponent(userId)}/status`, data, options); }
  logoutUser(userId: Identifier, options?: RequestOptions) { return this.client.get(`/api/v1/users/${encodeURIComponent(userId)}/logout`, undefined, options); }
}
export * from "@faiber/sdk-core";
