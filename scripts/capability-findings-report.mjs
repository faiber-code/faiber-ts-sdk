/** Explain outstanding gate requirements without misrepresenting them as proven defects.
 * This is reporting only: it neither drops findings nor changes release eligibility.
 */
export function summarizeCapabilityFindings(result, universe, services) {
  const categories = {
    semantic_review: [], protocol_review: [], source_provenance: [],
    consumer_verification: [], relationship_evidence: [], verification_evidence: [], declared_capability_gap: [], other: [],
  };
  for (const finding of result.failures) {
    const kind = /semantic review missing or stale/.test(finding) ? 'semantic_review'
      : /protocol boundary/.test(finding) ? 'protocol_review'
      : /required .* capability gap remains/.test(finding) ? 'declared_capability_gap'
      : /relationship/.test(finding) ? 'relationship_evidence'
      : /missing verification evidence|verification run/.test(finding) ? 'verification_evidence'
      : /SDK wire|Manage workflow|SDK package\/export|readable Manage/.test(finding) ? 'consumer_verification'
      : /source revision|source review|source lock|source references|compiler|provenance|contract drift/.test(finding) ? 'source_provenance'
      : 'other';
    categories[kind].push(finding);
  }
  const scopes = {};
  let consumerBoundariesNotEvaluated = 0;
  for (const [service, descriptor] of Object.entries(universe.services)) {
    const scope = descriptor.scope ?? 'unspecified';
    const row = scopes[scope] ??= {services: [], operations: 0, missingOrStaleSemanticReviews: 0};
    row.services.push(service);
    for (const operation of services[service]?.operations ?? []) {
      row.operations++;
      if (operation.review?.status !== 'verified' || operation.review.source_checksum !== operation.source_checksum) {
        row.missingOrStaleSemanticReviews++;
        // evaluateCapabilityGate continues before checking consumer evidence here.
        if (result.stage !== 'discovery') consumerBoundariesNotEvaluated++;
      }
    }
  }
  return {
    outstandingRequirementCount: result.failures.length,
    uniqueFindingCount: new Set(result.failures).size,
    duplicateFindingCount: result.failures.length - new Set(result.failures).size,
    confirmedDefectCount: null,
    confirmedDefectCountReason: 'The gate evaluates evidence and review completeness. Missing evidence is not proof of an SDK/backend mismatch. Confirmed defects require a separate source or runtime comparison.',
    categoryCounts: Object.fromEntries(Object.entries(categories).map(([key, values]) => [key, values.length])),
    scopes,
    consumerBoundariesNotEvaluated,
    limitations: [
      'The count is not a defect count, a remaining-work estimate, or a complete count of potential downstream failures.',
      'A missing/stale semantic review short-circuits the operation consumer checks; resolving it may expose further requirements.',
      'Platform and administration operations are shown separately. This report does not automatically exempt them or change the release gate.',
      'A conservative whole-source-tree checksum can invalidate reviews after unrelated changes; source equivalence must be inspected before restoring evidence.',
      'Declared capability-gap descriptions may be historical. Their current source and evidence must be checked independently.',
    ],
  };
}
