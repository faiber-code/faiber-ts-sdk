/** Optional metadata on a published workspace assistant contract. The service
 * reads this trusted configuration; browser message inputs cannot install rules.
 * Unmatched requests retain the assistant's full tools and mutation workflow. */
export interface WorkspaceReadPolicy {
  version: 1;
  /** At most 32 anchored, read-only intent patterns. */
  rules: WorkspaceReadRule[];
}
export interface WorkspaceReadRule {
  id: string;
  locale: string;
  /** Anchored regex, optionally containing a named `query` capture. */
  pattern: string;
  item_type: 'task' | 'note';
  current_user_only?: boolean;
  active_only?: boolean;
  /** Contents can bypass inference only for one unambiguous authorized result.
   * Model prefetches evidence but retains every normal assistant capability. */
  response: 'records' | 'contents' | 'model';
  /** Localized introduction; record values are inserted by the server. */
  introduction: string;
}
export interface WorkspaceReplyTiming {
  path: 'direct_read';
  elapsed_ms: number;
  model_calls: number;
  tool_calls: number;
}
