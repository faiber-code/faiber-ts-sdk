/** Native Branding/PublicBranding wire contract, LMS 1a557957.
 * Runtime discovery is public output and is never persisted as administrator branding.
 */
export interface LmsBrandText {title:string|null}
export interface LmsBranding {title:string|null;localizations:Record<string,LmsBrandText>;icon_asset_key:string|null;icon_url:string|null}
export interface LmsBrandingInput {title?:string|null;localizations?:Record<string,{title?:string|null}>;icon_asset_key?:string|null;icon_url?:string|null}
export interface LmsPublicBranding extends LmsBranding {feedback_task_origin:string|null}
