import { SERVICE_NAMES, type ServiceDomains, type ServiceName } from "./types.js";
export type EnvLike = Record<string, string | undefined>;
export function domainsFromEnv(env: EnvLike, prefix = "INFERA_"): ServiceDomains { const out: ServiceDomains = {}; for (const service of SERVICE_NAMES) { const value = env[`${prefix}${service.toUpperCase()}_URL`]?.trim(); if (value) out[service] = value; } return out; }
export function domainFor(domains: ServiceDomains, service: ServiceName, fallback?: string): string { const value = domains[service] ?? fallback; if (!value) throw new Error(`No domain configured for Infera service '${service}'`); return value.replace(/\/+$/, ""); }
