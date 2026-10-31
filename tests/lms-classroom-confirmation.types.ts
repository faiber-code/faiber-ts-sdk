import type { LmsService } from "../packages/sdk/dist/index.js";
import type { ClassroomUpdateClassroomPatchInput, UpdateClassroomInput } from "../packages/lms/dist/index.js";
const input: ClassroomUpdateClassroomPatchInput = { course_id: "destination", confirm_session_changes: true, confirm_recording_reset: true };
const facade: LmsService.UpdateClassroomInput = input;
const resource: UpdateClassroomInput = facade;
void resource;
const invalid: ClassroomUpdateClassroomPatchInput = {
  // @ts-expect-error Consent must be an explicit boolean, not a string.
  confirm_session_changes: "true",
};
void invalid;
