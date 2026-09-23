import { RestResource, ServiceApi, type AxiosResponse, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
import type * as O from "./operations.types.js";
type R<E extends T.LmsEntity, C, U> = RestResource<E, C, U, T.LmsListResponse<E>, T.LmsResponse<E>>;
import { LmsOperations } from "./operations.js";

/** Exact server-side totals and the complete responses used to calculate them. */
export interface LmsStudentStatistics {
    counts: {
        classroom_count: number;
        homework_count: number;
        exam_count: number;
    };
    responses: {
        summary: AxiosResponse<O.ReportStudentSummaryGetResponse>;
        classrooms: AxiosResponse<O.ClassroomIndexClassroomGetResponse>;
        homeworkAssignments: AxiosResponse<O.HomeworkIndexAssignmentGetResponse>;
        examAttempts: AxiosResponse<O.ExamIndexAttemptGetResponse>;
    };
}

function classroomSessionRoomId(reference: T.ClassroomSessionRoomReference): string | null {
    return typeof reference === "string" ? reference : reference.session_room_id;
}

function sessionUiUrl(path: string, baseUrl?: string): string {
    if (!baseUrl) return path;
    try { return new URL(path, baseUrl).toString(); }
    catch { return `${baseUrl.replace(/\/$/, "")}${path}`; }
}

/** Builds the authenticated LMS exam page URL from an exam-attempt UUID. */
export function examPageUrl(attemptId: Identifier, lmsBaseUrl?: string): string {
    return sessionUiUrl(`/dashboard/exam/${encodeURIComponent(attemptId)}`, lmsBaseUrl);
}

/** Builds the public certificate verification page URL from its public code. */
export function certificateViewUrl(code: Identifier, lmsBaseUrl?: string): string {
    return sessionUiUrl(`/certificate/${encodeURIComponent(code)}`, lmsBaseUrl);
}

/** Builds the public, generated certificate SVG URL from its public code. */
export function certificateImageUrl(code: Identifier, lmsBaseUrl?: string): string {
    return sessionUiUrl(`/api/v1/public/certificates/${encodeURIComponent(code)}/image.svg`, lmsBaseUrl);
}

/** Builds the Session UI URL for an LMS classroom session, or `null` before a room is provisioned. */
export function classroomSessionViewUrl(reference: T.ClassroomSessionRoomReference, sessionBaseUrl?: string): string | null {
    const roomId = classroomSessionRoomId(reference);
    return roomId ? sessionUiUrl(`/view/room/${encodeURIComponent(roomId)}`, sessionBaseUrl) : null;
}

/** Builds the Session recording UI URL for an LMS classroom session, or `null` before a room is provisioned. */
export function classroomSessionRecordingUrl(reference: T.ClassroomSessionRoomReference, sessionBaseUrl?: string): string | null {
    const roomId = classroomSessionRoomId(reference);
    return roomId ? sessionUiUrl(`/view/recording/${encodeURIComponent(roomId)}`, sessionBaseUrl) : null;
}

export class LmsApi extends ServiceApi {
    readonly operations = new LmsOperations(this.client);
    /** Reads AI performance-summary configuration. Requires `lms:config:read`. */
    aiSummarySettings(options?: RequestOptions) { return this.client.get<T.AiSummarySettingsResponse>("/api/v1/ai-summaries/settings", undefined, options); }
    /** Saves independently enabled student, teacher, and support summary settings. Requires `lms:config:update`. */
    updateAiSummarySettings(data: T.AiSummarySettingsInput, options?: RequestOptions<T.AiSummarySettingsInput>) { return this.client.put<T.AiSummarySettingsResponse, T.AiSummarySettingsInput>("/api/v1/ai-summaries/settings", data, options); }
    /** Lists cloud and worker language models available to the project's financial owner. */
    aiSummaryModels(options?: RequestOptions) { return this.client.get<T.AiSummaryModelsResponse>("/api/v1/ai-summaries/models", undefined, options); }
    /** Reads the latest authorized summary. Pass a child UUID after selecting a verified child in the parent app. This read never starts generation. */
    latestAiSummary(role: T.AiSummaryRole, userId?: Identifier, options?: RequestOptions) { return this.client.get<T.AiLatestSummaryResponse>("/api/v1/ai-summaries/latest", { role, ...(userId ? { user_id: String(userId) } : {}) }, options); }
    /** Queues an administrative summary refresh. Requires `lms:ai_summary:manage`. */
    refreshAiSummary(userId: Identifier, role: T.AiSummaryRole, options?: RequestOptions) { return this.client.post<T.AiRefreshSummaryResponse, Record<string, never>>(`/api/v1/ai-summaries/users/${encodeURIComponent(userId)}/${role}/refresh`, {}, options); }
    readonly courses: R<T.Course, T.CreateCourseInput, T.UpdateCourseInput> = new RestResource(this.client, "/api/v1/courses", { supported: ["list", "show", "create", "update"] });
    readonly courseCategories: R<T.CourseCategory, T.CreateCourseCategoryInput, T.UpdateCourseCategoryInput> = new RestResource(this.client, "/api/v1/courses/categories", { supported: ["list", "show", "create", "update"] });
    readonly videoSections: R<T.VideoSection, T.CreateVideoSectionInput, T.UpdateVideoSectionInput> = new RestResource(this.client, "/api/v1/courses/video-sections", { supported: ["list", "show", "create", "update"] });
    readonly classrooms: R<T.Classroom, T.CreateClassroomInput, T.UpdateClassroomInput> = new RestResource(this.client, "/api/v1/classrooms", { supported: ["list", "show", "create", "update", "delete"] });
    readonly classroomSessions: RestResource<T.ClassroomSession, T.CreateClassroomSessionInput, T.UpdateClassroomSessionInput, T.ClassroomSessionPageResponse, T.LmsResponse<T.ClassroomSession>> = new RestResource(this.client, "/api/v1/classrooms/sessions", { supported: ["list", "show", "create", "update"] });
    readonly exams: R<T.Exam, T.CreateExamInput, T.UpdateExamInput> = new RestResource(this.client, "/api/v1/exams", { supported: ["list", "show", "create", "update", "delete"] });
    /** Exam definitions, explicitly named as the exam-bank layer. */
    readonly examBanks: R<T.ExamBank, T.CreateExamInput, T.UpdateExamInput> = new RestResource(this.client, "/api/v1/exams", { supported: ["list", "show", "create", "update", "delete"] });
    readonly examQuestions: R<T.ExamQuestion, T.CreateExamQuestionInput, T.UpdateExamQuestionInput> = new RestResource(this.client, "/api/v1/exams/questions", { supported: ["list", "show", "create", "update", "delete"] });
    /** Items/questions contained by exam banks. Filter lists with `exam_id`. */
    readonly examBankItems: R<T.ExamBankItem, T.CreateExamQuestionInput, T.UpdateExamQuestionInput> = new RestResource(this.client, "/api/v1/exams/questions", { supported: ["list", "show", "create", "update", "delete"] });
    readonly examSessions: R<T.ExamSession, T.CreateExamSessionInput, T.UpdateExamSessionInput> = new RestResource(this.client, "/api/v1/exams/sessions", { supported: ["list", "show", "create", "update", "delete"] });
    readonly homeworks: R<T.Homework, T.CreateHomeworkInput, T.UpdateHomeworkInput> = new RestResource(this.client, "/api/v1/homeworks", { supported: ["list", "show", "create", "update", "delete"] });
    readonly homeworkBanks: R<T.HomeworkBank, T.CreateHomeworkBankInput, T.UpdateHomeworkBankInput> = new RestResource(this.client, "/api/v1/homework-banks", { supported: ["list", "show", "create", "update", "delete"] });
    readonly homeworkQuestions: R<T.HomeworkQuestion, T.CreateHomeworkQuestionInput, T.UpdateHomeworkQuestionInput> = new RestResource(this.client, "/api/v1/homeworks/questions", { supported: ["list", "show", "create", "update"] });
    readonly certificates: R<T.Certificate, T.CreateCertificateInput, T.UpdateCertificateInput> = new RestResource(this.client, "/api/v1/certificates", { supported: ["list", "show", "create", "update"] });
    readonly certificateTemplates: R<T.CertificateTemplate, T.CreateCertificateTemplateInput, T.UpdateCertificateTemplateInput> = new RestResource(this.client, "/api/v1/certificates/templates", { supported: ["list", "show", "create", "update"] });
    readonly events: R<T.Event, T.CreateEventInput, T.UpdateEventInput> = new RestResource(this.client, "/api/v1/events", { supported: ["list", "show", "create", "update"] });
    readonly interactiveContent: R<T.InteractiveContent, T.CreateInteractiveContentInput, T.UpdateInteractiveContentInput> = new RestResource(this.client, "/api/v1/interactive/content", { supported: ["list", "show", "create", "update"] });
    readonly grades: R<T.Grade, T.CreateGradeInput, T.UpdateGradeInput> = new RestResource(this.client, "/api/v1/config/grades", { supported: ["list", "show", "create", "update"] });
    readonly classroomTypes: R<T.ClassroomType, T.CreateClassroomTypeInput, T.UpdateClassroomTypeInput> = new RestResource(this.client, "/api/v1/config/classroom-types", { supported: ["list", "show", "create", "update"] });
    readonly textTemplates: R<T.TextTemplate, T.CreateTextTemplateInput, T.UpdateTextTemplateInput> = new RestResource(this.client, "/api/v1/config/text-templates", { supported: ["list", "show", "create", "update"] });
    /** Lists classrooms with relationship, role-assignment, status, course, and time filters. */
    listClassrooms(params?: O.ClassroomIndexClassroomGetQuery, options?: RequestOptions) { return this.operations.classroomIndexClassroomGet(params, options); }
    /** Reads one classroom with its course and teacher, consultant, and support profiles. */
    classroom(id: Identifier, options?: RequestOptions) { return this.operations.classroomShowClassroomGet(id, options); }
    /** Deletes one classroom. Requires `lms:classroom:delete`. */
    deleteClassroom(id: Identifier, options?: RequestOptions) { return this.operations.classroomDestroyClassroomDelete(id, options); }
    /** Lists classroom sessions, including course-session/type metadata and relationship filters. */
    listClassroomSessions(params?: O.ClassroomIndexSessionGetQuery, options?: RequestOptions) { return this.operations.classroomIndexSessionGet(params, options); }
    /** Lists homework definitions. Projects and todos are represented by filtered assignments. */
    listHomeworks(params?: O.HomeworkIndexHomeworkGetQuery, options?: RequestOptions) { return this.operations.homeworkIndexHomeworkGet(params, options); }
    /** Lists homework, todo, and project assignments with user, status, classroom, and time filters. */
    listAssignments(params?: O.HomeworkIndexAssignmentGetQuery, options?: RequestOptions) { return this.operations.homeworkIndexAssignmentGet(params, options); }
    /** Creates a delivery assignment from a reusable homework/project bank item. */
    createAssignment(data: O.HomeworkStoreAssignmentPostInput, options?: RequestOptions<O.HomeworkStoreAssignmentPostInput>) { return this.operations.homeworkStoreAssignmentPost(data, options); }
    /** Reads one homework/project assignment record. */
    assignment(id: Identifier, options?: RequestOptions) { return this.operations.homeworkShowAssignmentGet(id, options); }
    /** Updates assignment delivery, ownership, answer, score, or status fields. */
    updateAssignment(id: Identifier, data: O.HomeworkUpdateAssignmentPatchInput, options?: RequestOptions<O.HomeworkUpdateAssignmentPatchInput>) { return this.operations.homeworkUpdateAssignmentPatch(id, data, options); }
    /** Deletes an assignment record without deleting its reusable bank item. */
    deleteAssignment(id: Identifier, options?: RequestOptions) { return this.operations.homeworkDestroyAssignmentDelete(id, options); }
    /** Returns the questions/items belonging to one homework definition/bank. */
    homeworkBankItems(homeworkBankId: Identifier): R<T.HomeworkBankItem, O.HomeworkStoreBankHomeworkPostInput, O.HomeworkUpdateBankHomeworkPatchInput> {
        return new RestResource(this.client, `/api/v1/homework-banks/${encodeURIComponent(homeworkBankId)}/homeworks`, { supported: ["list", "show", "create", "update", "delete"] });
    }
    /** Lists exam-bank items/questions for one bank. */
    listExamBankItems(examBankId: Identifier, params?: O.ExamIndexQuestionGetQuery, options?: RequestOptions) { return this.operations.examIndexQuestionGet({ ...params, exam_id: String(examBankId) }, options); }
    /** Lists exam users/attempts. */
    listExamUsers(params?: O.ExamIndexAttemptGetQuery, options?: RequestOptions) { return this.operations.examIndexAttemptGet(params, options); }
    /** Reads one exam user/attempt. */
    examUser(id: Identifier, options?: RequestOptions) { return this.operations.examShowAttemptGet(id, options); }
    /** Updates scoring, deadline, extension, description, or status for an exam user/attempt. */
    updateExamUser(id: Identifier, data: O.ExamUpdateAttemptPatchInput, options?: RequestOptions<O.ExamUpdateAttemptPatchInput>) { return this.operations.examUpdateAttemptPatch(id, data, options); }
    /** Lists exams with course and relationship-aware time filtering. */
    listExams(params?: O.ExamIndexExamGetQuery, options?: RequestOptions) { return this.operations.examIndexExamGet(params, options); }
    /** Lists exam sessions with participant/staff relationship and time filters. */
    listExamSessions(params?: O.ExamIndexSessionGetQuery, options?: RequestOptions) { return this.operations.examIndexSessionGet(params, options); }
    /** Lists exam attempts; each returned attempt ID is suitable for examPageUrl. */
    listExamAttempts(params?: O.ExamIndexAttemptGetQuery, options?: RequestOptions) { return this.operations.examIndexAttemptGet(params, options); }
    /** Returns the access-checked report summary for one LMS user UUID. */
    studentSummary(userId: Identifier, params?: O.ReportStudentSummaryGetQuery, options?: RequestOptions) {
        return this.operations.reportStudentSummaryGet({ ...params, student_user_id: String(userId) }, options);
    }
    /**
     * Returns exact user-detail card counts without downloading and filtering global collections.
     *
     * Totals come from the backend's user-scoped pagination metadata. The complete Axios
     * responses are retained for callers that also need status, headers, request IDs, or
     * the student report summary.
     */
    async studentStatistics(userId: Identifier, options?: RequestOptions): Promise<LmsStudentStatistics> {
        const user_id = String(userId);
        const countPage = { page_number: 1, page_size: 1, user_id } as const;
        const [summary, classrooms, homeworkAssignments, examAttempts] = await Promise.all([
            this.studentSummary(userId, undefined, options),
            this.operations.classroomIndexClassroomGet(countPage, options),
            this.operations.homeworkIndexAssignmentGet(countPage, options),
            this.operations.examIndexAttemptGet(countPage, options),
        ]);
        return {
            counts: {
                // The report is enrollment-specific. The generic classroom list
                // is relationship-aware and can also include classes where the
                // same UUID is teacher/support, which inflates learner cards.
                classroom_count: summary.data.data.classroom_count,
                homework_count: homeworkAssignments.data.data.meta.total_items,
                exam_count: examAttempts.data.data.meta.total_items,
            },
            responses: { summary, classrooms, homeworkAssignments, examAttempts },
        };
    }
    /** Returns the canonical authenticated web page URL for an exam attempt. */
    examPageUrl(attemptId: Identifier) { return examPageUrl(attemptId, this.client.config.domains.lms); }
    /** Returns the canonical public certificate verification page URL. */
    certificateViewUrl(code: Identifier) { return certificateViewUrl(code, this.client.config.domains.lms); }
    /** Returns the canonical generated certificate SVG URL. */
    certificateImageUrl(code: Identifier) { return certificateImageUrl(code, this.client.config.domains.lms); }
    /**
     * Verifies a public, legacy, or verification code and returns certificate identity and result data.
     * This public endpoint does not require authentication; unknown codes return an Axios 404 error.
     */
    verifyCertificate(code: Identifier, options?: RequestOptions) { return this.operations.certificateVerifyCertificateGet(code, options); }
    /**
     * Generates or reads the cached SVG certificate document for a public, legacy, or verification code.
     * The returned Axios response data is the raw SVG string; cache state is available in response headers.
     */
    certificateSvg(code: Identifier, options?: RequestOptions) { return this.operations.certificateRenderCertificateImageGet(code, options); }
    dashboard(options?: RequestOptions) { return this.client.get<T.DashboardResponse>("/api/v1/dashboard", undefined, options); }
    /** Lists active classroom-session types in scheduler display order. */
    classroomSessionTypes(options?: RequestOptions) { return this.client.get<T.ClassroomSessionTypesResponse>("/api/v1/classrooms/session-types", undefined, options); }
    /** Lists classroom sessions scheduled for one local date, with lock, type, room, and profile metadata. */
    todayClassroomSessions(params?: T.TodayClassroomSessionListQuery, options?: RequestOptions) { return this.client.get<T.ClassroomSessionPageResponse>("/api/v1/classrooms/sessions/today", params, options); }
    /** Returns Session UI and recording URLs, using the configured Session domain when available. */
    classroomSessionLinks(reference: T.ClassroomSessionRoomReference, sessionBaseUrl = this.client.config.domains.session): T.ClassroomSessionLinks {
        return {
            room: classroomSessionViewUrl(reference, sessionBaseUrl),
            recording: classroomSessionRecordingUrl(reference, sessionBaseUrl),
        };
    }
    courseSessions(id: Identifier, params?: QueryParams, options?: RequestOptions) { return this.client.get<T.CourseSessionsResponse>(`/api/v1/courses/${encodeURIComponent(id)}/sessions`, params, options); }
    /** Returns one course session, including its configured external or DRM video source. */
    courseSession(courseId: Identifier, sessionId: Identifier, options?: RequestOptions) { return this.client.get<T.LmsResponse<T.CourseSession>>(`/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(sessionId)}`, undefined, options); }
    /** Creates a course session with an optional external or DRM video source. */
    createCourseSession(courseId: Identifier, data: T.CreateCourseSessionInput, options?: RequestOptions<T.CreateCourseSessionInput>) { return this.client.post<T.LmsResponse<T.CourseSession>, T.CreateCourseSessionInput>(`/api/v1/courses/${encodeURIComponent(courseId)}/sessions`, data, options); }
    /** Updates a course session and supports clearing or replacing its video source. */
    updateCourseSession(courseId: Identifier, sessionId: Identifier, data: T.UpdateCourseSessionInput, options?: RequestOptions<T.UpdateCourseSessionInput>) { return this.client.patch<T.LmsResponse<T.CourseSession>, T.UpdateCourseSessionInput>(`/api/v1/courses/${encodeURIComponent(courseId)}/sessions/${encodeURIComponent(sessionId)}`, data, options); }
    addClassroomUser(id: Identifier, data: T.ClassroomUserInput, options?: RequestOptions<T.ClassroomUserInput>) { return this.client.post<T.ClassroomUserResponse, T.ClassroomUserInput>(`/api/v1/classrooms/${encodeURIComponent(id)}/users`, data, options); }
    report(kind: "teachers" | "students" | "classrooms", params?: QueryParams, options?: RequestOptions) { return this.client.get<T.LmsReportResponse>(`/api/v1/reports/${kind}`, params, options); }
    /** Lists active learner academy categories for the authenticated IDP session. */
    academyCategories(options?: RequestOptions) { return this.client.get<T.AcademyCategoriesResponse>("/api/v1/academy/categories", undefined, options); }
    /** Returns classroom records for Office/Profile integration using canonical UUID identifiers. */
    batchClassrooms(data: O.IntegrationBatchClassroomsPostInput, options?: RequestOptions<O.IntegrationBatchClassroomsPostInput>) {
        return this.operations.integrationBatchClassroomsPost(data, options);
    }
    /** Resolves legacy numeric classroom references to the LMS UUID identifiers used by current services. */
    resolveLegacyClassroomIds(data: O.IntegrationResolveLegacyIdsPostInput, options?: RequestOptions<O.IntegrationResolveLegacyIdsPostInput>) {
        return this.operations.integrationResolveLegacyIdsPost(data, options);
    }
    /** Lists active academy courses and the current learner's enrollment progress. */
    academyCourses(params?: T.AcademyCatalogQuery, options?: RequestOptions) { return this.client.get<T.AcademyCoursesResponse>("/api/v1/academy/courses", params, options); }
    /** Returns ordered sessions and lock/completion state for one academy course. */
    academyCourse(courseId: Identifier, options?: RequestOptions) { return this.client.get<T.AcademyCourseResponse>(`/api/v1/academy/courses/${encodeURIComponent(courseId)}`, undefined, options); }
    /** Enrolls the authenticated learner; paid courses return `pending_payment`. */
    academyEnroll(courseId: Identifier, options?: RequestOptions) { return this.client.post<T.AcademyEnrollmentStartResponse, Record<string, never>>(`/api/v1/academy/courses/${encodeURIComponent(courseId)}/enroll`, {}, options); }
    /** Lists enrollments owned by the authenticated learner. */
    academyEnrollments(options?: RequestOptions) { return this.client.get<T.AcademyEnrollmentsResponse>("/api/v1/academy/enrollments", undefined, options); }
    /** Completes an unlocked non-exam session idempotently. */
    completeAcademySession(enrollmentId: Identifier, sessionId: Identifier, data: T.AcademyCompleteSessionInput, options?: RequestOptions<T.AcademyCompleteSessionInput>) { return this.client.post<T.AcademySessionCompletionResponse, T.AcademyCompleteSessionInput>(`/api/v1/academy/enrollments/${encodeURIComponent(enrollmentId)}/sessions/${encodeURIComponent(sessionId)}/complete`, data, options); }
    /** Starts an unlocked exam attempt without exposing correct answers. */
    startAcademyExam(enrollmentId: Identifier, examId: Identifier, options?: RequestOptions) { return this.client.post<T.AcademyExamAttemptResponse, Record<string, never>>(`/api/v1/academy/enrollments/${encodeURIComponent(enrollmentId)}/exams/${encodeURIComponent(examId)}/attempts`, {}, options); }
    /** Submits answers once and returns the server-calculated score and pass state. */
    submitAcademyExam(attemptId: Identifier, data: T.AcademySubmitExamInput, options?: RequestOptions<T.AcademySubmitExamInput>) { return this.client.post<T.AcademyExamResultResponse, T.AcademySubmitExamInput>(`/api/v1/academy/attempts/${encodeURIComponent(attemptId)}/submit`, data, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
