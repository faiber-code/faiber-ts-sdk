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

import type {TaskApi} from '@faiber/faiber-task';
declare const task:TaskApi;
const binary=task.feedback.attachmentContent('r','a',{responseType:'arraybuffer'});
const bytes:Promise<ArrayBuffer|Uint8Array>=binary.then(r=>r.data);
const browser:Promise<Blob>=task.feedback.attachmentContent('r','a').then(r=>r.data);
void [bytes,browser];

import type {ChatApi} from '@faiber/faiber-chat';
declare const chat:ChatApi;
const audio:Promise<ArrayBuffer|Uint8Array>=chat.synthesize({text:'Hello'},{responseType:'arraybuffer'}).then(r=>r.data);
void audio;
