/** Flattened native Session branding wire fields. */
export interface SessionBrandText { title: string | null }
export interface SessionBranding {
  title: string | null;
  localizations: Record<string, SessionBrandText>;
  icon_asset_key: string | null;
  icon_url: string | null;
}
export interface SessionBrandingInput {
  title?: string | null;
  localizations?: Record<string, {title?: string | null}>;
  icon_asset_key?: string | null;
  icon_url?: string | null;
}
/** Public runtime discovery. The task origin is configuration-derived and cannot be saved as branding. */
export interface SessionPublicBranding extends SessionBranding {
  feedback_task_origin: string | null;
}
