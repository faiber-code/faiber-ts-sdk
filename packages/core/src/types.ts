import type { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults, } from "axios";
export const SERVICE_NAMES = [
    "idp",
    "profile",
    "modules",
    "asset",
    "payment",
    "messenger",
    "crm",
    "lms",
    "reservation",
    "session",
    "version",
    "flow",
    "social",
] as const;
export type ServiceName = (typeof SERVICE_NAMES)[number];
export type ServiceDomains = Partial<Record<ServiceName, string>>;
export type MaybePromise<T> = T | Promise<T>;
export type Identifier = string | number;
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonValue[] | JsonObject;
export interface JsonObject {
    [key: string]: JsonValue | undefined;
}
export type QueryValue = string | number | boolean | null | undefined | readonly (string | number | boolean)[];
export type QueryParams = Record<string, QueryValue>;
export interface ApiEnvelope<T> {
    data: T;
    message?: string;
    status?: string | number;
}
export interface PaginationMeta {
    page_number?: number;
    page_size?: number;
    total_items?: number;
    total_pages?: number;
}
export interface PaginatedResult<T> extends PaginationMeta {
    items: T[];
}
export interface ResourceListResponse<T> extends ApiEnvelope<PaginatedResult<T>> {
}
export interface ResourceResponse<T> extends ApiEnvelope<T> {
}
export interface DeleteResult {
    deleted: boolean;
    id?: Identifier;
}
export interface DeleteResponse extends ApiEnvelope<DeleteResult> {
}
export interface OperationResult {
    success: boolean;
    message?: string;
}
export interface OperationResponse extends ApiEnvelope<OperationResult> {
}
export interface PageQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    search?: string;
}
export interface CursorQuery extends QueryParams {
    cursor?: string;
    limit?: number;
    search?: string;
}
export interface SortQuery extends QueryParams {
    sort?: string;
    order?: "asc" | "desc";
}
export type ListQuery = PageQuery & SortQuery & {
    filter?: string;
    include?: string | readonly string[];
};
export interface CursorResult<T> {
    items: T[];
    next_cursor?: string | null;
    has_more?: boolean;
}
export interface ApiErrorBody extends JsonObject {
    code?: string;
    message: string;
    details?: JsonValue;
    request_id?: string;
    errors?: Record<string, string | string[]>;
}
export interface MediaReference extends JsonObject {
    id: Identifier;
    url: string;
    key?: string;
    role?: string;
    mime_type?: string;
    alt?: string;
    width?: number;
    height?: number;
    sort_order?: number;
}
export interface TokenSet {
    accessToken?: string;
    refreshToken?: string;
    expiresAt?: number;
    tokenType?: string;
}
export interface TokenProvider {
    getTokens(): MaybePromise<TokenSet | null>;
    setTokens(tokens: TokenSet | null): MaybePromise<void>;
}
export interface AuthContext {
    service: ServiceName;
    request: AxiosRequestConfig;
    tokens: TokenSet | null;
}
export interface ServiceClientOptions {
    axios?: CreateAxiosDefaults;
    headers?: AxiosRequestConfig["headers"];
}
export interface RefreshAuthContext {
    service: ServiceName;
    client: AxiosInstance;
    tokens: TokenSet | null;
}
export interface FaiberSdkConfig {
    domains: ServiceDomains;
    defaultDomain?: string;
    axios?: CreateAxiosDefaults;
    serviceOptions?: Partial<Record<ServiceName, ServiceClientOptions>>;
    tokenProvider?: TokenProvider;
    getAuthorization?: (context: AuthContext) => MaybePromise<string | null | undefined>;
    refreshAuth?: (context: RefreshAuthContext) => MaybePromise<TokenSet | null>;
    shouldRefreshAuth?: (error: unknown) => boolean;
    onAuthFailure?: (error: unknown) => MaybePromise<void>;
    createAxios?: (config: CreateAxiosDefaults, service: ServiceName) => AxiosInstance;
}
export type RequestOptions<D = unknown> = Omit<AxiosRequestConfig<D>, "url" | "method" | "data" | "params">;
