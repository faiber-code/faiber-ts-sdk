/** Select evidence inputs explicitly; never replace the fresh main baseline. */
export function capabilityInventoryRevision(mode, canonicalRevision, sdkRevision) {
  if (!['canonical','sdk'].includes(mode)) throw new Error(`Unknown capability inventory source: ${mode}`);
  const full = value => typeof value === 'string' && /^[a-f0-9]{40}$/.test(value);
  if (!full(canonicalRevision)) throw new Error('Fresh canonical source revision is required');
  if (mode === 'sdk' && sdkRevision !== undefined && !full(sdkRevision)) throw new Error('Invalid selected SDK source revision');
  return mode === 'sdk' && sdkRevision !== undefined ? sdkRevision : canonicalRevision;
}
/** A source review cannot survive a different runtime tree or selected commit. */
export function retainCapabilitySourceDecision(decision, revision, treeChecksum) {
  if (!decision) return null;
  if (decision.revision === revision && decision.source_tree_checksum === treeChecksum) return decision;
  return {...decision,status:'stale',stale_reason:'Inventory source revision or compiler input checksum changed'};
}
