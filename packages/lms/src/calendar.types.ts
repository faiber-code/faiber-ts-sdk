import type { ApiEnvelope } from "@faiber/sdk-core";

/** Calendar delivery category, independent of lifecycle/status. Unknown configured types are never dropped. */
export type CalendarSessionCategory = "online" | "in_person" | "makeup" | "interactive" | "supplementary" | "unknown";
export type CalendarLocalizedName = string | Record<string, string>;

/** Display identity only; no separate Profile permission or request is needed. */
export interface CalendarProfileSummary {
  user_id: string;
  short_id: string | null;
  first_name: CalendarLocalizedName | null;
  last_name: CalendarLocalizedName | null;
}
export interface CalendarSessionType {
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

/** Supply one local date OR a half-open range of 1–7 complete local days, never both. */
export type CalendarDateSelection = {
  date: string;
  from?: never;
  to?: never;
} | {
  date?: never;
  from: string;
  to: string;
};

export interface CalendarWireFilters {
  /** Required IANA name, e.g. Asia/Tehran. */
  timezone: string;
  /** Comma-separated UUIDs; OR within this filter; matches session teacher with classroom fallback. */
  teacher_ids?: string;
  classroom_id?: string;
  /** Comma-separated CalendarSessionCategory values; independent of lifecycle. */
  session_types?: string;
  /** Comma-separated configured session type UUIDs; AND with session_types when both are supplied. */
  session_type_ids?: string;
}
/** Exact wire query for operations.classroomCalendarGet. Pagination is unsupported. */
export type ClassroomCalendarQuery = CalendarDateSelection & CalendarWireFilters;

export interface CalendarRequestFilters {
  timezone: string;
  teacher_ids?: readonly string[];
  classroom_id?: string;
  session_types?: readonly CalendarSessionCategory[];
  session_type_ids?: readonly string[];
}
/** Ergonomic request for lms.classroomCalendar; arrays are serialized to the backend's CSV filters. */
export type ClassroomCalendarRequest = CalendarDateSelection & CalendarRequestFilters;

export interface ClassroomCalendarSession {
  id: string;
  title: string;
  classroom_id: string;
  classroom_name: string;
  course_id: string;
  course_name: string;
  course_session_id: string | null;
  course_session_type_id: string | null;
  session_type: CalendarSessionType | null;
  category: CalendarSessionCategory;
  delivery_mode: CalendarSessionCategory;
  is_makeup: boolean;
  session_number: number | null;
  /** RFC3339 instant; always dated. Undated supplementary records are excluded. */
  starts_at: string;
  ends_at: string | null;
  duration_minutes: number | null;
  teacher_user_id: string | null;
  teacher_profile: CalendarProfileSummary | null;
  support_user_id: string | null;
  support_profile: CalendarProfileSummary | null;
  /** Distinct selected IDs when restricted (including [] = 0); otherwise classroom enrollment count. */
  student_count: number;
  /** Distinct active/inactive/disabled/enrolled classroom members, excluding withdrawn/removed history. */
  classroom_student_count: number;
  /** Null is unconfigured; zero is a genuine configured value. */
  classroom_capacity: number | null;
  students_restricted: boolean;
  status: string;
  session_lifecycle_status: string | null;
  session_room_id: string | null;
  session_archive_ready: boolean;
  session_access_mode: "locked" | "scheduled" | "created" | "live" | "playback" | "playback_pending" | "recording" | "recording_pending" | "cancelled";
  locked: boolean;
  auto_unlock: boolean;
  auto_present: boolean;
  invited: boolean;
}
export interface CalendarSummary {
  session_count: number;
  classroom_count: number;
  teacher_count: number;
  /** Sum of session student counts, not unique people across the whole range. */
  student_seat_count: number;
  /** Sum of known duration_minutes; unknown durations contribute zero to this sum only. */
  duration_minutes: number;
  unknown_duration_count: number;
  archive_ready_count: number;
  status_counts: Record<string, number>;
  /** Missing lifecycle values are counted under "unknown". */
  lifecycle_counts: Record<string, number>;
  access_mode_counts: Record<string, number>;
}
export interface CalendarRange {
  from: string;
  to: string;
  timezone: string;
  local_from: string;
  /** Exclusive local end date. */
  local_to: string;
}
export interface CalendarTypeCount { category: CalendarSessionCategory; count: number }
export interface CalendarConfiguredTypeCount { course_session_type_id: string | null; session_type: CalendarSessionType | null; count: number }
export interface ClassroomCalendarData {
  range: CalendarRange;
  /** Complete authorized results, ordered by starts_at then id; no pagination or result cap. */
  sessions: ClassroomCalendarSession[];
  /** Metrics after all filters, including type filters. */
  summary: CalendarSummary;
  /** Date/teacher/classroom/visibility scoped, independent of BOTH category and configured-type filters. */
  total_before_type_filters: number;
  /** Always contains all five categories plus unknown, including zero counts. */
  type_counts: CalendarTypeCount[];
  /** Configured types present before type filtering, ordered by UUID; null groups untyped sessions. */
  configured_type_counts: CalendarConfiguredTypeCount[];
}
export type ClassroomCalendarResponse = ApiEnvelope<ClassroomCalendarData>;
