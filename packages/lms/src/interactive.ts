import { type FaiberClient, type RequestOptions } from '@faiber/sdk-core';
export interface LearningText { fa: string; en: string }
export interface LearningCheck { id: string; variable: string | null; expected: string | number; label: LearningText; uses_variables?: string[]; min_assignments?: number }
export interface LearningActivity { id: string; kind: 'practice' | 'challenge'; title: LearningText; objective: LearningText; explanation: LearningText; starter_code: string; concepts: string[]; hints: LearningText[]; checks: LearningCheck[] }
export interface LearningDefinition { title: LearningText; chapter: LearningText; description: LearningText; language: 'fa' | 'en'; runtime: 'python-variables-v1'; concepts: string[]; teacher_guidance: string; activities: LearningActivity[]; knowledge_chat_slug?: string | null }
export interface LearningDefinitionRecord { id: string; course_session_id: string; version: number; status: 'draft' | 'published'; definition: LearningDefinition }
export interface LearningCatalogItem { course_id: string; course_session_id: string; version: number; title: LearningText; chapter: LearningText; description: LearningText; language: 'fa' | 'en'; activity_count: number; price: string | null }
export interface LearningCheckResult { id: string; passed: boolean; label: LearningText }
export interface LearningEvaluation { passed: boolean; stdout: string; error: string | null; checks: LearningCheckResult[]; elapsed_ms: number }
export interface LearningState { id: string; enrollment_id: string; course_session_id: string; definition_id: string; version: number; revision: number; current_activity: number; status: 'active' | 'completed'; drafts: Record<string,string>; hints_used: Record<string,number>; attempt_count: number; completed_activities: string[]; mastered_concepts: string[]; last_result: LearningEvaluation | null }
export interface LearningRun { state: LearningState; definition: LearningDefinition }
export interface LearningEnvelope<T> { status: string; message: string; data: T }
export interface SaveLearningDefinitionInput { definition: LearningDefinition }
export interface StartLearningInput { enrollment_id: string }
export interface LearningDraftInput { revision: number; activity_id: string; code: string }
export interface LearningAttemptInput extends LearningDraftInput { idempotency_key: string }
export interface LearningHintInput { revision: number; activity_id: string }
export interface LearningHint { run: LearningRun; hint: LearningText }
export interface LearningAttempt { run: LearningRun; result: LearningEvaluation; reused: boolean }
export interface LearningTeacherContext { run_id: string; version: number; definition_id: string; language: 'fa'|'en'; title: LearningText; objective: LearningText; explanation: LearningText; allowed_concepts: string[]; activity_id: string; activity_kind: 'practice'|'challenge'; hints_revealed: LearningText[]; attempt_count: number; completed_activities: string[]; mastered_concepts: string[]; status: 'active'|'completed'; last_result: LearningEvaluation|null; current_code: string|null; teacher_guidance: string; knowledge_chat_slug: string|null }
const id=(value:string)=>encodeURIComponent(value);
/** Version-pinned interactive lessons. All methods retain the full Axios response and configured authorization. */
export class InteractiveLearningApi {
 constructor(private readonly client: FaiberClient) {}
 /** Public published course previews. Contains no hints, hidden tests or learner data. */
 catalog(options?:RequestOptions){return this.client.get<LearningEnvelope<LearningCatalogItem[]>>('/api/v1/interactive/catalog',undefined,options);}
 /** List authored versions; requires lms:course:read. */
 definitions(options?:RequestOptions){return this.client.get<LearningEnvelope<LearningDefinitionRecord[]>>('/api/v1/interactive/definitions',undefined,options);}
 /** Read an authored version including checks; requires lms:course:read. */
 definition(definitionId:string,options?:RequestOptions){return this.client.get<LearningEnvelope<LearningDefinitionRecord>>(`/api/v1/interactive/definitions/${id(definitionId)}`,undefined,options);}
 /** Create a new draft version; requires lms:course:update. Existing versions remain immutable. */
 saveDefinition(sessionId:string,input:SaveLearningDefinitionInput,options?:RequestOptions<SaveLearningDefinitionInput>){return this.client.post<LearningEnvelope<LearningDefinitionRecord>,SaveLearningDefinitionInput>(`/api/v1/interactive/lessons/${id(sessionId)}`,input,options);}
 /** Publish a validated draft; requires lms:course:update. */
 publish(definitionId:string,options?:RequestOptions){return this.client.post<LearningEnvelope<LearningDefinitionRecord>>(`/api/v1/interactive/definitions/${id(definitionId)}/publish`,undefined,options);}
 /** Read latest published learner content. Requires identity; strips checks and unearned hints. */
 lesson(sessionId:string,options?:RequestOptions){return this.client.get<LearningEnvelope<LearningDefinitionRecord>>(`/api/v1/interactive/lessons/${id(sessionId)}`,undefined,options);}
 /** Start/resume an owned active enrollment. Returns 403 for missing prerequisites; pins published version. */
 start(sessionId:string,input:StartLearningInput,options?:RequestOptions<StartLearningInput>){return this.client.post<LearningEnvelope<LearningRun>,StartLearningInput>(`/api/v1/interactive/lessons/${id(sessionId)}/start`,input,options);}
 /** List only the authenticated learner's active-enrollment runs. */
 runs(options?:RequestOptions){return this.client.get<LearningEnvelope<LearningState[]>>('/api/v1/interactive/runs',undefined,options);}
 /** Resume an owned run; 404 prevents disclosing other learners' records. */
 run(runId:string,options?:RequestOptions){return this.client.get<LearningEnvelope<LearningRun>>(`/api/v1/interactive/runs/${id(runId)}`,undefined,options);}
 /** Save current activity code; 409 requires refetch and deliberate conflict recovery. */
 saveDraft(runId:string,input:LearningDraftInput,options?:RequestOptions<LearningDraftInput>){return this.client.put<LearningEnvelope<LearningRun>,LearningDraftInput>(`/api/v1/interactive/runs/${id(runId)}/draft`,input,options);}
 /** Reveal the next authored hint; ownership/revision/current-activity gates apply. */
 hint(runId:string,input:LearningHintInput,options?:RequestOptions<LearningHintInput>){return this.client.post<LearningEnvelope<LearningHint>,LearningHintInput>(`/api/v1/interactive/runs/${id(runId)}/hints`,input,options);}
 /** Server evaluation only. Reuse an idempotency key for identical retries; 409 rejects different payloads, 429 limits attempts, 503 means runner unavailable. */
 submit(runId:string,input:LearningAttemptInput,options?:RequestOptions<LearningAttemptInput>){return this.client.post<LearningEnvelope<LearningAttempt>,LearningAttemptInput>(`/api/v1/interactive/runs/${id(runId)}/attempts`,input,options);}
 /** Bounded server-owned context for an owned run, without hidden answers. */
 teacherContext(runId:string,options?:RequestOptions){return this.client.get<LearningEnvelope<LearningTeacherContext>>(`/api/v1/interactive/runs/${id(runId)}/teacher-context`,undefined,options);}
}
