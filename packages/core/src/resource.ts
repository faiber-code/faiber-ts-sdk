import type { AxiosResponse } from "axios";
import type { InferaClient } from "./client.js";
import type { Identifier, JsonObject, PageQuery, QueryParams, RequestOptions } from "./types.js";

export class RestResource<T extends object = JsonObject, Create = Partial<T>, Update = Partial<T>> {
  constructor(readonly client: InferaClient, readonly path: string) {}
  list(params?: PageQuery, options?: RequestOptions): Promise<AxiosResponse<unknown>> { return this.client.get(this.path, params, options); }
  show(id: Identifier, params?: QueryParams, options?: RequestOptions): Promise<AxiosResponse<T>> { return this.client.get<T>(`${this.path}/${encodeURIComponent(id)}`, params, options); }
  create(data: Create, options?: RequestOptions<Create>): Promise<AxiosResponse<T, Create>> { return this.client.post<T, Create>(this.path, data, options); }
  update(id: Identifier, data: Update, options?: RequestOptions<Update>): Promise<AxiosResponse<T, Update>> { return this.client.patch<T, Update>(`${this.path}/${encodeURIComponent(id)}`, data, options); }
  replace(id: Identifier, data: Update, options?: RequestOptions<Update>): Promise<AxiosResponse<T, Update>> { return this.client.put<T, Update>(`${this.path}/${encodeURIComponent(id)}`, data, options); }
  delete(id: Identifier, options?: RequestOptions): Promise<AxiosResponse<unknown>> { return this.client.delete(`${this.path}/${encodeURIComponent(id)}`, options); }
}

export abstract class ServiceApi {
  constructor(readonly client: InferaClient) {}
  get axios() { return this.client.axios; }
  request<T = unknown, D = unknown>(config: import("axios").AxiosRequestConfig<D>) { return this.client.request<T, D>(config); }
}
