import type { ApiEnvelope, JsonObject, OperationResponse, } from "@faiber/sdk-core";
export interface User extends JsonObject {
    id: string;
    phone?: string | null;
    email?: string | null;
    national_code?: string | null;
    status: number;
    active_sessions: number;
    roles: Role[];
}
export interface Role extends JsonObject {
    id: string;
    name: string;
    title?: string;
    permissions?: Permission[];
}
export interface Permission extends JsonObject {
    id: string;
    name: string;
    title?: string;
    description?: string | null;
}
export interface OAuthProvider extends JsonObject {
    name: string;
    enabled: boolean;
    authorization_url?: string;
}
export interface LoginInput {
    grant_type: string;
    username: string;
    password: string;
    client_id: string;
    client_secret: string;
    device_id?: string;
}
export interface WebLoginInput extends LoginInput {
}
export interface AccountLoginInput {
    account: string;
    device_id?: string;
}
export interface OtpLoginInput {
    grant_type: string;
    username: string;
    otp_code: string;
    client_id: string;
    client_secret: string;
    device_id?: string;
}
export interface RegisterUserInput extends JsonObject {
    phone?: string;
    email?: string;
    national_code?: string;
    role?: string;
    roles?: string[];
}
export interface CreateUserInput extends JsonObject {
    phone?: string;
    email?: string;
    national_code?: string;
    password?: string;
    roles: string[];
}
export interface UpdateUserInput {
    phone?: string | null;
    email?: string | null;
    national_code?: string | null;
}
export interface ChangePasswordInput {
    password?: string;
}
export interface ChangeRolesInput {
    roles: string[];
}
export interface SetUserStatusInput {
    enabled: boolean;
}
export interface CreateRoleInput { name: string; permissions?: string[]; }
export interface UpdateRoleInput {
    permissions: string[];
}
export interface AuthTokens extends Record<string, string | number> {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
}
export interface AuthTokensResponse extends ApiEnvelope<AuthTokens> {
}
export interface ValidateSessionData {
    user_id: string;
}
export interface ValidateSessionResponse extends ApiEnvelope<ValidateSessionData> {
}
export interface UserData extends JsonObject { user: User; }
export interface UserResponse extends ApiEnvelope<UserData> {
}
export interface UserListData extends JsonObject { users: User[]; total: number; page: number; per_page: number; }
export interface UserListResponse extends ApiEnvelope<UserListData> {
}
export interface UserSelf extends JsonObject { id: string; phone?: string | null; email?: string | null; national_code?: string | null; status: number; roles: Role[]; permissions: Permission[]; }
export interface UserSelfResponse extends ApiEnvelope<UserSelf> {
}
export interface RoleData extends JsonObject { role: Role; }
export interface RoleResponse extends ApiEnvelope<RoleData> {
}
export interface RoleListData extends JsonObject { roles: Role[]; }
export interface RoleListResponse extends ApiEnvelope<RoleListData> {
}
export interface PermissionListData extends JsonObject { permissions: Permission[]; services: string[]; }
export interface PermissionResponse extends ApiEnvelope<Permission> {
}
export interface PermissionListResponse extends ApiEnvelope<PermissionListData> {
}
export interface OAuthProviderListResponse extends ApiEnvelope<OAuthProvider[]> {
}
export interface LogoutUserResponse extends OperationResponse {
}
