import axios, { AxiosError, AxiosHeaders, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type RawAxiosHeaders } from "axios";
import { bearerAuthorization } from "./auth.js";
import { domainFor } from "./env.js";
import type { FaiberSdkConfig, JsonObject, QueryParams, RequestOptions, ServiceName, TokenSet } from "./types.js";
const RETRY = "__faiberAuthRetry" as const;
export class FaiberClient {
    readonly axios: AxiosInstance;
    private readonly refreshAxios: AxiosInstance;
    private refreshPromise: Promise<TokenSet | null> | null = null;
    constructor(readonly service: ServiceName, readonly config: FaiberSdkConfig) {
        const serviceOptions = config.serviceOptions?.[service];
        const defaults = { allowAbsoluteUrls: false, ...config.axios, ...serviceOptions?.axios, baseURL: domainFor(config.domains, service, config.defaultDomain), headers: { ...config.axios?.headers, ...serviceOptions?.axios?.headers, ...serviceOptions?.headers } };
        this.axios = config.createAxios?.(defaults, service) ?? axios.create(defaults);
        this.refreshAxios = axios.create(defaults);
        this.axios.interceptors.request.use(async (request) => {
            const tokens = await config.tokenProvider?.getTokens() ?? null;
            const authorization = config.getAuthorization ? await config.getAuthorization({ service, request, tokens }) : bearerAuthorization(tokens);
            if (authorization && !request.headers.has("Authorization"))
                request.headers.set("Authorization", authorization);
            return request;
        });
        if (config.refreshAuth)
            this.axios.interceptors.response.use(undefined, async (error: AxiosError) => {
                const request = error.config as (AxiosRequestConfig & {
                    [RETRY]?: boolean;
                }) | undefined;
                const shouldRefresh = config.shouldRefreshAuth?.(error) ?? error.response?.status === 401;
                if (!request || request[RETRY] || !shouldRefresh)
                    throw error;
                request[RETRY] = true;
                try {
                    const storedTokens = await config.tokenProvider?.getTokens() ?? null;
                    const currentAuthorization = config.getAuthorization ? await config.getAuthorization({ service, request, tokens: storedTokens }) : bearerAuthorization(storedTokens);
                    const failedHeaders = AxiosHeaders.from(request.headers as RawAxiosHeaders);
                    if (currentAuthorization && failedHeaders.get("Authorization") !== currentAuthorization) {
                        failedHeaders.delete("Authorization");
                        request.headers = failedHeaders;
                        return this.axios.request(request);
                    }
                    this.refreshPromise ??= Promise.resolve(config.refreshAuth!({ service, client: this.refreshAxios, tokens: storedTokens })).finally(() => { this.refreshPromise = null; });
                    const tokens = await this.refreshPromise;
                    await config.tokenProvider?.setTokens(tokens);
                    if (!tokens)
                        throw error;
                    const headers = AxiosHeaders.from(request.headers as RawAxiosHeaders);
                    headers.delete("Authorization");
                    request.headers = headers;
                    return this.axios.request(request);
                }
                catch (refreshError) {
                    await config.tokenProvider?.setTokens(null);
                    await config.onAuthFailure?.(refreshError);
                    throw refreshError;
                }
            });
    }
    request<T = unknown, D = unknown>(config: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> { return this.axios.request<T, AxiosResponse<T, D>, D>(config); }
    get<T = unknown>(url: string, params?: QueryParams, options?: RequestOptions): Promise<AxiosResponse<T>> { return this.request<T>({ ...options, method: "GET", url, params }); }
    delete<T = unknown>(url: string, options?: RequestOptions): Promise<AxiosResponse<T>> { return this.request<T>({ ...options, method: "DELETE", url }); }
    post<T = unknown, D = JsonObject>(url: string, data?: D, options?: RequestOptions<D>): Promise<AxiosResponse<T, D>> { return this.request<T, D>({ ...options, method: "POST", url, ...(data === undefined ? {} : { data }) }); }
    put<T = unknown, D = JsonObject>(url: string, data?: D, options?: RequestOptions<D>): Promise<AxiosResponse<T, D>> { return this.request<T, D>({ ...options, method: "PUT", url, ...(data === undefined ? {} : { data }) }); }
    patch<T = unknown, D = JsonObject>(url: string, data?: D, options?: RequestOptions<D>): Promise<AxiosResponse<T, D>> { return this.request<T, D>({ ...options, method: "PATCH", url, ...(data === undefined ? {} : { data }) }); }
}
