import {reconcileRuntimeInventory} from './runtime-inventory.mjs';
/** Evaluate evidence-backed completion. Counts and generated declarations cannot pass these gates. */
import { readFileSync, realpathSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, relative, isAbsolute } from 'node:path';

/** Recompute artifact integrity; never trust a manifest's self-asserted flag. */
export function verifyRunArtifacts(runs, evidenceRoot) {
  const verify = (artifactPath, checksum) => {
    try {
      if (typeof artifactPath !== 'string' || isAbsolute(artifactPath) || !/^[a-f0-9]{64}$/.test(checksum ?? '')) return false;
      const path = realpathSync(resolve(evidenceRoot, artifactPath));
      const rel = relative(realpathSync(evidenceRoot), path);
      if (!rel || rel === '..' || rel.startsWith('../')) return false;
      const bytes = readFileSync(path);
      return bytes.length > 0 && createHash('sha256').update(bytes).digest('hex') === checksum;
    } catch { return false; } // Missing/unreadable artifacts fail closed.
  };
  return Object.fromEntries(Object.entries(runs).map(([id, run]) => {
    const logVerified = verify(run.artifact_path, run.artifact_sha256);
    // When a run declares resolved dependency evidence, retain and verify the
    // actual lock bytes too. A restored checkout lock is not that artifact.
    const declaresLock = run.resolved_cargo_lock_sha256 !== undefined || run.resolved_cargo_lock_artifact_path !== undefined;
    const lockVerified = !declaresLock || verify(run.resolved_cargo_lock_artifact_path, run.resolved_cargo_lock_sha256);
    // Cross-service runs retain more than one lock/log. Validate every declared
    // supporting artifact instead of trusting only the aggregate report.
    const extrasVerified = run.additional_artifacts === undefined ||
      (Array.isArray(run.additional_artifacts) && run.additional_artifacts.every(artifact=>
        verify(artifact?.artifact_path, artifact?.sha256)));
    return [id, {...run, artifact_verified: logVerified && lockVerified && extrasVerified}];
  }));
}

export function evaluateCapabilityGate(universe, services, relationships = [], verificationRuns = {}, gaps = [], { stage = 'complete', runtimeInventory = null } = {}) {
  if (!['discovery', 'sdk', 'manage', 'complete'].includes(stage)) throw new Error(`Unknown capability gate stage: ${stage}`);
  const failures = universe.runtime_inventory ? reconcileRuntimeInventory(universe,runtimeInventory) : [];
  const downstreamGaps = [];
  const requireEvidence = (ids, context, requiredSource, operationId = null) => {
    if (!Array.isArray(ids) || !ids.length) { failures.push(`${context}: missing verification evidence`); return; }
    for (const id of ids) {
      const run = verificationRuns[id];
      if (!run || run.kind === 'characterization_not_certification' || run.artifact_verified !== true || run.status !== 'passed' || run.exit_code !== 0 || !run.command || !/^[a-f0-9]{64}$/.test(run.artifact_sha256??'') || !run.source_revisions || !(run.tests_executed > 0)) {
        failures.push(`${context}: ${id} is not a passing nonempty source-bound verification run`);
      } else if (requiredSource && run.source_revisions[requiredSource.service] !== requiredSource.revision) {
        failures.push(`${context}: ${id} verified a different service source revision`);
      } else if (operationId && (!Array.isArray(run.covered_operations?.[requiredSource.service]) || !run.covered_operations[requiredSource.service].includes(operationId))) {
        failures.push(`${context}: ${id} does not declare this exact operation in its source-bound coverage`);
      }
    }
  };
  for (const [service, descriptor] of Object.entries(universe.services)) {
    const data = services[service];
    if (!data) { failures.push(`${service}: missing discovery matrix`); continue; }
    if (Object.values(data.embedded_source_gaps ?? {}).some(gaps=>gaps.length)) failures.push(`${service}: compiler-embedded source inputs remain unresolved`);
    if (data.missing_meaning_sources?.length) failures.push(`${service}: missing source references`);
    if (!data.operations?.length) {
      failures.push(`${service}: registered routes have not been reconciled into a mounted operation inventory`);
      continue;
    }
    const source = data.source_decision;
    if (!source?.revision || !source.reason || source.status !== 'verified') failures.push(`${service}: canonical runtime/source revision is unverified`);
    const ids = new Set();
    for (const op of data.operations) {
      const context = `${service} ${op.id}`;
      if (ids.has(op.id)) failures.push(`${context}: duplicate operation`);
      ids.add(op.id);
      if (!op.handler) failures.push(`${context}: unresolved handler`);
      const review = op.review;
      if (review?.status !== 'verified' || review.source_checksum !== op.source_checksum) {
        failures.push(`${context}: semantic review missing or stale`); continue;
      }
      if (!review.meaning?.en || !review.meaning?.fa || !review.scope || !review.classification) failures.push(`${context}: missing business meaning/scope/classification`);
      for (const key of ['permissions', 'filters', 'inputs_outputs', 'lifecycle', 'relationships']) {
        if (!review[key] || review[key].status !== 'verified' || !review[key].source_refs?.length) failures.push(`${context}: ${key} is unverified`);
      }
      requireEvidence(review.test_evidence,context,{service,revision:source?.revision},op.id);
      // Source semantics can pass while the callable SDK or readable Manage
      // workflow is absent. Each later stage must prove its own exact boundary.
      const requireConsumerBoundary = (record, boundary, label) => {
        if (record?.status !== 'verified' || record.source_checksum !== op.source_checksum ||
            !Array.isArray(record.source_refs) || !record.source_refs.length) {
          failures.push(`${context}: ${label} review missing or stale`);
          return;
        }
        requireEvidence(record.test_evidence,`${context} ${label}`,{service,revision:source?.revision},op.id);
        for (const id of Array.isArray(record.test_evidence) ? record.test_evidence : []) {
          const run = verificationRuns[id];
          if (!Array.isArray(run?.boundaries) || !run.boundaries.includes(boundary) ||
              run.source_unchanged_during_run !== true || !/^[a-f0-9]{40}$/.test(run.sdk_revision ?? '')) {
            failures.push(`${context}: ${id} does not prove ${label} on a frozen SDK source`);
          }
        }
      };
      if (stage !== 'discovery') {
        requireConsumerBoundary(op.sdk,'typescript_sdk_http','SDK wire');
        if (!/^@faiber\/[a-z0-9-]+$/.test(op.sdk?.package ?? '') || typeof op.sdk?.exported_operation !== 'string' || !op.sdk.exported_operation.trim()) {
          failures.push(`${context}: missing concrete SDK package/export mapping`);
        }
      }
      if (stage === 'manage' || stage === 'complete') {
        requireConsumerBoundary(op.manage,'readable_manage_workflow','Manage workflow');
        if (typeof op.manage?.workflow !== 'string' || !op.manage.workflow.trim() || op.manage.raw_json_form !== false) {
          failures.push(`${context}: readable Manage workflow is absent or uses a raw JSON form`);
        }
        for (const id of Array.isArray(op.manage?.test_evidence) ? op.manage.test_evidence : []) {
          const revision = services.manage?.source_decision?.revision;
          if (!revision || verificationRuns[id]?.source_revisions?.manage !== revision) {
            failures.push(`${context}: ${id} does not bind the selected Manage source`);
          }
        }
      }
    }
    if (descriptor.scope === 'business' && (data.relationship_review?.status !== 'verified' || !data.relationship_review?.source_refs?.length)) failures.push(`${service}: cross-service relationship audit is unverified`);
    if (data.working_drift && Object.values(data.working_drift).some(rows=>rows.length) && !source?.drift_resolution) failures.push(`${service}: unresolved working/pinned contract drift`);
    if(data.router_reconciliation?.unresolved?.length || data.router_reconciliation?.duplicates?.length)failures.push(`${service}: unresolved mounted router graph`);
  }
  for (const edge of relationships) {
    if (!universe.services[edge.from_service] || !universe.services[edge.to_service]) failures.push(`${edge.id}: unknown relationship service`);
    if (edge.status !== 'verified' || !edge.source_refs?.length || !edge.lookup || !edge.scope || !edge.id_type || !edge.cardinality) failures.push(`${edge.id}: incomplete relationship meaning`);
    requireEvidence(edge.test_evidence,edge.id);
    for (const service of new Set([edge.from_service, edge.to_service])) {
      const revision = services[service]?.source_decision?.revision;
      if (revision) requireEvidence(edge.test_evidence,`${edge.id} ${service}`,{service,revision});
    }
  }
  for(const gap of gaps.filter(gap=>gap.required)){
    // Source discovery cannot depend on a future SDK/panel release. Backend gaps
    // still block discovery; deferred SDK/panel gaps remain visible and prevent
    // later completion. No stage may certify behavior using characterization runs.
    if ((stage === 'discovery' && ['sdk','manage'].includes(gap.owner)) || (stage === 'sdk' && gap.owner === 'manage') || (stage !== 'complete' && gap.implementation_phase === 'memory_after_sdk_manage')) {
      if (gap.status !== 'resolved') downstreamGaps.push(gap.id);
      continue;
    }
    if(gap.status!=='resolved')failures.push(`${gap.id}: required ${gap.owner} capability gap remains ${gap.status}`);
    else requireEvidence(gap.test_evidence,gap.id);
  }
  return { stage, status: failures.length ? 'blocked' : 'passed', failures, downstream_gaps: downstreamGaps };
}
