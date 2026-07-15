import { RestResource, ServiceApi, type Identifier, type QueryParams, type RequestOptions } from "@faiber/sdk-core";
import type * as T from "./types.js";
type R<E extends T.LmsEntity, C, U> = RestResource<E, C, U, T.LmsListResponse<E>, T.LmsResponse<E>>;
export class LmsApi extends ServiceApi {
    readonly courses: R<T.Course, T.CreateCourseInput, T.UpdateCourseInput> = new RestResource(this.client, "/api/v1/courses");
    readonly courseCategories: R<T.CourseCategory, T.CreateCourseCategoryInput, T.UpdateCourseCategoryInput> = new RestResource(this.client, "/api/v1/courses/categories");
    readonly videoSections: R<T.VideoSection, T.CreateVideoSectionInput, T.UpdateVideoSectionInput> = new RestResource(this.client, "/api/v1/courses/video-sections");
    readonly classrooms: R<T.Classroom, T.CreateClassroomInput, T.UpdateClassroomInput> = new RestResource(this.client, "/api/v1/classrooms");
    readonly classroomSessions: R<T.ClassroomSession, T.CreateClassroomSessionInput, T.UpdateClassroomSessionInput> = new RestResource(this.client, "/api/v1/classrooms/sessions");
    readonly exams: R<T.Exam, T.CreateExamInput, T.UpdateExamInput> = new RestResource(this.client, "/api/v1/exams");
    readonly examQuestions: R<T.ExamQuestion, T.CreateExamQuestionInput, T.UpdateExamQuestionInput> = new RestResource(this.client, "/api/v1/exams/questions");
    readonly examSessions: R<T.ExamSession, T.CreateExamSessionInput, T.UpdateExamSessionInput> = new RestResource(this.client, "/api/v1/exams/sessions");
    readonly homeworks: R<T.Homework, T.CreateHomeworkInput, T.UpdateHomeworkInput> = new RestResource(this.client, "/api/v1/homeworks");
    readonly homeworkQuestions: R<T.HomeworkQuestion, T.CreateHomeworkQuestionInput, T.UpdateHomeworkQuestionInput> = new RestResource(this.client, "/api/v1/homeworks/questions");
    readonly certificates: R<T.Certificate, T.CreateCertificateInput, T.UpdateCertificateInput> = new RestResource(this.client, "/api/v1/certificates");
    readonly events: R<T.Event, T.CreateEventInput, T.UpdateEventInput> = new RestResource(this.client, "/api/v1/events");
    readonly interactiveContent: R<T.InteractiveContent, T.CreateInteractiveContentInput, T.UpdateInteractiveContentInput> = new RestResource(this.client, "/api/v1/interactive/content");
    readonly grades: R<T.Grade, T.CreateGradeInput, T.UpdateGradeInput> = new RestResource(this.client, "/api/v1/config/grades");
    readonly classroomTypes: R<T.ClassroomType, T.CreateClassroomTypeInput, T.UpdateClassroomTypeInput> = new RestResource(this.client, "/api/v1/config/classroom-types");
    readonly textTemplates: R<T.TextTemplate, T.CreateTextTemplateInput, T.UpdateTextTemplateInput> = new RestResource(this.client, "/api/v1/config/text-templates");
    dashboard(options?: RequestOptions) { return this.client.get<T.DashboardResponse>("/api/v1/dashboard", undefined, options); }
    courseSessions(id: Identifier, params?: QueryParams, options?: RequestOptions) { return this.client.get<T.CourseSessionsResponse>(`/api/v1/courses/${encodeURIComponent(id)}/sessions`, params, options); }
    addClassroomUser(id: Identifier, data: T.ClassroomUserInput, options?: RequestOptions<T.ClassroomUserInput>) { return this.client.post<T.ClassroomUserResponse, T.ClassroomUserInput>(`/api/v1/classrooms/${encodeURIComponent(id)}/users`, data, options); }
    report(kind: "teachers" | "students" | "classrooms", params?: QueryParams, options?: RequestOptions) { return this.client.get<T.LmsReportResponse>(`/api/v1/reports/${kind}`, params, options); }
}
export * from "./types.js";
export * from "@faiber/sdk-core";
