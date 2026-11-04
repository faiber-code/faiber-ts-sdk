/** Whitelisted monitor row. Contains counts, never student identities or room credentials. */
export interface LmsDisplaySession {
  id: string; title: string; classroom: string; teacher: string; support: string;
  students: number; starts_at: string; ends_at: string | null; mode: string; lifecycle: string;
}
/** Public connection settings; private subscriptions still require authorization. */
export interface LmsDisplaySocketConfig { ws_url: string; app_key: string; channel: string; event: string }
/** Server-configured current-day snapshot; no arbitrary date or classroom access. */
export interface LmsDisplaySnapshot {
  version: string; date: string; timezone: string; generated_at: string;
  sessions: LmsDisplaySession[]; socket: LmsDisplaySocketConfig;
}
/** Authorize only the private channel returned by the display snapshot. */
export interface LmsDisplayAuthorizeInput { socket_id: string; channel_name: string }
export interface LmsDisplayAuthorizeResponse { auth: string }
/** Collect every part before applying to base_version; recover gaps from a snapshot. */
export interface LmsDisplayPatch {
  version: string; base_version: string; date: string; timezone: string; generated_at: string;
  part: number; parts: number; upserts: LmsDisplaySession[]; removed: string[];
}
