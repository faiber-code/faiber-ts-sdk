import { ServiceApi, type ApiEnvelope, type Identifier, type JsonObject, type QueryParams, type RequestOptions } from '@faiber/sdk-core';
import type { UserListResponse } from './types.js';

/** A current local-IDP read, not a delegated credential or a resource-policy decision. */
export interface EffectivePermissionSnapshot {
  user_id: string;
  service: string;
  active: boolean;
  /** Actual canonical/legacy names; native maximum 1024. Never use as a durable grant cache. */
  permissions: string[];
  /** Content digest excludes checked_at; equal revisions do not extend authority. */
  revision: string;
  checked_at: string;
}
export interface EffectivePermissionQuery extends QueryParams { service: string }
export type EffectivePermissionResponse = ApiEnvelope<EffectivePermissionSnapshot>;
/** Confirms the native database applied the requested current-membership filter. */
export interface ActiveRoleFilter extends JsonObject {
  version: 1;
  role_id: string | null;
  role_name: string | null;
  active_membership: true;
  user_status: 'enabled' | 'disabled' | null;
}
export interface ActiveRoleUsersQuery extends QueryParams {
  /** Exact, case-sensitive native name; not a localized role label. */
  role_name: string;
  /** If supplied, both keys must identify the same current role. */
  role_id?: string;
  search?: string;
  page?: number;
  /** Native clamp is 1..100; page is clamped to the last available page. */
  per_page?: number;
}
/** An older/unconfirmed server must not turn a scoped lookup into an all-user scan. */
export class IdpRoleFilterError extends Error {
  readonly code = 'idp_role_filter_unconfirmed';
  constructor() {
    super('IDP did not confirm the current active-role lookup');
    this.name = 'IdpRoleFilterError';
  }
}
export interface RoleGrantedPermission { id: string; name: string }
/** An atomic observation of one role. Revision is a conflict token, not authority. */
export interface RoleGrantSnapshot {
  role_id: string;
  role_name: string;
  revision: string;
  permission_ids: string[];
  permissions: RoleGrantedPermission[];
  stored_grant_count: number;
  max_delta_entries: number;
}
export interface RoleGrantDelta {
  /** Exact revision returned by the most recent reviewed snapshot. */
  expected_revision: string;
  /** Distinct active permission UUIDs; total add+remove must fit the snapshot limit. */
  add?: string[];
  /** Distinct permission UUIDs; cannot overlap add. Unrelated rows remain intact. */
  remove?: string[];
}
export type RoleGrantResponse = ApiEnvelope<RoleGrantSnapshot>;
export class IdpAuthorityApi extends ServiceApi {
  /** Read one role's active permissions and revision with current idp:acl:read.
   * @param roleId Native role UUID.
   * @param options Shared authentication, cancellation, timeout and request options.
   * @returns Full response with a private no-store snapshot, not a delegated credential.
   * @throws AxiosError for denied/unknown roles or unavailable/oversized snapshots.
   */
  roleGrants(roleId: Identifier, options?: RequestOptions) {
    return this.client.get<RoleGrantResponse>(`/api/v1/acl/roles/${encodeURIComponent(roleId)}/permission-grants`, undefined, options);
  }
  /** Apply a deliberate atomic delta with BOTH current idp:acl:read and idp:acl:update.
   * @param roleId Native role UUID. The built-in admin role is protected (406).
   * @param delta Reviewed revision and bounded distinct additions/removals.
   * @param options Shared authentication, cancellation, timeout and request options.
   * @returns Full response containing the committed snapshot; unrelated grants are preserved.
   * @throws AxiosError: stale revision409; invalid/unknown/inactive additions400; denied401;
   * protected role406; lock timeout/unavailable503. Re-read and explicitly rebase on409;
   * never automatically retry with a newer revision or replace the entire permission set.
   */
  changeRoleGrants(roleId: Identifier, delta: RoleGrantDelta, options?: RequestOptions<RoleGrantDelta>) {
    return this.client.patch<RoleGrantResponse, RoleGrantDelta>(`/api/v1/acl/roles/${encodeURIComponent(roleId)}/permission-grants`, delta, options);
  }

  /** Read current scoped grants with BOTH idp:user:read and idp:acl:read.
   * @param userId Native subject UUID, independently authorized by IDP.
   * @param query Stored lowercase IDP permission namespace, maximum64 characters (for example message for Messenger); do not infer it from a package alias.
   * @param options Cancellation, timeout, request IDs and authentication options.
   * @returns Complete Axios response, including no-store headers and current observation time.
   * @throws AxiosError on invalid input, denied access, unknown user or unavailable/oversized snapshot.
   */
  currentPermissions(userId: Identifier, query: EffectivePermissionQuery, options?: RequestOptions) {
    return this.client.get<EffectivePermissionResponse>(`/api/v1/acl/users/${encodeURIComponent(userId)}/effective-permissions`, query, options);
  }
  /** Find active current members with idp:user:read; does not require role/ACL administration.
   * @param query Exact native role name, optional matching role UUID/search and bounded page.
   * @param options Cancellation, timeout, request IDs and authentication options.
   * @returns Complete Axios response after checking native filter acknowledgement and current returned membership.
   * @throws IdpRoleFilterError on an unconfirmed/unsupported filter or inconsistent returned member.
   * @throws AxiosError on invalid input, denied access or unavailable IDP. No unfiltered fallback.
   */
  async activeRoleUsers(query: ActiveRoleUsersQuery, options?: RequestOptions) {
    const response = await this.client.get<UserListResponse>('/api/v1/users', { ...query, status: 'enabled' }, options);
    const data = response.data?.data;
    const marker = data?.role_filter;
    const roleId = query.role_id?.toLowerCase() ?? null;
    const validMembers = Array.isArray(data?.users) && data.users.length <= 100
      && data.users.every(user => user && typeof user.id === 'string' && user.status === 1
        && Array.isArray(user.roles)
        && user.roles.some(role => role?.name === query.role_name && (!roleId || role.id === roleId)));
    if (!marker || marker.version !== 1 || marker.role_name !== query.role_name
      || marker.role_id !== roleId || marker.active_membership !== true || marker.user_status !== 'enabled' || !validMembers) {
      throw new IdpRoleFilterError();
    }
    return response;
  }
}
