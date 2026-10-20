/** Source-owned observer scope. Values come from the service configuration, never model output. */
export interface NativeSummaryAccessBinding {
  deployment_id: string;
  principal_user_id: string;
  native_scope_id: string | null;
  scope_kind: string;
}

/** Current operator approval. Disabling does not remove persistent object revocations. */
export interface NativeSummaryAccessPolicy extends NativeSummaryAccessBinding {
  id: string;
  enabled: boolean;
  revision: number;
  approved_by: string;
  approved_at: string;
  reason: string;
}

/** Current source state; background reconciliation can leave pending objects after a successful save. */
export interface NativeSummaryAccessStatus {
  binding: NativeSummaryAccessBinding;
  policy: NativeSummaryAccessPolicy | null;
  pending_objects: number;
  active_grants: number;
  revocations: number;
}

export interface NativeSummaryAccessResponse {
  status: "success";
  data: NativeSummaryAccessStatus;
}

export interface NativeSummaryPolicyUpdate {
  enabled: boolean;
  /** Exact current policy revision; zero creates the initial policy. Stale writes return 409. */
  expected_revision: number;
  /** Required after trimming, at most 1024 Unicode characters. */
  reason: string;
}

export interface NativeSummaryAccessRevoke {
  /** Non-nil UUID of an object authorized by the owning service's current scope. */
  object_id: string;
  reason: string;
}

export interface NativeSummaryAccessRestore {
  /** Required after trimming, at most 1024 Unicode characters. */
  reason: string;
}
