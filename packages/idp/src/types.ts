import type { ApiEnvelope, Identifier, OperationResponse, ResourceListResponse, ResourceResponse, } from "@faiber/sdk-core";
export interface User {
    id?: string;
    uuid?: string;
    phone?: string | null;
    email?: string | null;
    national_code?: string | null;
    status?: string | number | boolean;
    roles?: Role[];
    created_at?: string;
    updated_at?: string;
}
export interface Role {
    id: string;
    name: string;
    title?: string;
    permissions?: Permission[];
}
export interface Permission {
    id: string;
    name: string;
    title?: string;
    description?: string | null;
}
export interface OAuthProvider {
    name: string;
    enabled: boolean;
    authorization_url?: string;
}
export interface LoginInput {
    phone?: string;
    email?: string;
    username?: string;
    password: string;
}
export interface WebLoginInput extends LoginInput {
    redirect_uri?: string;
    remember?: boolean;
}
export interface AccountLoginInput {
    account: string;
    password: string;
}
export interface OtpLoginInput {
    phone?: string;
    email?: string;
    code: string;
}
export interface RegisterUserInput {
    phone?: string;
    email?: string;
    national_code?: string;
    password?: string;
    role?: string;
}
export interface UpdateUserInput {
    phone?: string | null;
    email?: string | null;
    national_code?: string | null;
}
export interface ChangePasswordInput {
    password: string;
    password_confirmation?: string;
    current_password?: string;
}
export interface ChangeRolesInput {
    role_ids?: Identifier[];
    roles?: string[];
}
export interface SetUserStatusInput {
    status: string | number | boolean;
}
export interface UpdateRoleInput {
    permissions: Identifier[];
}
export interface AuthTokensResponse {
    access_token?: string;
    refresh_token?: string;
    token?: string;
    token_type?: string;
    expires_in?: number;
    user?: User;
}
export interface ValidateSessionData {
    valid: boolean;
    user?: User;
}
export interface ValidateSessionResponse extends ApiEnvelope<ValidateSessionData> {
}
export interface UserResponse extends ResourceResponse<User> {
}
export interface UserListResponse extends ResourceListResponse<User> {
}
export interface RoleResponse extends ResourceResponse<Role> {
}
export interface RoleListResponse extends ResourceListResponse<Role> {
}
export interface PermissionResponse extends ResourceResponse<Permission> {
}
export interface PermissionListResponse extends ResourceListResponse<Permission> {
}
export interface OAuthProviderListResponse extends ApiEnvelope<OAuthProvider[]> {
}
export interface LogoutUserResponse extends OperationResponse {
}
