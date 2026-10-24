import type { ApiEnvelope, JsonObject, JsonValue, QueryParams, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
export interface TransferUserDataInput { from_user_id: string; to_user_id: string }
export interface EducationalTransferCounts {
  classroom_enrollments: number; attendance: number; homework_assignments: number;
  exam_attempts: number; grades: number; certificates: number; classroom_notes: number;
  classroom_evaluations: number; session_evaluations: number; academy_enrollments: number; interactive_runs: number;
}
export interface EducationalTransferResult {
  transfer_id: string; from_user_id: string; to_user_id: string;
  moved: EducationalTransferCounts; profile_sync: "queued";
}
export interface TransferUserDataResponse extends ApiEnvelope<EducationalTransferResult> {}
export type TransferErrorCode = "invalid_user_id" | "same_user" | "invalid_idempotency_key" | "invalid_payload" | "unauthenticated" | "user_not_found" | "profile_unavailable" | "idempotency_conflict" | "destination_conflict" | "active_attempt" | "transfer_busy" | "database_error" | "invalid_saved_response";
export interface TransferUserDataErrorResponse { status: "error"; error: { code: TransferErrorCode; message: string; details: { user_id?: string } } }

export interface EvaluationQuestion extends JsonObject { stable_id:string; version:number; kind:"teacher_rating"|"student_feedback"; metric_id:string; label_en:string; label_fa:string; description_en:string; description_fa:string; allow_not_applicable:boolean; enabled:boolean; archived:boolean; sort_order:number }
export interface EvaluationQuestionInput extends JsonObject { stable_id?:string|null; kind:"teacher_rating"|"student_feedback"; metric_id:string; label_en:string; label_fa:string; description_en?:string; description_fa?:string; allow_not_applicable:boolean; enabled:boolean; archived?:boolean; sort_order:number }
export interface LmsEntity extends JsonObject {
    id: string;
    name?: string | null;
    title?: string | null;
    status?: string | null;
}
export type Course = import("./operations.types.js").CourseShowCourseGetResponseData;
export type CourseCategory = import("./operations.types.js").CourseShowCategoryGetResponseData;
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
export type Classroom = import("./operations.types.js").ClassroomShowClassroomGetResponseData;

/** Canonical LMS schedule: Sunday is 0, Saturday is 6; times are local to the rule offset. The rule's mode selects the generated primary session type. */
export interface ClassroomWeeklyScheduleRule extends JsonObject {
    day_of_week: number;
    starts_at: string;
    duration_minutes?: number | null;
    timezone_offset_minutes?: number | null;
    id?: string;
    day?: string;
    start_time?: string;
    mode?: "online" | "interactive" | "composition" | "in_person" | "makeup" | (string & {});
    delivery_type?: string;
    delivery_type_name?: string;
    session_type?: string;
    course_session_type_id?: string;
}

/** Accepted legacy form; the LMS normalizes it to day_of_week and starts_at. */
export interface ClassroomLegacyWeeklyScheduleRule extends JsonObject {
    day: string;
    start_time: string;
    id?: string;
    mode?: "online" | "interactive" | "composition" | "in_person" | "makeup" | (string & {});
    delivery_type?: string;
    delivery_type_name?: string;
    session_type?: string;
    course_session_type_id?: string;
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
export type ClassroomSessionTeacherProfile = import("./wire.types.js").LmsProfileSummary;

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
export type ClassroomSession = import("./operations.types.js").ClassroomShowSessionGetResponseData;
export type Exam = import("./operations.types.js").ExamShowExamGetResponseData;
export type ExamQuestion = import("./operations.types.js").ExamShowQuestionGetResponseData;
export type ExamSession = import("./operations.types.js").ExamShowSessionGetResponseData;
export type HomeworkItemKind = "todo" | "project";
export type HomeworkDifficulty = "easy" | "medium" | "hard";
export const HOMEWORK_ASSIGNMENT_STATUSES = [
    "pending",
    "assigned",
    "submitted",
    "unsolved",
    "ungraded",
    "incorrect",
    "incomplete",
    "completed_with_remediation",
    "completed",
    "rejected",
    "inactive",
    "reviewed",
] as const;
export type HomeworkAssignmentStatus = typeof HOMEWORK_ASSIGNMENT_STATUSES[number];
/** Filters reusable homework banks by explicitly assigned delivery staff. */
export interface HomeworkBankListQuery extends QueryParams {
    page_number?: number | null;
    page_size?: number | null;
    search?: string | null;
    status?: string | null;
    teacher_user_id?: string | null;
    support_user_id?: string | null;
}
/** Filters reusable homework definitions by their delivery's explicitly assigned staff. */
export interface HomeworkListQuery extends QueryParams {
    page_number?: number | null;
    page_size?: number | null;
    search?: string | null;
    status?: string | null;
    homework_bank_id?: string | null;
    difficulty?: string | null;
    course_id?: string | null;
    user_id?: string | null;
    teacher_user_id?: string | null;
    support_user_id?: string | null;
    from?: string | null;
    to?: string | null;
}
/** Filters exam definitions by staff assigned to their delivered sessions. */
export interface ExamListQuery extends QueryParams {
    page_number?: number | null;
    page_size?: number | null;
    search?: string | null;
    status?: string | null;
    course_id?: string | null;
    grade_id?: string | null;
    user_id?: string | null;
    teacher_user_id?: string | null;
    support_user_id?: string | null;
    from?: string | null;
    to?: string | null;
}
/** Filters delivered homework items. `statuses` is encoded as the backend's comma-separated `status` query. */
export interface HomeworkAssignmentListQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    status?: HomeworkAssignmentStatus;
    statuses?: readonly HomeworkAssignmentStatus[];
    /** The assigned homework-bank item/question ID, not its parent bank ID. */
    homework_id?: string;
    course_id?: string;
    classroom_id?: string;
    /** Match any related participant or staff member. */
    user_id?: string;
    /** Match only the student receiving the assignment. */
    student_user_id?: string;
    /** Match only the assigned teacher. */
    teacher_user_id?: string;
    /** Match only the assigned consultant. */
    consultant_user_id?: string;
    /** Match only the assigned support user. */
    support_user_id?: string;
    from?: string;
    to?: string;
}
/** Role-aware filters for delivered exam sessions. */
export interface ExamSessionListQuery extends QueryParams {
    page_number?: number;
    page_size?: number;
    search?: string;
    status?: string;
    exam_id?: string;
    classroom_id?: string;
    /** Match any related participant or staff member. */
    user_id?: string;
    /** Match only sessions containing an attempt for this student. */
    student_user_id?: string;
    teacher_user_id?: string;
    consultant_user_id?: string;
    support_user_id?: string;
    from?: string;
    to?: string;
}
export type Homework = import("./operations.types.js").HomeworkShowHomeworkGetResponseData;
export type HomeworkBank = import("./operations.types.js").HomeworkShowBankGetResponseData;
export type CreateHomeworkBankInput = import("./operations.types.js").HomeworkStoreBankPostInput;
export type UpdateHomeworkBankInput = import("./operations.types.js").HomeworkUpdateBankPatchInput;
export type ExamBank = Exam;
export type ExamBankItem = ExamQuestion;
export type HomeworkQuestion = import("./operations.types.js").HomeworkShowQuestionGetResponseData;
export type HomeworkBankItem = HomeworkQuestion;
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
    /** Arbitrary persisted JSON; the backend also emits an empty object for an unset layout. */
    layout: JsonValue;
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
        layout?: JsonValue;
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
    /** Arbitrary persisted snapshot JSON, including legacy snapshots and the empty-object default. */
    render_snapshot: JsonValue;
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
export type Grade = import("./operations.types.js").ConfigShowGradeGetResponseData;
export type ClassroomType = import("./operations.types.js").ConfigShowClassroomTypeGetResponseData;
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
export type CreateCourseInput = import("./operations.types.js").CourseStoreCoursePostInput;
export type UpdateCourseInput = import("./operations.types.js").CourseUpdateCoursePatchInput;
export interface CreateCourseSessionInput extends CreateLmsEntityInput {
    course_id: string;
    name: string;
    description?: string | null;
    sort_order: number;
    session_type?: string;
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
export type CreateCourseCategoryInput = import("./operations.types.js").CourseStoreCategoryPostInput;
export type UpdateCourseCategoryInput = import("./operations.types.js").CourseUpdateCategoryPatchInput;
export interface CreateVideoSectionInput extends CreateLmsEntityInput {
    course_id: string;
    video_url?: string;
}
export interface UpdateVideoSectionInput extends Partial<CreateVideoSectionInput> {
}
export type CreateClassroomInput = import("./operations.types.js").ClassroomStoreClassroomPostInput;
export type UpdateClassroomInput = import("./operations.types.js").ClassroomUpdateClassroomPatchInput;
export type CreateClassroomSessionInput = import("./operations.types.js").ClassroomStoreSessionPostInput;
export type UpdateClassroomSessionInput = import("./operations.types.js").ClassroomUpdateSessionPatchInput;
export type CreateExamInput = import("./operations.types.js").ExamStoreExamPostInput;
export type UpdateExamInput = import("./operations.types.js").ExamUpdateExamPatchInput;
export type CreateExamQuestionInput = import("./operations.types.js").ExamStoreQuestionPostInput;
export type UpdateExamQuestionInput = import("./operations.types.js").ExamUpdateQuestionPatchInput;
export type CreateExamSessionInput = import("./operations.types.js").ExamStoreSessionPostInput;
export interface UpdateExamSessionInput extends JsonObject {
    exam_id?: string | null;
    classroom_id?: string | null;
    classroom_session_id?: string | null;
    name?: string | null;
    description?: string | null;
    info?: string | null;
    duration_minutes?: number | null;
    questions_count?: number | null;
    easy_count?: number | null;
    medium_count?: number | null;
    hard_count?: number | null;
    selection_mode?: string | null;
    teacher_user_id?: string | null;
    consultant_user_id?: string | null;
    support_user_id?: string | null;
    starts_at?: string | null;
    ends_at?: string | null;
    status?: string | null;
}
export type CreateHomeworkInput = import("./operations.types.js").HomeworkStoreHomeworkPostInput;
export type UpdateHomeworkInput = import("./operations.types.js").HomeworkUpdateHomeworkPatchInput;
export type CreateHomeworkQuestionInput = import("./operations.types.js").HomeworkStoreQuestionPostInput;
export type UpdateHomeworkQuestionInput = import("./operations.types.js").HomeworkUpdateQuestionPatchInput;
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
    render_snapshot?: JsonValue;
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
    render_snapshot?: JsonValue;
    revoke_reason?: string;
}
export interface CreateCertificateTemplateInput extends JsonObject {
    name: string;
    name_en?: string | null;
    background_url: string;
    canvas_width: number;
    canvas_height: number;
    layout?: JsonValue;
    status?: CertificateTemplateStatus;
}
export interface UpdateCertificateTemplateInput extends JsonObject {
    name?: string;
    name_en?: string | null;
    background_url?: string;
    canvas_width?: number;
    canvas_height?: number;
    layout?: JsonValue;
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
export type CreateGradeInput = import("./operations.types.js").ConfigStoreGradePostInput;
export type UpdateGradeInput = import("./operations.types.js").ConfigUpdateGradePatchInput;
export type CreateClassroomTypeInput = import("./operations.types.js").ConfigStoreClassroomTypePostInput;
export type UpdateClassroomTypeInput = import("./operations.types.js").ConfigUpdateClassroomTypePatchInput;
export interface CreateTextTemplateInput extends CreateLmsEntityInput {
    name: string;
    content?: string;
}
export interface UpdateTextTemplateInput extends Partial<CreateTextTemplateInput> {
}
export type ClassroomUserInput = import("./operations.types.js").ClassroomEnrollClassroomUserPostInput;
export type LmsDashboard = import("./operations.types.js").DashboardIndexGetResponseData;
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
    user_id?: string;
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
export type ClassroomUserResponse = import("./operations.types.js").ClassroomEnrollClassroomUserPostResponse;
export interface LmsReportResponse extends ApiEnvelope<ReportRow[]> {
}

/** Learner-facing academy category returned from the active catalog. */
export interface AcademyCategory {
    id: string;
    name_fa: string;
    name_en: string;
    description_fa: string | null;
    description_en: string | null;
    image_url: string | null;
}
export interface AcademyCatalogQuery extends QueryParams { category_id?: string; }
export interface AcademyCourse {
    id: string;
    category_id: string | null;
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
    sort_order: number;
    curriculum_session_count: number;
    session_count: number;
    completed_count: number;
}
export interface AcademySession {
    id: string;
    name: string;
    content_fa: string | null;
    content_en: string | null;
    sort_order: number;
    session_type: string;
    duration_minutes: number | null;
    exam_id: string | null;
    video_type: "external" | "drm" | string | null;
    external_url: string | null;
    drm_mixed_media_id: string | null;
    completed: boolean;
    unlocked: boolean;
}
export interface AcademyCourseDetail { id: string; sessions: AcademySession[]; }
export interface AcademyEnrollmentStart { id: string; status: string; price: string; }
export interface AcademyEnrollment { id: string; course_id: string; status: string; best_score: number | null; }
export interface AcademyCompleteSessionInput { idempotency_key: string; }
export interface AcademySessionCompletion { session_id: string; completed: true; }
export interface AcademyExamQuestion { id: string; text: string; type: string; options: JsonValue; points: number; media: JsonValue; }
export interface AcademyExamAttempt { attempt_id: string; questions: AcademyExamQuestion[]; selection_mode: string; duration_minutes: number; expires_at: string | null; }
/** Keys are UUID question identifiers; values retain the question's JSON answer representation. */
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
