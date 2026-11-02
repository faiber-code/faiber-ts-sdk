export * from "./wire.types.js";
export type { DrmPage as DrmMediaPageGeneric } from "./wire.types.js";
export type DrmMediaPage = import("./wire.types.js").DrmPage<import("./wire.types.js").DrmMediaRecord>;

/** Structural LMS session reference; a linked composition is independent of room type/schedule. */
export interface ClassroomSessionCompositionReference {
    media?: { drm_mixed_media_id: string | null };
    course_session?: { drm_mixed_media_id: string | null } | null;
}
/** Latest published composition manifest, including its versioned document. */
export type CompositionPreviewResponse = import("./wire.types.js").DrmMixedMediaManifest;
