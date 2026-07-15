import type { AxiosInstance, AxiosRequestConfig, CreateAxiosDefaults } from "axios";
export const SERVICE_NAMES = ["idp", "profile", "modules", "asset", "payment", "messenger", "crm", "lms", "reservation", "session", "version", "flow"] as const;
export type ServiceName = (typeof SERVICE_NAMES)[number];
export type ServiceDomains = Partial<Record<ServiceName, string>>;
export type MaybePromise<T> = T | Promise<T>; export type Identifier = string | number;
export type JsonPrimitive = string | number | boolean | null; export type JsonValue = JsonPrimitive | JsonValue[] | { [key: string]: JsonValue };
export type JsonObject = { [key: string]: JsonValue | undefined };
export type QueryParams = Record<string, string | number | boolean | null | undefined | readonly (string | number | boolean)[]>;
export interface ApiEnvelope<T> { data: T; message?: string; status?: string | number; [key: string]: unknown }
export interface PageQuery extends QueryParams { page_number?: number; page_size?: number; search?: string }
export interface TokenSet { accessToken?: string; refreshToken?: string; expiresAt?: number; tokenType?: string }
export interface TokenProvider { getTokens(): MaybePromise<TokenSet | null>; setTokens(tokens: TokenSet | null): MaybePromise<void> }
export interface AuthContext { service: ServiceName; request: AxiosRequestConfig; tokens: TokenSet | null }
export interface ServiceClientOptions { axios?: CreateAxiosDefaults; headers?: AxiosRequestConfig["headers"] }
export interface FaiberSdkConfig {
  domains: ServiceDomains; defaultDomain?: string; axios?: CreateAxiosDefaults;
  serviceOptions?: Partial<Record<ServiceName, ServiceClientOptions>>; tokenProvider?: TokenProvider;
  getAuthorization?: (context: AuthContext) => MaybePromise<string | null | undefined>;
  refreshAuth?: (context: { service: ServiceName; client: AxiosInstance; tokens: TokenSet | null }) => MaybePromise<TokenSet | null>;
  shouldRefreshAuth?: (error: unknown) => boolean; onAuthFailure?: (error: unknown) => MaybePromise<void>;
  createAxios?: (config: CreateAxiosDefaults, service: ServiceName) => AxiosInstance;
}
export type RequestOptions<D = unknown> = Omit<AxiosRequestConfig<D>, "url" | "method" | "data" | "params">;
export interface User { id?: string; uuid?: string; phone?: string | null; email?: string | null; status?: string | number | boolean; [key: string]: unknown }
export interface Product { id: string; name: string; description?: string | null; sku?: JsonValue; status?: number; sort_order?: number; [key: string]: unknown }
export interface BlogPost { id: string; title: string; description?: string | null; status?: number; [key: string]: unknown }
export interface AuthTokensResponse { access_token?: string; refresh_token?: string; token?: string; expires_in?: number; [key: string]: unknown }
