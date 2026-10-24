import { LmsApi, type ClassroomCalendarRequest, type ClassroomCalendarData, type ClassroomCalendarGetQuery } from '../packages/lms/src/index.js';
import type { AxiosResponse } from '@faiber/sdk-core';
import type { ClassroomCalendarResponse } from '../packages/lms/src/calendar.types.js';
declare const api: LmsApi;
const daily: ClassroomCalendarRequest = { date: '2026-10-25', timezone: 'Asia/Tehran', teacher_ids: ['id1','id2'], session_types: ['interactive','supplementary'] };
const weekly: ClassroomCalendarRequest = { from: '2026-10-25T00:00:00+03:30', to: '2026-11-01T00:00:00+03:30', timezone: 'Asia/Tehran' };
const wire: ClassroomCalendarGetQuery = { date: '2026-10-25', timezone: 'Asia/Tehran', teacher_ids: 'id1,id2' };
const response: Promise<AxiosResponse<ClassroomCalendarResponse>> = api.classroomCalendar(daily);
void api.classroomCalendar(weekly); void api.operations.classroomCalendarGet(wire); void response;
declare const data: ClassroomCalendarData;
const count: number = data.summary.session_count;
const profile: string | null | undefined = data.sessions[0]?.teacher_profile?.short_id;
const locked: ClassroomCalendarData["sessions"][number]["session_access_mode"] = "locked";
void count; void profile; void locked;
// @ts-expect-error timezone is mandatory
api.classroomCalendar({ date: '2026-10-25' });
// @ts-expect-error date and range cannot be mixed
api.classroomCalendar({ ...weekly, date: '2026-10-25' });
// @ts-expect-error lifecycle state is not a calendar category
api.classroomCalendar({ ...daily, session_types: ['live'] });
// @ts-expect-error range needs to
api.classroomCalendar({ from: '2026-10-25T00:00:00Z', timezone: 'UTC' });
// @ts-expect-error pagination is not part of the calendar contract
api.classroomCalendar({ ...daily, page_size: 100 });
// @ts-expect-error wire query must be supplied
api.operations.classroomCalendarGet();
