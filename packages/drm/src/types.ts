export * from "./wire.types.js";
export type { DrmPage as DrmMediaPageGeneric } from "./wire.types.js";
export type DrmMediaPage = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmMediaRecord>;
