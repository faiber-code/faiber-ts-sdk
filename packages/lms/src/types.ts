import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface LmsEntity extends JsonObject {
    id: string;
    name?: string;
    title?: string;
    status?: string;
}
export interface Course extends LmsEntity {
    title: string;
    category_id?: string;
}
export interface CourseCategory extends LmsEntity {
    name: string;
}
export interface VideoSection extends LmsEntity {
    course_id?: string;
    video_url?: string;
}
export interface Classroom extends LmsEntity {
    course_id?: string;
    starts_at?: string;
}
export interface ClassroomSession extends LmsEntity {
    classroom_id?: string;
    starts_at?: string;
}
export interface Exam extends LmsEntity {
    course_id?: string;
    duration_minutes?: number;
}
export interface ExamQuestion extends LmsEntity {
    exam_id?: string;
    question?: string;
}
export interface ExamSession extends LmsEntity {
    exam_id?: string;
    user_id?: string;
    score?: number;
}
export interface Homework extends LmsEntity {
    course_id?: string;
    due_at?: string;
}
export interface HomeworkQuestion extends LmsEntity {
    homework_id?: string;
    question?: string;
}
export interface Certificate extends LmsEntity {
    user_id?: string;
    course_id?: string;
    issued_at?: string;
}
export interface Event extends LmsEntity {
    starts_at?: string;
    ends_at?: string;
}
export interface InteractiveContent extends LmsEntity {
    content_type?: string;
    content?: JsonObject;
}
export interface Grade extends LmsEntity {
    name: string;
}
export interface ClassroomType extends LmsEntity {
    name: string;
}
export interface TextTemplate extends LmsEntity {
    name: string;
    content?: string;
}
export interface CreateLmsEntityInput extends JsonObject {
    name?: string;
    title?: string;
    status?: string;
}
export interface UpdateLmsEntityInput extends Partial<CreateLmsEntityInput> {
}
export interface CreateCourseInput extends CreateLmsEntityInput {
    title: string;
    category_id?: string;
    description?: string;
}
export interface UpdateCourseInput extends Partial<CreateCourseInput> {
}
export interface CreateCourseCategoryInput extends CreateLmsEntityInput {
    name: string;
}
export interface UpdateCourseCategoryInput extends Partial<CreateCourseCategoryInput> {
}
export interface CreateVideoSectionInput extends CreateLmsEntityInput {
    course_id: string;
    video_url?: string;
}
export interface UpdateVideoSectionInput extends Partial<CreateVideoSectionInput> {
}
export interface CreateClassroomInput extends CreateLmsEntityInput {
    course_id?: string;
    starts_at?: string;
}
export interface UpdateClassroomInput extends Partial<CreateClassroomInput> {
}
export interface CreateClassroomSessionInput extends CreateLmsEntityInput {
    classroom_id: string;
    starts_at: string;
}
export interface UpdateClassroomSessionInput extends Partial<CreateClassroomSessionInput> {
}
export interface CreateExamInput extends CreateLmsEntityInput {
    course_id?: string;
    duration_minutes?: number;
}
export interface UpdateExamInput extends Partial<CreateExamInput> {
}
export interface CreateExamQuestionInput extends CreateLmsEntityInput {
    exam_id: string;
    question: string;
}
export interface UpdateExamQuestionInput extends Partial<CreateExamQuestionInput> {
}
export interface CreateExamSessionInput extends CreateLmsEntityInput {
    exam_id: string;
    user_id: string;
}
export interface UpdateExamSessionInput extends Partial<CreateExamSessionInput> {
    score?: number;
}
export interface CreateHomeworkInput extends CreateLmsEntityInput {
    course_id?: string;
    due_at?: string;
}
export interface UpdateHomeworkInput extends Partial<CreateHomeworkInput> {
}
export interface CreateHomeworkQuestionInput extends CreateLmsEntityInput {
    homework_id: string;
    question: string;
}
export interface UpdateHomeworkQuestionInput extends Partial<CreateHomeworkQuestionInput> {
}
export interface CreateCertificateInput extends CreateLmsEntityInput {
    user_id: string;
    course_id: string;
    issued_at?: string;
}
export interface UpdateCertificateInput extends Partial<CreateCertificateInput> {
}
export interface CreateEventInput extends CreateLmsEntityInput {
    starts_at?: string;
    ends_at?: string;
}
export interface UpdateEventInput extends Partial<CreateEventInput> {
}
export interface CreateInteractiveContentInput extends CreateLmsEntityInput {
    content_type: string;
    content?: JsonObject;
}
export interface UpdateInteractiveContentInput extends Partial<CreateInteractiveContentInput> {
}
export interface CreateGradeInput extends CreateLmsEntityInput {
    name: string;
}
export interface UpdateGradeInput extends Partial<CreateGradeInput> {
}
export interface CreateClassroomTypeInput extends CreateLmsEntityInput {
    name: string;
}
export interface UpdateClassroomTypeInput extends Partial<CreateClassroomTypeInput> {
}
export interface CreateTextTemplateInput extends CreateLmsEntityInput {
    name: string;
    content?: string;
}
export interface UpdateTextTemplateInput extends Partial<CreateTextTemplateInput> {
}
export interface ClassroomUserInput extends JsonObject {
    user_id: string;
    role?: string;
}
export interface LmsDashboard extends JsonObject {
    courses: number;
    classrooms: number;
    students: number;
    teachers: number;
}
export interface ReportRow extends JsonObject {
    id: string;
    name?: string;
    total?: number;
}
export interface LmsListResponse<T extends LmsEntity> extends ResourceListResponse<T> {
}
export interface LmsResponse<T extends LmsEntity> extends ResourceResponse<T> {
}
export interface DashboardResponse extends ApiEnvelope<LmsDashboard> {
}
export interface CourseSessionsResponse extends ApiEnvelope<ClassroomSession[]> {
}
export interface ClassroomUserResponse extends ApiEnvelope<Classroom> {
}
export interface LmsReportResponse extends ApiEnvelope<ReportRow[]> {
}

/** Learner-facing academy category returned from the active catalog. */
export interface AcademyCategory {
    id: number;
    name_fa: string;
    name_en: string;
    description_fa: string | null;
    description_en: string | null;
}
export interface AcademyCatalogQuery extends QueryParams { category_id?: number; }
export interface AcademyCourse {
    id: number;
    category_id: number | null;
    title_fa: string;
    title_en: string;
    description_fa: string | null;
    description_en: string | null;
    duration: string | null;
    passing_mark: number | null;
    /** Decimal value serialized by PostgreSQL as a string. */
    price: string | null;
    cover_url: string | null;
    audience_tags: JsonValue;
    enrollment_id: string | null;
    enrollment_status: string | null;
    session_count: number;
    completed_count: number;
}
export interface AcademySession {
    id: number;
    name: string;
    content_fa: string | null;
    content_en: string | null;
    sort_order: number;
    session_type: string;
    duration_minutes: number | null;
    exam_id: number | null;
    completed: boolean;
    unlocked: boolean;
}
export interface AcademyCourseDetail { id: number; sessions: AcademySession[]; }
export interface AcademyEnrollmentStart { id: string; status: string; price: string; }
export interface AcademyEnrollment { id: string; course_id: number; status: string; best_score: number | null; }
export interface AcademyCompleteSessionInput { idempotency_key: string; }
export interface AcademySessionCompletion { session_id: number; completed: true; }
export interface AcademyExamQuestion { id: number; text: string; type: string; options: JsonValue; }
export interface AcademyExamAttempt { attempt_id: string; questions: AcademyExamQuestion[]; }
/** Keys are decimal question identifiers; values retain the question's JSON answer representation. */
export interface AcademySubmitExamInput { answers: Record<string, JsonValue>; }
export interface AcademyExamResult { score: number; passing_mark: number; passed: boolean; }
export type AcademyCategoriesResponse = ApiEnvelope<AcademyCategory[]>;
export type AcademyCoursesResponse = ApiEnvelope<AcademyCourse[]>;
export type AcademyCourseResponse = ApiEnvelope<AcademyCourseDetail>;
export type AcademyEnrollmentStartResponse = ApiEnvelope<AcademyEnrollmentStart>;
export type AcademyEnrollmentsResponse = ApiEnvelope<AcademyEnrollment[]>;
export type AcademySessionCompletionResponse = ApiEnvelope<AcademySessionCompletion>;
export type AcademyExamAttemptResponse = ApiEnvelope<AcademyExamAttempt>;
export type AcademyExamResultResponse = ApiEnvelope<AcademyExamResult>;
