// Exact native serde flatten/output semantics at LMS470949b; runtime gates remain separate.
export const lmsBrandingContracts={
 'lms:GET /api/v1/config/branding':{methodName:'brandingShowGet',typeBase:'BrandingShowGet',response:'import("@faiber/sdk-core").ApiEnvelope<import("./branding.types.js").LmsBranding>',auth:'lms:config:read'},
 'lms:PUT /api/v1/config/branding':{methodName:'brandingUpdatePut',typeBase:'BrandingUpdatePut',input:'import("./branding.types.js").LmsBrandingInput',response:'import("@faiber/sdk-core").ApiEnvelope<import("./branding.types.js").LmsBranding>',auth:'lms:config:update'},
 'lms:GET /api/v1/public/branding':{methodName:'brandingPublicShowGet',typeBase:'BrandingPublicShowGet',response:'import("@faiber/sdk-core").ApiEnvelope<import("./branding.types.js").LmsPublicBranding>',auth:'public runtime branding/discovery; no actor or administration permission'},
};
