import { SERVICE_NAMES, type ServiceDomains, type ServiceName } from "./types.js";
export type EnvLike = Record<string, string | undefined>;
export function domainsFromEnv(env: EnvLike, prefix = "FAIBER_"): ServiceDomains {
    const out: ServiceDomains = {};
    for (const service of SERVICE_NAMES) {
        const value = env[`${prefix}${service.toUpperCase()}_URL`]?.trim();
        if (value)
            out[service] = value;
    }
    return out;
}

/** Convert Infera's runtime service map into SDK origins.
 * Runtime entries may include an `/api/v1` suffix for direct-fetch clients; SDK
 * resource paths already include that prefix, so it is removed here.
 */
export function domainsFromRuntime(services?: Record<string, string>): ServiceDomains {
    const out: ServiceDomains = {};
    if (!services) return out;
    for (const service of SERVICE_NAMES) {
        const value = services[service] ?? services[`infera-${service}`];
        if (value?.trim()) out[service] = value.trim().replace(/\/api\/v1\/?$/, "").replace(/\/+$/, "");
    }
    return out;
}
export function domainFor(domains: ServiceDomains, service: ServiceName, fallback?: string): string {
    const value = domains[service] ?? fallback;
    if (!value)
        throw new Error(`No domain configured for Faiber service '${service}'`);
    return value.replace(/\/+$/, "");
}
