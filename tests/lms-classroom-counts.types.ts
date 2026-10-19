import type { FaiberSDK } from '@faiber/faiber-ts-sdk';
import type { Classroom, LmsApi, ClassroomIndexClassroomGetResponseItem, ClassroomShowClassroomGetResponseData, ClassroomStoreClassroomPostResponseData, ClassroomUpdateClassroomPatchResponseData } from '@faiber/faiber-lms';

function countFields(row: Classroom | ClassroomIndexClassroomGetResponseItem | ClassroomShowClassroomGetResponseData | ClassroomStoreClassroomPostResponseData | ClassroomUpdateClassroomPatchResponseData) {
  const count: number = row.student_count;
  const capacity: number | null | undefined = row.capacity;
  // @ts-expect-error The count is numeric, not a string or untyped JSON field.
  const invalid: string = row.student_count;
  return [count, capacity, invalid];
}
async function consumer(api: LmsApi, sdk: FaiberSDK) {
  countFields((await api.listClassrooms()).data.data.data[0]!);
  countFields((await api.classrooms.list()).data.data.data[0]!);
  countFields((await api.operations.classroomIndexClassroomGet()).data.data.data[0]!);
  countFields((await sdk.lms.listClassrooms()).data.data.data[0]!);
}
void consumer;
