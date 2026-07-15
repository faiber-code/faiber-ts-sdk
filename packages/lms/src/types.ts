import type { ApiEnvelope, JsonObject, ResourceListResponse, ResourceResponse } from "@faiber/sdk-core";
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
