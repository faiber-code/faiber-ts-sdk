/** Exact manually reviewed wire shapes at LMS 1a55795725ac5ac23b763117fbbe64f96d4cf2f6. */
import type { ApiEnvelope, JsonObject, JsonValue } from '@faiber/sdk-core';
/** Successful delete/reorder handlers serialize json!({}); no deleted flag exists. */
export type LmsEmptyMutationData = Record<string, never>;
export type LmsEmptyMutationResponse = ApiEnvelope<LmsEmptyMutationData>;
/** Profile first/last names are intentionally arbitrary JSON in the ProfileSummary Rust DTO. */
export interface LmsProfileSummary extends JsonObject { user_id: string; first_name: JsonValue; last_name: JsonValue; email: string|null; national_code: string|null; phone: string|null; gender: string|null }
export interface LmsBrandingUpload { asset_key: string; url: string }
export interface LmsFlowField { name: string; field_type: string; required: boolean; description: string }
export interface LmsFlowEvent { event_name: string; payload_fields: LmsFlowField[] }
export interface LmsFlowIntegration { queue: string; events: LmsFlowEvent[] }
export interface LmsCurrentClassroomUsers { user_ids: string[] }
export interface LmsDropoutEligibility { eligibility: Record<string, boolean> }
export interface LmsLegacyResolution { courses: Record<string, string>; classrooms: Record<string, string> }
export interface LmsIntegrationCategory { id: string; name: string; title: string; description: string|null }
export interface LmsIntegrationPrice { delivery_mode: 'online'|'in_person'; amount: string|null }
/** Integration prices both reflect the legacy base price, as emitted by office::course_json. */
export interface LmsIntegrationCourse { id: string; legacy_id: number|null; category_id: string|null; category: LmsIntegrationCategory|null; name: string; title: string|null; description: string|null; cover_url: string|null; duration: string|null; passing_mark: number|null; price: string|null; prices: LmsIntegrationPrice[]; status: string; created_at: string; updated_at: string }
export interface LmsBatchCourses { courses: LmsIntegrationCourse[] }
export interface LmsCourseSuccessors { successors: Record<string, LmsIntegrationCourse> }
/** The office batch returns the persisted entity, including deleted_at, rather than ClassroomResponse. */
export interface LmsIntegrationClassroom { id: string; course_id: string; name: string; code: string|null; description: string|null; info: string|null; classroom_type_id: string|null; school_grade_id: string|null; grade_id: string|null; teacher_user_id: string|null; consultant_user_id: string|null; support_user_id: string|null; capacity: number|null; notifications: JsonValue; weekly_schedule: JsonValue; check_sessions: JsonValue; starts_at: string|null; ends_at: string|null; status: string; legacy_id: number|null; deleted_at: string|null; created_at: string; updated_at: string; users_count: number; total_sessions: number; current_session: number }
export interface LmsBatchClassrooms { classrooms: LmsIntegrationClassroom[] }
export interface LmsCourseReport { course_id: string; course_name: string; classroom_count: number; active_classroom_count: number; student_count: number; session_count: number; completed_session_count: number; attendance_count: number; absence_count: number; attendance_rate: number }
export interface LmsStudentCourseSession { id: string; name: string|null; starts_at: string|null; status: string; duration_minutes: number|null; attendance: string|null; attended_seconds: number|null; /** Persisted arbitrary ratings JSON, not a fixed evaluation form. */ ratings: JsonValue; description: string|null }
export interface LmsStudentCourseAssignment { id: string; name: string|null; status: string; score: number|null; due_at: string|null }
export interface LmsStudentCourseExam { id: string; name: string|null; status: string; score: number|null; starts_at: string|null }
export interface LmsStudentCourseReport { id: string; course_id: string; name: string; classroom_name: string; starts_at: string|null; enrolled_at: string|null; ends_at: string|null; status: string; score: number|null; teacher: LmsProfileSummary|null; support: LmsProfileSummary|null; sessions: LmsStudentCourseSession[]; assignments: LmsStudentCourseAssignment[]; exams: LmsStudentCourseExam[] }
/** courses is omitted by list reports and present for the per-student summary; never null. */
export interface LmsStudentReport { courses?: LmsStudentCourseReport[]; user_id: string; profile: LmsProfileSummary|null; classroom_count: number; session_count: number; attendance_count: number; absence_count: number; attendance_rate: number }

/** Creating a delivery requires a real active exercise, an existing learner profile, and (if supplied) classroom enrollment. */
export interface LmsCreateAssignmentInput { homework_id: string; user_id: string; status: string; classroom_id?: string|null; teacher_user_id?: string|null; consultant_user_id?: string|null; support_user_id?: string|null; due_at?: string|null; answer_text?: string|null; score?: number|null }

export type LmsEvaluationScore = 1 | 2 | 3 | 4 | 5 | null;
/** Keys are enabled stable question IDs; null requires allow_not_applicable for that question. */
export type LmsEvaluationScores = Record<string, LmsEvaluationScore>;
export interface LmsTeacherRatingInput { kind: 'teacher_rating'; target_user_id: string; scores: LmsEvaluationScores; description?: string|null }
export interface LmsStudentFeedbackInput { kind: 'student_feedback'; target_user_id?: null; scores: LmsEvaluationScores; description?: string|null }
export type LmsSubmitEvaluationInput = LmsTeacherRatingInput | LmsStudentFeedbackInput;
