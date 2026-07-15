import { ServiceApi, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
export class VersionApi extends ServiceApi {
    services(options?: RequestOptions) { return this.client.get<T.ServicesResponse>("/api/v1/services", undefined, options); }
    service(slug: string, options?: RequestOptions) { return this.client.get<T.ServiceResponse>(`/api/v1/services/${encodeURIComponent(slug)}`, undefined, options); }
    allVersions(slug: string, options?: RequestOptions) { return this.client.get<T.ServiceVersionsResponse>(`/api/v1/services/${encodeURIComponent(slug)}/all`, undefined, options); }
    version(id: string, options?: RequestOptions) { return this.client.get<T.VersionResponse>(`/api/v1/versions/${encodeURIComponent(id)}`, undefined, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
