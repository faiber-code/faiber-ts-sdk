import { ServiceApi, type Identifier, type QueryParams, type RequestOptions } from '@faiber/sdk-core';
import { IdpOperations } from './operations.js';
import type { CreateRoleInput, CreateUserInput, IdpUserListQuery, UpdateRoleInput, UpdateUserInput } from './types.js';

/** Managed identity CRUD. Uses native page/per_page filters and native deletion envelopes. */
export class IdpUserResource extends ServiceApi {
  private get operations() { return new IdpOperations(this.client); }
  /** List users with idp:user:read; page defaults to 1, per_page to 20 and clamps to 1–100.
   * @param params Native search/status/current-role filters and pagination.
   * @param options Authentication, cancellation and Axios options.
   * @returns Full response with users, total, page, per_page and optional filter acknowledgement.
   * @throws AxiosError for denied permission, invalid filters or query failures.
   */
  list(params?: IdpUserListQuery, options?: RequestOptions) { return this.operations.userUsersIndexGet(params, options); }
  /** Read one native user UUID with idp:user:read; returns the full user envelope or Axios 404. */
  show(id: Identifier, _params?: QueryParams, options?: RequestOptions) { return this.operations.userUserFindGet(id, options); }
  /** Create an identity with idp:user:create; requires an identifier, rejects duplicates (409), returns its full envelope. */
  create(data: CreateUserInput, options?: RequestOptions<CreateUserInput>) { return this.operations.userUserCreatePost(data, options); }
  /** Update identity fields with idp:user:update; returns the full user envelope; validation fails with 422. */
  update(id: Identifier, data: UpdateUserInput, options?: RequestOptions<UpdateUserInput>) { return this.operations.userUserUpdatePatch(id, data, options); }
  /** PUT identity fields with idp:user:update; uses the same backend update semantics as PATCH. */
  replace(id: Identifier, data: UpdateUserInput, options?: RequestOptions<UpdateUserInput>) { return this.operations.userUserUpdatePut(id, data, options); }
  /** Delete with idp:user:delete; self-deletion returns 406; response contains data.user rather than a deletion flag. */
  delete(id: Identifier, options?: RequestOptions) { return this.operations.userUserDeleteDelete(id, options); }
}
/** Local role CRUD. Deletion returns data.id/name; no generic deletion flag is fabricated. */
export class IdpRoleResource extends ServiceApi {
  private get operations() { return new IdpOperations(this.client); }
  /** List local roles with idp:acl:read; returns the complete role-list response or Axios authorization failure. */
  list(_params?: QueryParams, options?: RequestOptions) { return this.operations.aclRolesIndexGet(options); }
  /** Read a role and its permissions with idp:acl:read; unknown UUIDs return Axios 404. */
  show(id: Identifier, _params?: QueryParams, options?: RequestOptions) { return this.operations.aclRolesShowGet(id, options); }
  /** Create a role with idp:acl:update; returns data.role and an initially empty permissions list. */
  create(data: CreateRoleInput, options?: RequestOptions<CreateRoleInput>) { return this.operations.aclRolesCreatePost(data, options); }
  /** Replace the complete permission set with idp:acl:update; protected admin role returns 406. Prefer reviewed deltas. */
  update(id: Identifier, data: UpdateRoleInput, options?: RequestOptions<UpdateRoleInput>) { return this.operations.aclRolesUpdatePatch(id, data, options); }
  /** PUT full permission replacement with idp:acl:update; protected admin role returns 406. */
  replace(id: Identifier, data: UpdateRoleInput, options?: RequestOptions<UpdateRoleInput>) { return this.operations.aclRolesUpdatePut(id, data, options); }
  /** Delete with idp:acl:update; built-in names return 406; success returns data.id/name and full Axios metadata. */
  delete(id: Identifier, options?: RequestOptions) { return this.operations.aclRolesDeleteDelete(id, options); }
}
