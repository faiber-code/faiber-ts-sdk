import { RestResource, ServiceApi, urlEncoded, type Identifier, type OperationResponse, type RequestOptions, } from "@faiber/sdk-core";
import type { AccountLoginInput, AuthTokensResponse, ChangePasswordInput, ChangeRolesInput, CreateRoleInput, CreateUserInput, LoginInput, LogoutUserResponse, OAuthProviderListResponse, OtpLoginInput, Permission, PermissionListResponse, PermissionResponse, RegisterUserInput, Role, RoleListResponse, RoleResponse, SetUserStatusInput, UpdateRoleInput, UpdateUserInput, User, UserListResponse, UserResponse, UserSelfResponse, ValidateSessionResponse, WebLoginInput, } from "./types.js";
import { IdpOperations } from "./operations.js";
export class IdpApi extends ServiceApi {
    readonly operations = new IdpOperations(this.client);
    readonly users = new RestResource<User, CreateUserInput, UpdateUserInput, UserListResponse, UserResponse>(this.client, "/api/v1/users", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly roles = new RestResource<Role, CreateRoleInput, UpdateRoleInput, RoleListResponse, RoleResponse>(this.client, "/api/v1/acl/roles", { supported: ["list", "show", "create", "update", "replace", "delete"] });
    readonly permissions = new RestResource<Permission, never, never, PermissionListResponse, PermissionResponse>(this.client, "/api/v1/acl/permissions", { supported: ["list"] });
    login(data: LoginInput, options?: RequestOptions<LoginInput>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    webLogin(data: WebLoginInput, options?: RequestOptions<WebLoginInput>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/web-login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    accountLogin(data: AccountLoginInput, options?: RequestOptions<AccountLoginInput>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/account-login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    otpLogin(data: OtpLoginInput, options?: RequestOptions<OtpLoginInput>) {
        return this.client.post<AuthTokensResponse, URLSearchParams>("/api/v1/auth/otp-login", urlEncoded(data), { ...options, headers: { ...options?.headers, "Content-Type": "application/x-www-form-urlencoded" } });
    }
    validate(options?: RequestOptions) {
        return this.client.get<ValidateSessionResponse>("/api/v1/auth/validate", undefined, options);
    }
    refresh(options?: RequestOptions) {
        return this.client.get<AuthTokensResponse>("/api/v1/auth/refresh", undefined, options);
    }
    self(options?: RequestOptions) {
        return this.client.get<UserSelfResponse>("/api/v1/users/self", undefined, options);
    }
    providers(options?: RequestOptions) {
        return this.client.get<OAuthProviderListResponse>("/api/v1/auth/oauth/providers", undefined, options);
    }
    linkedIdentities(options?: RequestOptions) {
        return this.client.get<OAuthProviderListResponse>("/api/v1/auth/identities", undefined, options);
    }
    register(data: RegisterUserInput, options?: RequestOptions<RegisterUserInput>) {
        return this.client.post<UserResponse, RegisterUserInput>("/api/v1/users/register", data, options);
    }
    changePassword(userId: Identifier, data: ChangePasswordInput, options?: RequestOptions<ChangePasswordInput>) {
        return this.client.patch<OperationResponse, ChangePasswordInput>(`/api/v1/users/${encodeURIComponent(userId)}/change-password`, data, options);
    }
    changeRoles(userId: Identifier, data: ChangeRolesInput, options?: RequestOptions<ChangeRolesInput>) {
        return this.client.patch<UserResponse, ChangeRolesInput>(`/api/v1/users/${encodeURIComponent(userId)}/change-roles`, data, options);
    }
    setStatus(userId: Identifier, data: SetUserStatusInput, options?: RequestOptions<SetUserStatusInput>) {
        return this.client.patch<UserResponse, SetUserStatusInput>(`/api/v1/users/${encodeURIComponent(userId)}/status`, data, options);
    }
    logoutUser(userId: Identifier, options?: RequestOptions) {
        return this.client.get<LogoutUserResponse>(`/api/v1/users/${encodeURIComponent(userId)}/logout`, undefined, options);
    }
}
export * from "@faiber/sdk-core";
export * from "./types.js";
export * from "./operations.js";
export * from "./operations.types.js";
