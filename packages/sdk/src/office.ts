import { type FaiberClient, type RequestOptions } from "@faiber/sdk-core";
import { OFFICE_OPERATIONS } from "./office-contract.js";
export { OFFICE_OPERATIONS } from "./office-contract.js";
export type OfficeOperationKey = typeof OFFICE_OPERATIONS[number]["key"];
export type OfficeValue = string | number | boolean | null | OfficeRecord | OfficeValue[];
export interface OfficeRecord { [key: string]: OfficeValue }
export interface OfficePageMeta { current_page?: number; per_page?: number; last_page?: number; total_items?: number; total?: number }
export interface OfficeEnvelope {
  success?: boolean; message?: string; data?: OfficeValue;
  meta?: { page?: OfficePageMeta; pagination?: OfficePageMeta } & OfficePageMeta;
  pagination?: { page?: OfficePageMeta } & OfficePageMeta;
  errors?: Record<string, string[]>;
}
export interface OfficeRequestInput {
  params?: Record<string, string | number>;
  query?: URLSearchParams | Record<string, string>;
  body?: OfficeRecord | FormData;
  signal?: AbortSignal;
  download?: boolean;
}
export interface OfficeEducationStatus { id?: string | number; key?: string; value?: string | number; label?: string; name?: string; title?: string }
export type OfficeEducationStatusesResponse = OfficeEducationStatus[] | { data: OfficeEducationStatus[] };

/** Project Office operations use the configured Office domain and shared IDP authentication. */
export class OfficeApi {
  constructor(private readonly client: FaiberClient) {}
  /** Execute a registered Office operation. Preserves Axios errors/status, pagination, cancellation and multipart method overrides. Permissions are listed in OFFICE_OPERATIONS and enforced by Office. */
  request(key: OfficeOperationKey, input: OfficeRequestInput = {}, options?: RequestOptions<OfficeRecord | FormData>) {
    const operation = OFFICE_OPERATIONS.find((entry) => entry.key === key);
    if (!operation) throw new Error("Unknown Office operation");
    const path = operation.path.replace(/\{(\w+)\}/g, (_, name: string) => {
      const value = input.params?.[name];
      if (value === undefined || value === "") throw new Error(`Missing ${name}`);
      return encodeURIComponent(String(value));
    });
    const query = new URLSearchParams(input.query);
    const data = input.body;
    let method: string = operation.method;
    if (data instanceof FormData && ["PATCH", "PUT"].includes(method)) { data.set("_method", method); method = "POST"; }
    return this.client.request<OfficeEnvelope | Blob, OfficeRecord | FormData>({
      timeout: 30_000, ...options, url: `${path}${query.size ? `?${query}` : ""}`, method,
      ...(data !== undefined ? { data } : {}), ...(input.signal ? { signal: input.signal } : {}), responseType: input.download ? "blob" : "json",
      headers: { Accept: input.download ? "*/*" : "application/json", ...options?.headers },
    });
  }
  /** List education statuses for enrollment filters. Requires the signed-in Office session; supports cancellation. */
  educationStatuses(options?: RequestOptions) {
    return this.client.get<OfficeEducationStatusesResponse>("/api/v1/education/enums/student-education-status", undefined, options);
  }
}
