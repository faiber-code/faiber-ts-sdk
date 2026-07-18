import type { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import type { FaiberClient } from "./client.js";
import type { QueryParams } from "./types.js";

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete" | "head" | "options";
export type OpenApiPaths = Record<string, Partial<Record<HttpMethod, unknown>>>;
type Operation<P extends OpenApiPaths, Path extends keyof P, M extends keyof P[Path]> = P[Path][M];
type ValueAt<T, K extends PropertyKey, F = never> = K extends keyof T ? T[K] : F;
type ParametersOf<O> = ValueAt<O, "parameters", Record<string, never>>;
type RequestBodyOf<O> = ValueAt<ValueAt<O, "requestBody", Record<string, never>>, "content", Record<string, never>> extends infer C
    ? C extends Record<string, unknown> ? C[keyof C] : never
    : never;
type SuccessResponse<O> = ValueAt<O, "responses", Record<string, never>> extends infer R
    ? R extends Record<string | number, unknown>
        ? ValueAt<R, 200 | 201 | 202 | 204 | "200" | "201" | "202" | "204" | "default", unknown>
        : unknown
    : unknown;
type ResponseBody<R> = ValueAt<R, "content", Record<string, unknown>> extends infer C
    ? C extends Record<string, unknown> ? C[keyof C] : unknown
    : R;

export type OperationArgs<O> = {
    path?: ValueAt<ParametersOf<O>, "path", Record<string, string | number | boolean>>;
    query?: ValueAt<ParametersOf<O>, "query", QueryParams>;
    headers?: ValueAt<ParametersOf<O>, "header", Record<string, string>>;
    body?: RequestBodyOf<O>;
    config?: Omit<AxiosRequestConfig, "url" | "method" | "params" | "data" | "headers">;
};
export type OpenApiOperationResponse<O> = ResponseBody<SuccessResponse<O>>;

function renderPath(path: string, params: Record<string, string | number | boolean> = {}): string {
    const used = new Set<string>();
    const rendered = path.replace(/\{([^}]+)\}/g, (_, key: string) => {
        if (!(key in params)) throw new Error(`Missing path parameter: ${key}`);
        used.add(key);
        return encodeURIComponent(String(params[key]));
    });
    const unknown = Object.keys(params).filter((key) => !used.has(key));
    if (unknown.length) throw new Error(`Unknown path parameter(s): ${unknown.join(", ")}`);
    return rendered;
}

/** Fully typed access to every operation in an openapi-typescript `paths` contract. */
export class OpenApiClient<P extends OpenApiPaths> {
    constructor(readonly client: FaiberClient) {}

    request<Path extends Extract<keyof P, string>, M extends Extract<keyof P[Path], HttpMethod>>(
        method: M,
        path: Path,
        args: OperationArgs<Operation<P, Path, M>> = {},
    ): Promise<AxiosResponse<OpenApiOperationResponse<Operation<P, Path, M>>>> {
        const { path: pathParams, query, headers, body, config } = args;
        const request = {
            ...config,
            method: method.toUpperCase() as Method,
            url: renderPath(path, pathParams as Record<string, string | number | boolean> | undefined),
            ...(query === undefined ? {} : { params: query }),
            ...(headers === undefined ? {} : { headers: headers as AxiosRequestConfig["headers"] }),
            ...(body === undefined ? {} : { data: body }),
        } as AxiosRequestConfig<unknown>;
        return this.client.request<OpenApiOperationResponse<Operation<P, Path, M>>, unknown>(request);
    }

    get<Path extends Extract<keyof P, string>>(path: Path, args?: OperationArgs<Operation<P, Path, Extract<"get", keyof P[Path]>>>): Promise<AxiosResponse<OpenApiOperationResponse<Operation<P, Path, Extract<"get", keyof P[Path]>>>>> {
        return (this.request as Function)("get", path, args);
    }
    post<Path extends Extract<keyof P, string>>(path: Path, args?: OperationArgs<Operation<P, Path, Extract<"post", keyof P[Path]>>>): Promise<AxiosResponse<OpenApiOperationResponse<Operation<P, Path, Extract<"post", keyof P[Path]>>>>> {
        return (this.request as Function)("post", path, args);
    }
    put<Path extends Extract<keyof P, string>>(path: Path, args?: OperationArgs<Operation<P, Path, Extract<"put", keyof P[Path]>>>): Promise<AxiosResponse<OpenApiOperationResponse<Operation<P, Path, Extract<"put", keyof P[Path]>>>>> {
        return (this.request as Function)("put", path, args);
    }
    patch<Path extends Extract<keyof P, string>>(path: Path, args?: OperationArgs<Operation<P, Path, Extract<"patch", keyof P[Path]>>>): Promise<AxiosResponse<OpenApiOperationResponse<Operation<P, Path, Extract<"patch", keyof P[Path]>>>>> {
        return (this.request as Function)("patch", path, args);
    }
    delete<Path extends Extract<keyof P, string>>(path: Path, args?: OperationArgs<Operation<P, Path, Extract<"delete", keyof P[Path]>>>): Promise<AxiosResponse<OpenApiOperationResponse<Operation<P, Path, Extract<"delete", keyof P[Path]>>>>> {
        return (this.request as Function)("delete", path, args);
    }
}

export function multipart(fields: Record<string, unknown>): FormData {
    const data = new FormData();
    for (const [key, value] of Object.entries(fields)) {
        if (value === undefined || value === null) continue;
        if (Array.isArray(value)) value.forEach((item) => data.append(key, toFormValue(item)));
        else data.append(key, toFormValue(value));
    }
    return data;
}

function toFormValue(value: unknown): string | Blob {
    if (value instanceof Blob) return value;
    if (typeof value === "string") return value;
    if (typeof value === "object") return JSON.stringify(value);
    return String(value);
}
