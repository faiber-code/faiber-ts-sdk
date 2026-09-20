import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";

export type AiSummaryRole = "student" | "teacher" | "support";
export type AiSummaryState = "disabled" | "pending" | "generating" | "ready" | "no_data" | "blocked" | "failed";
export type AiMetricStatus = "available" | "insufficient_evidence" | "not_applicable";
export interface AiPerformanceMetric extends JsonObject { id:string; label:string; description:string; value:number|null; min:0; max:100; unit:"percent"|"score"; method:"calculated"|"ai_assessed"|"derived"; status:AiMetricStatus; explanation:string; supporting_data:JsonValue; evidence_count:number; evidence_refs:string[]; rubric_version:string; confidence:string|null; improvement_advice:string|null }
export interface AiImprovementAction extends JsonObject { metric_id:string; action:string; reason:string; success_criterion:string }
export interface AiPerformanceSummaryContent extends JsonObject { metrics:AiPerformanceMetric[]; short_summary:string; detailed_summary:string; improvement_actions:AiImprovementAction[] }
export interface AiLatestSummary extends JsonObject { subject_user_id:string; role:AiSummaryRole; enabled:boolean; state:AiSummaryState; freshness:"fresh"|"stale"|"unavailable"; language:"fa"|"en"|null; model_ref:string|null; classroom_ids:string[]; evidence_cutoff:string|null; generated_at:string|null; next_refresh_at:string|null; summary:AiPerformanceSummaryContent|null }
export interface AiRoleSummarySettings extends JsonObject { role:AiSummaryRole; enabled:boolean; model_ref:string|null; language:"fa"|"en"; guidance:string; quiet_minutes:number; max_wait_minutes:number; config_revision:number }
export interface AiSummarySettings extends JsonObject { globally_enabled:boolean; financial_owner_user_id:string|null; roles:AiRoleSummarySettings[] }
export interface AiSummarySettingsInput extends JsonObject { globally_enabled:boolean; roles:Omit<AiRoleSummarySettings,"config_revision">[] }
export interface AiSummaryModel extends JsonObject { model_ref:string; model:string; provider_label:string; source:string }
export interface EvaluationQuestion extends JsonObject { stable_id:string; version:number; kind:"teacher_rating"|"student_feedback"; metric_id:string; label_en:string; label_fa:string; description_en:string; description_fa:string; allow_not_applicable:boolean; enabled:boolean; archived:boolean; sort_order:number }
export interface EvaluationQuestionInput extends JsonObject { stable_id?:string|null; kind:"teacher_rating"|"student_feedback"; metric_id:string; label_en:string; label_fa:string; description_en:string; description_fa:string; allow_not_applicable:boolean; enabled:boolean; archived?:boolean; sort_order:number }
export type AiSummarySettingsResponse = ApiEnvelope<AiSummarySettings>;
export type AiSummaryModelsResponse = ApiEnvelope<AiSummaryModel[]>;
export type AiLatestSummaryResponse = ApiEnvelope<AiLatestSummary>;
export type AiRefreshSummaryResponse = ApiEnvelope<{subject_user_id:string;role:AiSummaryRole;state:"pending";due_at:string}>;
export interface LmsEntity extends JsonObject {
    id: string;
    name?: string | null;
    title?: string | null;
    status?: string | null;
}
export interface Course extends LmsEntity {
    title: string;
    category_id?: string;
}
export interface CourseCategory extends LmsEntity {
    name: string;
}
/** Course session, including its external or DRM-backed video source. */
export interface CourseSession extends LmsEntity {
    id: string;
    course_id: string;
    name: string;
    description: string | null;
    sort_order: number;
    session_type: string;
    session_type_id: string | null;
    exam_id: string | null;
    duration_minutes: number | null;
    auto_unlock: boolean;
    info: string | null;
    video_type: "external" | "drm" | string | null;
    external_url: string | null;
    drm_mixed_media_id: string | null;
    status: string;
    created_at: string;
    updated_at: string;
}
export interface VideoSection extends LmsEntity {
    course_id?: string;
    video_url?: string;
}
export interface Classroom extends LmsEntity {
    course_id?: string;
    course_name?: string | null;
    teacher_user_id?: string | null;
    teacher_profile?: ClassroomSessionTeacherProfile | null;
    consultant_user_id?: string | null;
    consultant_profile?: ClassroomSessionTeacherProfile | null;
    support_user_id?: string | null;
    support_profile?: ClassroomSessionTeacherProfile | null;
    starts_at?: string;
    weekly_schedule?: ClassroomWeeklyScheduleRule[];
}

/** Canonical LMS schedule: Sunday is 0, Saturday is 6; times are local to the rule offset. */
export interface ClassroomWeeklyScheduleRule extends JsonObject {
    day_of_week: number;
    starts_at: string;
    duration_minutes?: number | null;
    timezone_offset_minutes?: number | null;
    id?: string;
    day?: string;
    start_time?: string;
    delivery_type?: string;
    delivery_type_name?: string;
    session_type?: string;
}

/** Accepted legacy form; the LMS normalizes it to day_of_week and starts_at. */
export interface ClassroomLegacyWeeklyScheduleRule extends JsonObject {
    day: string;
    start_time: string;
    id?: string;
    delivery_type?: string;
    delivery_type_name?: string;
    session_type?: string;
    duration_minutes?: number | null;
    timezone_offset_minutes?: number | null;
}

export type ClassroomWeeklyScheduleRuleInput = ClassroomWeeklyScheduleRule | ClassroomLegacyWeeklyScheduleRule;

/** Configured LMS type used to determine classroom-session behavior and provisioning. */
export interface ClassroomSessionType extends JsonObject {
    id: string;
    code: string;
    name: string;
    name_fa: string | null;
    is_online: boolean;
    status: string;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

/** Minimal server-resolved teacher identity shown with a classroom session. */
export interface ClassroomSessionTeacherProfile extends JsonObject {
    id?: string;
    user_id?: string;
    first_name?: JsonValue;
    last_name?: JsonValue;
    email?: string;
    phone?: string;
    national_code?: string;
    avatar?: string;
}

/** Course-session metadata embedded in a classroom-session read. */
export interface ClassroomCourseSession extends JsonObject {
    id: string;
    course_id: string;
    name: string;
    description: string | null;
    sort_order: number;
    session_type: string;
    session_type_id: string | null;
    duration_minutes: number | null;
    status: string;
}

/** Classroom session returned by list, today, create, show, and update operations. */
export interface ClassroomSession extends LmsEntity {
    id: string;
    classroom_id: string;
    classroom_name: string | null;
    course_session_id: string | null;
    course_session: ClassroomCourseSession | null;
    course_session_type_id: string | null;
    session_type: ClassroomSessionType | null;
    name: string | null;
    session_number: number | null;
    duration_minutes: number | null;
    description: string | null;
    teacher_user_id: string | null;
    teacher_profile: ClassroomSessionTeacherProfile | null;
    locked: boolean;
    auto_unlock: boolean;
    auto_present: boolean;
    invited: boolean;
    session_room_id: string | null;
    starts_at: string | null;
    ends_at: string | null;
    status: string;
    created_at: string;
    updated_at: string;
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
export type CertificateStatus = "draft" | "issued" | "revoked" | (string & {});
export type CertificateTemplateStatus = "active" | "inactive" | (string & {});
export type CertificateFieldKey = "title" | "student_name" | "course_name" | "classroom_name" | "final_score" | "passing_mark" | "grade_name" | "issued_at" | "verification_code";
export type CertificateTextAnchor = "start" | "middle" | "end";

/** One dynamic value rendered over a certificate background. Coordinates use template canvas pixels. */
export interface CertificateLayoutField extends JsonObject {
    key: CertificateFieldKey;
    x: number;
    y: number;
    font_size: number;
    weight: number;
    fill?: string;
    prefix?: string;
    uppercase?: boolean;
    format?: "legacy_date";
    text_anchor?: CertificateTextAnchor;
}

/** Verification QR placement rendered from the certificate verification code. */
export interface CertificateQrLayout extends JsonObject {
    key?: "verification_code";
    x: number;
    y: number;
    size: number;
    fill?: string;
}

/** Complete generator layout stored with a certificate template. */
export interface CertificateLayout extends JsonObject {
    fields: CertificateLayoutField[];
    qr?: CertificateQrLayout;
}

export interface CertificateTemplate extends LmsEntity {
    id: string;
    name: string;
    name_en: string | null;
    background_url: string;
    canvas_width: number;
    canvas_height: number;
    layout: CertificateLayout;
    status: CertificateTemplateStatus;
    created_at: string;
    updated_at: string;
}

export interface CertificateRenderSnapshot extends JsonObject {
    template?: {
        id?: string;
        name?: string;
        background_url?: string;
        canvas_width?: number;
        canvas_height?: number;
        layout?: CertificateLayout;
    };
    certificate?: { title?: string };
    student?: { user_id?: string; name?: string };
    course?: { id?: string | null; name?: string | null };
    classroom?: { id?: string | null; name?: string | null };
    result?: { final_score?: number | null; passing_mark?: number | null; grade_name?: string | null };
    issued_at?: string;
    verification_code?: string;
}

/** Issued certificate and all fields used to regenerate its visual output. */
export interface Certificate extends LmsEntity {
    id: string;
    public_id: string;
    user_id: string;
    profile: ClassroomSessionTeacherProfile | null;
    course_id: string | null;
    course_name: string | null;
    classroom_id: string | null;
    classroom_name: string | null;
    title: string;
    certificate_template_id: string | null;
    grade_id: string | null;
    score: number | null;
    passing_mark: number | null;
    status: CertificateStatus;
    verification_code: string | null;
    legacy_code: string | null;
    issued_by: string | null;
    issued_at: string;
    media_url: string | null;
    revoked_at: string | null;
    revoke_reason: string | null;
    render_snapshot: CertificateRenderSnapshot;
    created_at: string;
    updated_at: string;
}

export interface PublicCertificate extends JsonObject {
    public_id: string;
    title: string;
    student_name: string;
    course_name: string;
    classroom_name: string;
    score: number | null;
    passing_mark: number | null;
    status: CertificateStatus;
    valid: boolean;
    verification_code: string;
    issued_at: string;
    image_url: string;
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
export interface CreateCourseSessionInput extends CreateLmsEntityInput {
    course_id: string;
    name: string;
    description?: string | null;
    sort_order: number;
    session_type: string;
    session_type_id?: string | null;
    exam_id?: string | null;
    duration_minutes?: number | null;
    auto_unlock: boolean;
    info?: string | null;
    video_type?: "external" | "drm" | string | null;
    external_url?: string | null;
    drm_mixed_media_id?: string | null;
    status: string;
}
export interface UpdateCourseSessionInput extends Partial<Omit<CreateCourseSessionInput, "course_id">> {
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
    course_id: string;
    name: string;
    starts_at: string;
    status: string;
    code?: string | null;
    description?: string | null;
    info?: string | null;
    classroom_type_id?: string | null;
    school_grade_id?: string | null;
    grade_id?: string | null;
    teacher_user_id?: string | null;
    consultant_user_id?: string | null;
    support_user_id?: string | null;
    capacity?: number | null;
    notifications?: JsonValue;
    weekly_schedule?: ClassroomWeeklyScheduleRuleInput[];
    check_sessions?: JsonValue;
    ends_at?: string | null;
}
export interface UpdateClassroomInput extends Partial<CreateClassroomInput> {
}
export interface CreateClassroomSessionInput extends CreateLmsEntityInput {
    classroom_id: string;
    course_session_id?: string;
    name?: string;
    session_number?: number;
    duration_minutes?: number;
    description?: string;
    teacher_user_id?: string;
    locked?: boolean;
    auto_unlock?: boolean;
    auto_present?: boolean;
    invited?: boolean;
    starts_at?: string;
    ends_at?: string;
    status: string;
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
    course_id?: string | null;
    classroom_id?: string | null;
    title: string;
    certificate_template_id?: string | null;
    grade_id?: string | null;
    status?: CertificateStatus;
    verification_code?: string | null;
    issued_by?: string | null;
    issued_at: string;
    media_url?: string | null;
    render_snapshot?: CertificateRenderSnapshot | null;
}
export interface UpdateCertificateInput extends JsonObject {
    user_id?: string;
    course_id?: string | null;
    classroom_id?: string | null;
    title?: string;
    certificate_template_id?: string | null;
    status?: CertificateStatus;
    verification_code?: string | null;
    issued_at?: string;
    media_url?: string | null;
    render_snapshot?: CertificateRenderSnapshot;
    revoke_reason?: string;
}
export interface CreateCertificateTemplateInput extends JsonObject {
    name: string;
    name_en?: string | null;
    background_url: string;
    canvas_width: number;
    canvas_height: number;
    layout?: CertificateLayout | null;
    status?: CertificateTemplateStatus;
}
export interface UpdateCertificateTemplateInput extends JsonObject {
    name?: string;
    name_en?: string | null;
    background_url?: string;
    canvas_width?: number;
    canvas_height?: number;
    layout?: CertificateLayout;
    status?: CertificateTemplateStatus;
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
export type CertificateListResponse = LmsListResponse<Certificate>;
export type CertificateResponse = LmsResponse<Certificate>;
export type CertificateTemplateListResponse = LmsListResponse<CertificateTemplate>;
export type CertificateTemplateResponse = LmsResponse<CertificateTemplate>;
export interface PublicCertificateResponse extends ApiEnvelope<PublicCertificate> {
}
/** Raw SVG document returned by the public generator endpoint. */
export type CertificateSvgResponse = string;
export interface DashboardResponse extends ApiEnvelope<LmsDashboard> {
}
export interface CourseSessionPage extends JsonObject {
    data: CourseSession[];
    meta: {
        page: number;
        page_size: number;
        total_items: number;
        total_pages: number;
    };
}
export interface CourseSessionsResponse extends ApiEnvelope<CourseSessionPage> {
}
export interface ClassroomSessionTypesResponse extends ApiEnvelope<ClassroomSessionType[]> {
}
export interface ClassroomSessionListQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    status?: string;
    classroom_id?: string;
    from?: string;
    to?: string;
}
export interface TodayClassroomSessionListQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    date?: string;
    timezone_offset_minutes?: number;
}
export interface ClassroomSessionPage extends JsonObject {
    data: ClassroomSession[];
    meta: {
        page: number;
        page_size: number;
        total_items: number;
        total_pages: number;
    };
}
export interface ClassroomSessionPageResponse extends ApiEnvelope<ClassroomSessionPage> {
}
export type ClassroomSessionRoomReference = string | Pick<ClassroomSession, "session_room_id">;
export interface ClassroomSessionLinks extends JsonObject {
    room: string | null;
    recording: string | null;
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
    video_type: "external" | "drm" | string | null;
    external_url: string | null;
    drm_mixed_media_id: string | null;
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
