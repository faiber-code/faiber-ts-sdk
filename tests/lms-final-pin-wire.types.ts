import type { LmsApi, CreateCourseInput, CreateCourseCategoryInput, CreateExamInput, CreateExamQuestionInput, CreateExamSessionInput, CreateGradeInput, UpdateExamSessionInput, LearningCheck } from '@faiber/faiber-lms';
const course: CreateCourseInput = { name: 'Variables', status: 'active' };
const category: CreateCourseCategoryInput = { name: 'Computing', sort_order: 1, status: 'active' };
const exam: CreateExamInput = { name: 'Assessment', status: 'active' };
const question: CreateExamQuestionInput = { question_text: 'What is true?', question_type: 'text', sort_order: 1 };
const session: CreateExamSessionInput = { exam_id: 'uuid', status: 'active' };
const grade: CreateGradeInput = { name: 'Passed', sort_order: 1 };
const patch: UpdateExamSessionInput = { classroom_id: null, teacher_user_id: null, questions_count: null };
const check: LearningCheck = { id: 'boolean', variable: null, expected: true, label: { en: 'True', fa: 'درست' } };
// @ts-expect-error Category create requires its sort order and status.
const badCategory: CreateCourseCategoryInput = { name: 'Computing' };
// @ts-expect-error Course create requires name, not just a title.
const badCourse: CreateCourseInput = { title: 'Variables', status: 'active' };
// @ts-expect-error Rust PatchField<Uuid> accepts a UUID string or null, not an object.
const badPatch: UpdateExamSessionInput = { classroom_id: { value: 'uuid' } };
async function consumer(api: LmsApi) {
  const report = (await api.operations.reportCoursesGet()).data.data[0]!;
  const count: number = report.classroom_count;
  const courseId: string = report.course_id;
  const summary = (await api.operations.reportStudentSummaryGet()).data.data;
  const score: number | null | undefined = summary.courses?.[0]?.exams[0]?.score;
  const deleted = (await api.courses.delete('uuid')).data.data;
  const empty: Record<string, never> = deleted;
  const image: ArrayBuffer | Uint8Array = (await api.operations.mediaDownloadImageGet('uuid.png')).data;
  const profile = (await api.operations.profileRoutesShowGet('uuid')).data.data;
  const userId: string | undefined = profile?.user_id;
  return { count, courseId, score, empty, image, userId };
}
void [course, category, exam, question, session, grade, patch, check, badCategory, badCourse, badPatch, consumer];
