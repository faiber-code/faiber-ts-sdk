import { axios, type ApiEnvelope, type AxiosHeaders, type RawAxiosHeaders, type RequestOptions } from '@faiber/sdk-core';

/** Every stored membership row is retained, including inactive and duplicate rows. */
export interface UserRoleMembershipRow {
  id: string;
  role_id: string;
  status: number;
  role_name: string | null;
  role_status: number | null;
  created_at: string;
  updated_at: string | null;
}
export interface UserRoleMembershipSnapshot {
  user_id: string;
  user_status: number;
  /** Opaque observed revision. Never replace it with a freshly fetched revision when saving stale edits. */
  revision: string;
  memberships: UserRoleMembershipRow[];
}
/** 1–128 unique non-nil local active role UUIDs. Other fields are rejected by IDP. */
export interface AddUserRoleMemberships { add_role_ids: string[]; }
export interface AddUserRoleMembershipsResult {
  snapshot: UserRoleMembershipSnapshot;
  added_role_ids: string[];
}
export type UserRoleMembershipSnapshotResponse = ApiEnvelope<UserRoleMembershipSnapshot>;
export type AddUserRoleMembershipsResponse = ApiEnvelope<AddUserRoleMembershipsResult>;

/** Bind intentional replacement to the exact snapshot reviewed by the caller. */
export function membershipRevisionOptions<T>(revision: string, options?: RequestOptions<T>): RequestOptions<T> {
  if (typeof revision !== 'string' || !/^[a-f0-9]{64}$/.test(revision)) {
    throw new TypeError('An observed 64-character membership revision is required');
  }
  const headers = new axios.AxiosHeaders(options?.headers as RawAxiosHeaders | AxiosHeaders | undefined);
  headers.set('If-Match', `"${revision}"`);
  return { ...options, headers };
}
