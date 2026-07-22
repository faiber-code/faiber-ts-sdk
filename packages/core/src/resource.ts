import type { AxiosRequestConfig, AxiosResponse } from "axios";
import type { FaiberClient } from "./client.js";
import type { ApiEnvelope, DeleteResponse, Identifier, JsonObject, PageQuery, QueryParams, RequestOptions, ResourceListResponse, ResourceResponse, } from "./types.js";
export type RestOperation = "list" | "show" | "create" | "update" | "replace" | "delete";
export interface RestResourceOptions {
    supported?: readonly RestOperation[];
    updateMethod?: "PATCH" | "PUT";
}
export class UnsupportedOperationError extends Error {
    readonly code = "FAIBER_UNSUPPORTED_OPERATION";
    constructor(readonly operation: RestOperation, readonly path: string) {
        super(`${operation.toUpperCase()} is not registered for ${path}`);
        this.name = "UnsupportedOperationError";
    }
}
export class RestResource<Entity extends object = JsonObject, CreateInput = Partial<Entity>, UpdateInput = Partial<Entity>, ListResponse = ResourceListResponse<Entity>, ShowResponse = ResourceResponse<Entity>> {
    constructor(readonly client: FaiberClient, readonly path: string, readonly options: RestResourceOptions = {}) { }
    private assertSupported(operation: RestOperation): void {
        if (this.options.supported && !this.options.supported.includes(operation))
            throw new UnsupportedOperationError(operation, this.path);
    }
    list(params?: PageQuery, options?: RequestOptions): Promise<AxiosResponse<ListResponse>> {
        this.assertSupported("list");
        return this.client.get<ListResponse>(this.path, params, options);
    }
    show(id: Identifier, params?: QueryParams, options?: RequestOptions): Promise<AxiosResponse<ShowResponse>> {
        this.assertSupported("show");
        return this.client.get<ShowResponse>(`${this.path}/${encodeURIComponent(id)}`, params, options);
    }
    create(data: CreateInput, options?: RequestOptions<CreateInput>): Promise<AxiosResponse<ShowResponse, CreateInput>> {
        this.assertSupported("create");
        return this.client.post<ShowResponse, CreateInput>(this.path, data, options);
    }
    update(id: Identifier, data: UpdateInput, options?: RequestOptions<UpdateInput>): Promise<AxiosResponse<ShowResponse, UpdateInput>> {
        this.assertSupported("update");
        const path = `${this.path}/${encodeURIComponent(id)}`;
        return this.options.updateMethod === "PUT"
            ? this.client.put<ShowResponse, UpdateInput>(path, data, options)
            : this.client.patch<ShowResponse, UpdateInput>(path, data, options);
    }
    replace(id: Identifier, data: UpdateInput, options?: RequestOptions<UpdateInput>): Promise<AxiosResponse<ShowResponse, UpdateInput>> {
        this.assertSupported("replace");
        return this.client.put<ShowResponse, UpdateInput>(`${this.path}/${encodeURIComponent(id)}`, data, options);
    }
    delete(id: Identifier, options?: RequestOptions): Promise<AxiosResponse<DeleteResponse>> {
        this.assertSupported("delete");
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
