import type { ApiEnvelope, JsonObject, OperationResponse, QueryParams, } from "@faiber/sdk-core";
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
/** An identity provider account linked to the authenticated IDP user. */
export interface LinkedIdentity extends JsonObject {
    /** Provider key, for example `faiber`, `google`, or `github`. */
    provider: string;
    /** Stable subject identifier issued by the linked provider. */
    provider_id: string;
    /** Timestamp at which the identity was linked. */
    linked_at: string;
}
/** Linked identities owned by the authenticated IDP user. */
export interface LinkedIdentityListData extends JsonObject {
    identities: LinkedIdentity[];
}
/** Query for the linked main-Faiber account's metered daily costs. */
export interface LinkedFaiberBillingQuery extends QueryParams {
    /** Optional sandbox project whose effective pricing should be projected. */
    project?: string;
    page?: number;
    page_size?: number;
    from?: string;
    to?: string;
    tz_offset_minutes?: number;
}
/** Main-Faiber wallet resolved by the sandbox IDP from the signed-in local profile. */
export interface LinkedFaiberWallet extends JsonObject {
    profile_id: string;
    balance: string | number;
    currency: string;
}
export interface LinkedFaiberDailyCost extends JsonObject {
    date: string;
    resourceCost: string | number;
    llmCost: string | number;
    totalCost: string | number;
    transactionCount: number;
    currency: string;
}
export interface LinkedFaiberDailyCostsPage extends JsonObject {
    items: LinkedFaiberDailyCost[];
    total: number;
    page: number;
    pageSize: number;
}
/** Billing projection for the main Faiber account linked to the current sandbox user. */
export interface LinkedFaiberBilling extends JsonObject {
    provider_id: string;
    wallet: LinkedFaiberWallet;
    daily_costs: LinkedFaiberDailyCostsPage;
    project_pricing?: LinkedFaiberProjectPricing | null;
}
/** Effective pricing for a project billed to the linked main-Faiber account. */
export interface LinkedFaiberProjectPricing extends JsonObject {
    project: string;
    currency: string;
    fixed_monthly_price?: string | number | null;
    hourly_price: string | number;
    daily_estimate: string | number;
    monthly_estimate: string | number;
}
export interface LinkedFaiberBillingResponse extends ApiEnvelope<LinkedFaiberBilling> {
}
export interface LinkedFaiberTopUpInput extends JsonObject {
    amount: string | number;
    currency?: string | null;
}
export interface LinkedFaiberTopUp extends JsonObject {
    purchase_id: string;
    payment_url: string;
}
export interface LinkedFaiberTopUpResponse extends ApiEnvelope<LinkedFaiberTopUp> {
}
export interface SessionClient extends JsonObject {
    id: string;
    name: string;
}
export interface Session extends JsonObject {
    id: string;
    client: SessionClient;
    browser: string;
    operating_system: string;
    device_id?: string | null;
    user_agent?: string | null;
    ip_address?: string | null;
    ip_address_v6?: string | null;
    created_at: string;
    last_accessed?: string | null;
    is_current: boolean;
}
export interface SessionListResponse extends ApiEnvelope<Session[]> {
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
export interface LinkedIdentityListResponse extends ApiEnvelope<LinkedIdentityListData> {
}
export interface LogoutUserResponse extends OperationResponse {
}
