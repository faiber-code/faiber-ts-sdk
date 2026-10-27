import {
  ServiceApi,
  type ApiEnvelope,
  type RequestOptions,
} from "@faiber/sdk-core";

/** YAML-defined actions supported by dynamic target grants. */
export type VisibilityAction =
  | "profile:list"
  | "profile:read"
  | "profile:read_admin"
  | "profile:update"
  | "profile:update_status"
  | "profile:update_employee_type"
  | "profile:freemium_session_limit"
  | "profile:delete"
  | "profile:restore"
  | "profile:force_delete"
  | "idp:user:read"
  | "idp:user:update"
  | "idp:user:change_password"
  | "idp:user:delete"
  | "idp:user:logout"
  | "idp:user:assign_roles";
export type VisibilityScope = "self_only" | "roles" | "all";
export interface VisibilityGrant {
  action: VisibilityAction;
  scope: VisibilityScope;
  /** Stable IDP role UUIDs; required only for the roles scope. */
  target_role_ids: string[];
  /** Required for assign_roles. Only these role UUIDs may be assigned. */
  assignable_role_ids: string[];
}
export interface VisibilityRoleOption {
  id: string;
  name: string;
}
export interface VisibilityCatalog {
  roles: VisibilityRoleOption[];
  actions: VisibilityAction[];
}
export interface VisibilityRuleSet {
  role_id: string;
  revision: number;
  grants: VisibilityGrant[];
}
export interface SaveVisibilityRulesInput {
  revision: number;
  grants: VisibilityGrant[];
}
/** One target-role scope, separate from ordinary action permissions. */
export interface VisibilityRoleScope {
  role_id: string;
  revision: number;
  /** null: no limit; []: no targets; otherwise any of these active IDP roles. */
  target_role_ids: string[] | null;
}
export interface SaveVisibilityRoleScopeInput {
  revision: number;
  target_role_ids: string[] | null;
}
export type VisibilityRoleScopeResponse = ApiEnvelope<VisibilityRoleScope>;
export interface ResolveVisibilityInput {
  action: VisibilityAction;
  /** Route-specific old permission, selected by the enforcing service. */
  legacy_action?: string;
}
export interface EffectiveVisibilityScope {
  action: VisibilityAction;
  actor_id: string;
  all: boolean;
  /** True when no active actor role has a configured target scope. */
  legacy_unrestricted: boolean;
  user_ids: string[];
  assignable_role_ids: string[];
}
export type VisibilityCatalogResponse = ApiEnvelope<VisibilityCatalog>;
export type VisibilityRulesResponse = ApiEnvelope<VisibilityRuleSet>;
export type EffectiveVisibilityResponse = ApiEnvelope<EffectiveVisibilityScope>;

/** All methods inherit the configured Bearer provider or secure cookie transport. */
export class IdpVisibilityApi extends ServiceApi {
  /** List configurable YAML actions and role UUIDs. Requires idp:visibility:assign; rejects unauthorized callers. */
  catalog(options?: RequestOptions) {
    return this.client.get<VisibilityCatalogResponse>(
      "/api/v1/visibility/catalog",
      undefined,
      options,
    );
  }
  /** Read one role's rules, including its concurrency revision. Requires idp:visibility:assign; 404 for unknown roles. */
  rules(roleId: string, options?: RequestOptions) {
    return this.client.get<VisibilityRulesResponse>(
      `/api/v1/visibility/roles/${encodeURIComponent(roleId)}`,
      undefined,
      options,
    );
  }
  /** @deprecated Use saveRoleScope; action permissions remain separate. Replace the legacy scope document for a role. Requires idp:visibility:assign. A stale revision returns 409; invalid actions or targets return 422. */
  save(
    roleId: string,
    input: SaveVisibilityRulesInput,
    options?: RequestOptions<SaveVisibilityRulesInput>,
  ) {
    return this.client.put<VisibilityRulesResponse, SaveVisibilityRulesInput>(
      `/api/v1/visibility/roles/${encodeURIComponent(roleId)}`,
      input,
      options,
    );
  }
  /** Read the single target-role scope. Requires idp:visibility:assign. */
  roleScope(roleId: string, options?: RequestOptions) {
    return this.client.get<VisibilityRoleScopeResponse>(
      `/api/v1/visibility/roles/${encodeURIComponent(roleId)}/scope`, undefined, options,
    );
  }
  /** Replace the target-role scope without granting or revoking any action permission. */
  saveRoleScope(roleId: string, input: SaveVisibilityRoleScopeInput,
    options?: RequestOptions<SaveVisibilityRoleScopeInput>) {
    return this.client.put<VisibilityRoleScopeResponse, SaveVisibilityRoleScopeInput>(
      `/api/v1/visibility/roles/${encodeURIComponent(roleId)}/scope`, input, options,
    );
  }
  /** Resolve the signed-in caller's current target scope for one action. Returns 403 without a matching grant. Never accepts another actor's identity. */
  resolve(
    input: ResolveVisibilityInput,
    options?: RequestOptions<ResolveVisibilityInput>,
  ) {
    return this.client.post<
      EffectiveVisibilityResponse,
      ResolveVisibilityInput
    >("/api/v1/visibility/resolve", input, options);
  }
}
