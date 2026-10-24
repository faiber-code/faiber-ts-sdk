import type {JsonObject,JsonValue} from "@faiber/sdk-core";
import type {QueryParams} from "@faiber/sdk-core";
export type SummarySource = 'lms'|'task'|'accounting'|'session'|'chat'|'crm'
export type SummaryMetricType = 'number'|'integer'|'boolean'|'enum'
export type SummaryLocalized = { en:string; fa:string }
export interface SummaryAggregateRef {source:SummarySource;category:string;key:string}
export type SummaryFormula = {op:'constant';value:string}|{op:'aggregate';aggregate:SummaryAggregateRef}|{op:'metric';key:string}|{op:'add'|'subtract'|'multiply'|'divide';left:SummaryFormula;right:SummaryFormula}|{op:'percentage';numerator:SummaryFormula;denominator:SummaryFormula}|{op:'round';value:SummaryFormula;places:number}
export type SummaryCalculation = {mode:'aggregate';aggregate:SummaryAggregateRef}|{mode:'formula';expression:SummaryFormula}|{mode:'assessment';instructions:string;rubric:{value:string|number|boolean;description:string}[];dependencies:SummarySource[]}
export interface SummaryMetric {key:string;label:SummaryLocalized;description:SummaryLocalized;value_type:SummaryMetricType;unit:string;min:string|null;max:string|null;enum_values:string[];calculation:SummaryCalculation}
export interface SummarySection {key:string;title:SummaryLocalized;instructions:string;format:'paragraph'|'bullets'|'actions';max_chars:number;max_items:number}
export interface SummarySelection {source:SummarySource;required:boolean;scope:'subject'|'assigned';categories:string[];tools:string[];allow_text:boolean}
export interface SummaryConfiguration {role_id:string;language:'fa'|'en';model_ref:string;guidance:string;lookback_days:number;sources:SummarySelection[];metrics:SummaryMetric[];sections:SummarySection[];refresh:{activity:boolean;quiet_minutes:number;max_wait_minutes:number;scheduled:boolean;daily_at:string;timezone:string};budgets:{tool_calls:number;model_rounds:number;timeout_seconds:number;max_input_tokens:number;max_output_tokens:number}}
export interface SummaryConfigurationRecord {deployment_id:string;published_by:string|null;last_scheduled_date:string|null;created_at:string;updated_at:string;id:string;role_id:string;enabled:boolean;draft:SummaryConfiguration;draft_version:number;published_revision:number|null;published_at:string|null}
export interface SummaryCapability {tool_schemas:Record<string,{inputSchema:JsonObject;outputSchema:JsonObject}>;source:SummarySource;configured:boolean;categories:string[];text_categories:string[];optional_text_categories?:string[];category_scopes?:Record<string,SummarySelection['scope'][]>;category_evidence_kinds?:Record<string,'windowed_snapshot'|'current_snapshot'>;scopes:SummarySelection['scope'][];tools:string[];aggregates:{key:string;category:string;unit:string;value_type:SummaryMetricType}[]}
export interface SummaryRole {id:string;name:string;configuration?:{id:string;enabled:boolean}|null}
export interface SummaryModel {model_ref:string;model:string;provider_label:string;supports_tools:boolean}
export interface SummarySettings {globally_enabled:boolean;concurrency_limit:number;retention_days:number}
export interface SummaryResolvedUnit {source:SummarySource;unit:string;contract_revision:string;currency:string|null}
export interface SummaryMetricResult {resolved_unit?:SummaryResolvedUnit|null;key:string;value:string|number|boolean|null;status:string;explanation:string;evidence_refs:string[]}
export type SummarySectionResult = {key:string;evidence_refs:string[]}&({format:'paragraph';text:string}|{format:'bullets';items:string[]}|{format:'actions';items:{action:string;reason:string;success_criterion:string}[]})
export interface SummaryCoverage {source:SummarySource;status:string;reason:string|null;record_count:number;revision:string}
/** usage is schema-free JSON returned by the model runner. */
export interface SummaryRun {deployment_id:string;job_id:string;usage:JsonValue;evidence_fingerprint:string|null;id:string;subject_user_id:string;role_id:string;config_revision:number;configuration:SummaryConfiguration;preview:boolean;status:string;window_start:string;cutoff:string;result:{metrics:SummaryMetricResult[];sections:SummarySectionResult[]}|null;coverage:SummaryCoverage[];completeness:string;error:string|null;generated_at:string|null;created_at:string}
/** Sanitized persisted job: preview_configuration, lease_token and requested_by are withheld. */
export interface SummaryJob {deployment_id:string;configuration_id:string;preview:boolean;desired_revision:number;evidence_revision:number;processing_evidence_revision:number|null;first_changed_at:string;last_changed_at:string;lease_expires_at:string|null;next_poll_at:string;created_at:string;updated_at:string;id:string;subject_user_id:string;role_id:string;status:string;attempts:number;due_at:string;last_error:string|null;operation_id:string|null}
export interface SummaryPage<T>{items:T[];page:number;per_page:number;total:number}

/** Create accepts defaults for omitted configuration members; update additionally requires expected_version. */
export interface SummaryConfigurationInput extends Partial<Omit<SummaryConfiguration,'refresh'|'budgets'>> {role_id:string;refresh?:Partial<SummaryConfiguration['refresh']>;budgets?:Partial<SummaryConfiguration['budgets']>}
export interface SummaryConfigurationWrite {configuration:SummaryConfigurationInput;expected_version?:number}
export interface SummaryConfigurationUpdate extends SummaryConfigurationWrite {expected_version:number}
export interface SummaryListQuery extends QueryParams {user_id?:string;role_id?:string;status?:string;page?:number;per_page?:number}
export interface SummaryLatestQuery extends QueryParams {role_id:string;user_id?:string}
export interface SummaryLatest {subject_user_id:string;role_id:string;enabled:boolean;availability:string;freshness:string;job_status?:string|null;summary:SummaryRun|null}
export interface SummaryStatusWrite {enabled:boolean}
export interface SummaryPreviewWrite {user_id:string}
export interface SummaryPreviewResponse {job_id:string;run_id:string}
export interface SummaryValidation {valid:boolean}
/** available establishes authenticated connectivity only; evidence_ready=false or
 * preview_required=true still requires an eligible subject preview before activation.
 */
export interface SummarySourceCheck {source:SummarySource;available:boolean;evidence_ready?:boolean;preview_required?:boolean;status?:string;tools?:JsonValue[]}
export interface SummaryRefreshWrite {subjects:{user_id:string;role_id:string}[]}
export interface SummaryRefreshResponse {queued:{job_id:string;user_id:string;role_id:string}[]}
export interface SummaryRetryResponse {job_id:string}
