import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { FaiberClient } from "./client.js";
import type { ApiEnvelope, DeleteResponse, Identifier, JsonObject, PageQuery, QueryParams, RequestOptions, ResourceListResponse, ResourceResponse, } from "./types.js";
export class RestResource<Entity extends object = JsonObject, CreateInput = Partial<Entity>, UpdateInput = Partial<Entity>, ListResponse = ResourceListResponse<Entity>, ShowResponse = ResourceResponse<Entity>> {
    constructor(readonly client: FaiberClient, readonly path: string) { }
    list(params?: PageQuery, options?: RequestOptions): Promise<AxiosResponse<ListResponse>> {
        return this.client.get<ListResponse>(this.path, params, options);
    }
    show(id: Identifier, params?: QueryParams, options?: RequestOptions): Promise<AxiosResponse<ShowResponse>> {
        return this.client.get<ShowResponse>(`${this.path}/${encodeURIComponent(id)}`, params, options);
    }
    create(data: CreateInput, options?: RequestOptions<CreateInput>): Promise<AxiosResponse<ApiEnvelope<Entity>, CreateInput>> {
        return this.client.post<ApiEnvelope<Entity>, CreateInput>(this.path, data, options);
    }
    update(id: Identifier, data: UpdateInput, options?: RequestOptions<UpdateInput>): Promise<AxiosResponse<ApiEnvelope<Entity>, UpdateInput>> {
        return this.client.patch<ApiEnvelope<Entity>, UpdateInput>(`${this.path}/${encodeURIComponent(id)}`, data, options);
    }
    replace(id: Identifier, data: UpdateInput, options?: RequestOptions<UpdateInput>): Promise<AxiosResponse<ApiEnvelope<Entity>, UpdateInput>> {
        return this.client.put<ApiEnvelope<Entity>, UpdateInput>(`${this.path}/${encodeURIComponent(id)}`, data, options);
    }
    delete(id: Identifier, options?: RequestOptions): Promise<AxiosResponse<DeleteResponse>> {
        return this.client.delete<DeleteResponse>(`${this.path}/${encodeURIComponent(id)}`, options);
    }
}
export abstract class ServiceApi {
    constructor(readonly client: FaiberClient) { }
    get axios() {
        return this.client.axios;
    }
    request<TResponse = unknown, TData = unknown>(config: AxiosRequestConfig<TData>): Promise<AxiosResponse<TResponse, TData>> {
        return this.client.request<TResponse, TData>(config);
    }
}
