import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
type R<E extends T.LmsEntity, C, U> = RestResource<E, C, U, T.LmsListResponse<E>, T.LmsResponse<E>>;
import { LmsOperations } from "./operations.js";
export class LmsApi extends ServiceApi {
    readonly operations = new LmsOperations(this.client);
    readonly courses: R<T.Course, T.CreateCourseInput, T.UpdateCourseInput> = new RestResource(this.client, "/api/v1/courses", { supported: ["list", "show", "create", "update"] });
    readonly courseCategories: R<T.CourseCategory, T.CreateCourseCategoryInput, T.UpdateCourseCategoryInput> = new RestResource(this.client, "/api/v1/courses/categories", { supported: ["list", "show", "create", "update"] });
    readonly videoSections: R<T.VideoSection, T.CreateVideoSectionInput, T.UpdateVideoSectionInput> = new RestResource(this.client, "/api/v1/courses/video-sections", { supported: ["list", "show", "create", "update"] });
    readonly classrooms: R<T.Classroom, T.CreateClassroomInput, T.UpdateClassroomInput> = new RestResource(this.client, "/api/v1/classrooms", { supported: ["list", "show", "create", "update"] });
    readonly classroomSessions: R<T.ClassroomSession, T.CreateClassroomSessionInput, T.UpdateClassroomSessionInput> = new RestResource(this.client, "/api/v1/classrooms/sessions", { supported: ["list", "show", "create", "update"] });
    readonly exams: R<T.Exam, T.CreateExamInput, T.UpdateExamInput> = new RestResource(this.client, "/api/v1/exams", { supported: ["list", "show", "create", "update"] });
    readonly examQuestions: R<T.ExamQuestion, T.CreateExamQuestionInput, T.UpdateExamQuestionInput> = new RestResource(this.client, "/api/v1/exams/questions", { supported: ["list", "show", "create", "update"] });
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
    courseSessions(id: Identifier, params?: QueryParams, options?: RequestOptions) { return this.client.get<T.CourseSessionsResponse>(`/api/v1/courses/${encodeURIComponent(id)}/sessions`, params, options); }
    addClassroomUser(id: Identifier, data: T.ClassroomUserInput, options?: RequestOptions<T.ClassroomUserInput>) { return this.client.post<T.ClassroomUserResponse, T.ClassroomUserInput>(`/api/v1/classrooms/${encodeURIComponent(id)}/users`, data, options); }
    report(kind: "teachers" | "students" | "classrooms", params?: QueryParams, options?: RequestOptions) { return this.client.get<T.LmsReportResponse>(`/api/v1/reports/${kind}`, params, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
export * from "./operations.js";
export * from "./operations.types.js";
