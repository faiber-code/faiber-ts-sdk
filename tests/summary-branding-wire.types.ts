import type {SummaryCapability,SummaryMetricResult} from '@faiber/faiber-profile';
import type {LmsPublicBranding,LmsBrandingInput,BrandingPublicShowGetResponseData} from '@faiber/faiber-lms';
declare const capabilities:SummaryCapability;
const optional:string[]|undefined=capabilities.optional_text_categories;
const scopes:('subject'|'assigned')[]|undefined=capabilities.category_scopes?.education_position;
declare const metric:SummaryMetricResult;
const currency:string|null|undefined=metric.resolved_unit?.currency;
declare const branding:LmsPublicBranding;
const origin:string|null=branding.feedback_task_origin;
const compatible:BrandingPublicShowGetResponseData=branding;
// @ts-expect-error runtime discovery is not writable branding configuration
const admin:LmsBrandingInput={feedback_task_origin:'https://task.invalid'};
void [optional,scopes,currency,origin,compatible,admin];
