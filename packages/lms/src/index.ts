import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
type R<E extends T.LmsEntity, C, U> = RestResource<E, C, U, T.LmsListResponse<E>, T.LmsResponse<E>>;
import { LmsOperations } from "./operations.js";

function classroomSessionRoomId(reference: T.ClassroomSessionRoomReference): string | null {
    return typeof reference === "string" ? reference : reference.session_room_id;
}

function sessionUiUrl(path: string, baseUrl?: string): string {
    if (!baseUrl) return path;
    try { return new URL(path, baseUrl).toString(); }
    catch { return `${baseUrl.replace(/\/$/, "")}${path}`; }
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
    readonly courses: R<T.Course, T.CreateCourseInput, T.UpdateCourseInput> = new RestResource(this.client, "/api/v1/courses", { supported: ["list", "show", "create", "update"] });
    readonly courseCategories: R<T.CourseCategory, T.CreateCourseCategoryInput, T.UpdateCourseCategoryInput> = new RestResource(this.client, "/api/v1/courses/categories", { supported: ["list", "show", "create", "update"] });
    readonly videoSections: R<T.VideoSection, T.CreateVideoSectionInput, T.UpdateVideoSectionInput> = new RestResource(this.client, "/api/v1/courses/video-sections", { supported: ["list", "show", "create", "update"] });
    readonly classrooms: R<T.Classroom, T.CreateClassroomInput, T.UpdateClassroomInput> = new RestResource(this.client, "/api/v1/classrooms", { supported: ["list", "show", "create", "update"] });
    readonly classroomSessions: RestResource<T.ClassroomSession, T.CreateClassroomSessionInput, T.UpdateClassroomSessionInput, T.ClassroomSessionPageResponse, T.LmsResponse<T.ClassroomSession>> = new RestResource(this.client, "/api/v1/classrooms/sessions", { supported: ["list", "show", "create", "update"] });
    readonly exams: R<T.Exam, T.CreateExamInput, T.UpdateExamInput> = new RestResource(this.client, "/api/v1/exams", { supported: ["list", "show", "create", "update"] });
    readonly examQuestions: R<T.ExamQuestion, T.CreateExamQuestionInput, T.UpdateExamQuestionInput> = new RestResource(this.client, "/api/v1/exams/questions", { supported: ["list", "show", "create", "update", "delete"] });
    readonly examSessions: R<T.ExamSession, T.CreateExamSessionInput, T.UpdateExamSessionInput> = new RestResource(this.client, "/api/v1/exams/sessions", { supported: ["list", "show", "create", "update"] });
    readonly homeworks: R<T.Homework, T.CreateHomeworkInput, T.UpdateHomeworkInput> = new RestResource(this.client, "/api/v1/homeworks", { supported: ["list", "show", "create", "update"] });
    readonly homeworkQuestions: R<T.HomeworkQuestion, T.CreateHomeworkQuestionInput, T.UpdateHomeworkQuestionInput> = new RestResource(this.client, "/api/v1/homeworks/questions", { supported: ["list", "show", "create", "update"] });
    readonly certificates: R<T.Certificate, T.CreateCertificateInput, T.UpdateCertificateInput> = new RestResource(this.client, "/api/v1/certificates", { supported: ["list", "show", "create", "update"] });
    readonly events: R<T.Event, T.CreateEventInput, T.UpdateEventInput> = new RestResource(this.client, "/api/v1/events", { supported: ["list", "show", "create", "update"] });
    readonly interactiveContent: R<T.InteractiveContent, T.CreateInteractiveContentInput, T.UpdateInteractiveContentInput> = new RestResource(this.client, "/api/v1/interactive/content", { supported: ["list", "show", "create", "update"] });
    readonly grades: R<T.Grade, T.CreateGradeInput, T.UpdateGradeInput> = new RestResource(this.client, "/api/v1/config/grades", { supported: ["list", "show", "create", "update"] });
    readonly classroomTypes: R<T.ClassroomType, T.CreateClassroomTypeInput, T.UpdateClassroomTypeInput> = new RestResource(this.client, "/api/v1/config/classroom-types", { supported: ["list", "show", "create", "update"] });
    readonly textTemplates: R<T.TextTemplate, T.CreateTextTemplateInput, T.UpdateTextTemplateInput> = new RestResource(this.client, "/api/v1/config/text-templates", { supported: ["list", "show", "create", "update"] });
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
