# Memory and conversation authority: inspected contracts

Status: source review in progress, not release certification. Canonical sources are the fetched revisions in `contracts/service-capabilities/remote-baseline.json`: Knowledge `70b8a21721dd34125b8f0e167e06da9ad3287223`, Chat `d495217f85d77270865a040c1328d70c620e6c9d`, Task `badfa399a8db6f19d68f63f14b1c67485c4d4903`. Dirty service checkouts remain separate evidence; none have been reset or overwritten.

## Knowledge subjects and policies

`platform::ensure_subject` keys subjects by organization, assistant and user UUID. `RecordTurn` accepts a user UUID, conversation UUID, user/assistant text, optional source message UUIDs and optional Profile snapshot/version/source/refreshed-at. It has no project subject discriminator. Ask can build on this personal scope after authorization and forgetting tests. Code, Design and Manage need an explicit project scope; replacing a user UUID with a project UUID would silently break ownership, Profile interpretation and forgetting.

Assistant policy owns memory enablement, retention, turn count and context budgets. A subject override can disable a policy-enabled memory mode but cannot enable a mode disabled in policy. Missing/inactive policies yield empty retrieval or an accepted response with `queued:false`; callers must inspect the body. A 202 response alone does not mean a turn was ingested.

The runtime turn endpoint requires `knowledge:runtime`. It inserts a durable memory outbox record, deduplicated by organization plus an assistant/user/message-derived key (or payload hash when no message ID exists). The two-second worker leases records and applies short memory plus rule-extracted atomic long facts. Long facts derive from user statements; assistant prose is explicitly nonauthoritative. Different active values of a fact key are contradicted/superseded. These are useful foundations, not evidence of project memory readiness.

The worker's visible selection admits only `pending`/`retry`, then marks records `processing` with a lease. A process crash during processing needs a real crash/restart test: the query does not select expired processing records. Receipt updates also need lease fencing. Retries back off to 900 seconds and eventually become dead letters; replay accepts retry/dead-letter rows with `knowledge:memory:write`.

Clear/forget checks the subject's user or the explicit memory-delete administrator permissions and organization. It marks stored entries forgotten and updates counts. This is not yet proof of durable forgetting: pending ingestion, outbox payloads, imports, derivations and replay need source-level tombstones/revisions and reconciliation. Short-memory retention physically deletes older rows; long-fact insertion deduplicates only active values. Replay after forgetting/pruning needs explicit tests rather than assumptions about the unique index.

Sources: `src/platform.rs`: RecordTurn (194), ensure_subject (962), record_turn (2262), persist_memory_turn (2324), process_memory_outbox_batch (2448), clear_memory_subject (2573), forget_memory (2614), replay_memory_outbox (2718). Line references identify the pinned source, not a dirty checkout.

## Current authorization boundary

Knowledge's RequestContext reads the organization header (nil fallback), IDP AuthContext and a configured service token. Exact configured service-token authentication grants `knowledge:*`; otherwise it uses AuthContext permissions or fallback forwarded headers. DEV also bypasses permission checks. Main mounts the IDP extractor for management/runtime routes. Task projection routes use their own separate shared-token authority and require a nonnil organization.

The gateway's header sanitization, token possession, dev fallback configuration and direct-service network exposure must be checked before certifying current user/project permissions. A caller-provided `user_id` or remembered role cannot grant membership. A broad trusted-service credential is not a substitute for reauthorizing the current resource/user in the owning service.

Sources: `src/context.rs`, `src/main.rs`, `src/task_projections.rs`. These observations describe the code; they do not assert that an untrusted client can bypass the deployed gateway.

## Chat and Knowledge delivery

Chat stores conversations, memberships, message UUIDs, sequence/reply relationships and source content. AI conversations hold an Agentic thread UUID. Chat orchestrates retrieval/context and invokes Agentic for execution and authoritative usage/billing. Existing context marks history as Agentic-thread-owned and avoids duplicate recent messages. Migration must reconcile those execution histories with Chat's durable conversation rather than creating a second conversation owner.

After storing an assistant reply, Chat directly calls Knowledge's turn endpoint and emits `assistant.memory.turn.requested`. The direct helper only checks transport errors, not HTTP errors or `queued` receipts. The durable event consumer, claim/ack/retry behavior and reconciliation still need complete tracing. Do not report ingestion merely because the assistant reply was saved or an HTTP connection succeeded.

Message editing checks conversation access and sender identity. Deletion permits the sender or owner/admin/moderator, replaces content with a deleted marker and sets deleted_at. The inspected edit/delete handlers emit no Knowledge correction/tombstone themselves. Source revisions and atomic correction/deletion events, retained payload removal, membership-revocation effects and replay suppression are required before memory cutover.

Sources: Chat `src/service.rs`: edit_message (1372), delete_message (1391), AI completion/turn event (1948–1975); `src/agentic.rs`: record_assistant_memory (275). Chat can improve durable source ownership and avoid duplicated prompt history, but latency/quality improvement remains unmeasured. Do not route unrelated Agentic project conversations through Chat without an explicit ownership decision.

## Task projection relationship

Task's `note_knowledge::search` checks each selected project using current Task policy, requests candidate note/version IDs, reloads each note to filter permission/version/project/type, requests only permitted passages, then reloads notes again before delivery. A newly saved directly selected note can fall back to current source text when indexing lags. Internal rankings and revoked IDs are excluded from the returned response.

Knowledge's separate `/internal/task-projections` adapter requires its dedicated token and nonnil workspace-as-organization header. It accepts monotonic note versions, rejects differing same-version content, blanks tombstoned text and excludes deleted rows. Passage requests select exact authorized note/version pairs. This corpus is separate from generic Knowledge bases and should remain untrusted evidence rather than agent instructions.

Task project IDs and Agentic project IDs are different domain references until an explicit mapping is verified. No relationship selector may assume identical UUID meaning. Search supports one project plus up to nine additional projects and a 2000-character query; Knowledge candidates cap at 100. Test cross-project denial, permission revocation between both checks, stale versions, delete/replay, service outage and directly selected fresh-note fallback before calling this workflow verified.

Sources: Task `src/note_knowledge.rs` (request, search, process_next), `src/policy.rs`, `src/repository.rs`; Knowledge `src/task_projections.rs` (authority, sync, candidates, passages). No runtime workflow certification has been recorded for this discovery yet.

## Early local Agentic source preservation (A0-P)

Local commits `6a9da3df` and `7fe2de869b15b122d3a90486f9ad940742da5fca` replace
destructive IDE compaction with bounded retained originals and full expected-source
manifests. Corrections, missing support, expiry and rewind invalidate derived summaries.
A durable thread epoch fences actual result producers after rewind; old missing-epoch
orphan results are withheld without recreating erased sources or breaking the HTTP history
route. Compaction/rewind require Mongo transactions and fail closed on standalone; normal
history reads remain available. Retention defaults are 30 days/8 MiB per thread, with
4,096 retained rows and 512 active capture rows as additional bounds.

The real replica/standalone Mongo suite passed 13 focused correctness tests; 160 IDE
regressions also passed. Evidence in the verification registry includes expanded code/vendor
and path-dependency digests, actual lock hashes and normalized hashed logs. The Agentic
lockfile already had unrelated changes and was preserved. Consequently these entries bind
the exact tested working digest and deliberately cannot certify the older canonical base
revision by reusing its Git hash. No model call, Knowledge publication or migration occurred.

Remaining hard gates include full source/scope erasure across worker/event/snapshot payloads,
current user/project permissions, complete model-request budgets, semantic fact identity,
Chat correction/delivery, Knowledge lease recovery and rollback. The exact local behavior
and limits are in `infera-agentic/docs/SOURCE_HISTORY_PRESERVATION.md`.

## Canonical Chat delivery trace: publication is not yet durable

A repository-wide trace at pinned Chat revision
`d495217f85d77270865a040c1328d70c620e6c9d` found creation of
`chat_outbox_events`, its pending index and insertion helpers, but no reader,
lease claimant, broker dispatcher or published_at updater for that table in the
tracked application. An external CDC/deployment consumer has not been reconciled;
the table and README's publication claim alone cannot establish delivery.

`insert_message` atomically commits a message, sequence increment, attachments
and `chat.message.created` outbox row. The separate memory path saves the assistant
message first, calls Knowledge directly, then inserts
`assistant.memory.turn.requested` on the database connection outside that message
transaction, before marking the AI turn completed. A crash between those steps can
leave a durable reply without its memory event. A successful direct HTTP response
can also be ignored if its body says queued:false. Conversely a successful ingest
followed by local event failure can leave an apparent failed turn after remote
side effects. These are source-derived failure windows, not observed runtime tests.

The startup `memory_settlement::run` worker does not deliver those events. It
processes `chat_memory_operations` and `chat_memory_settlements` for quota receipts
and leases, and calls product-plan settlement. Its durability cannot be borrowed
to certify Knowledge ingestion. The current dirty checkout additionally contains
summary-activity outbox work; that is separate uncommitted work and is preserved.

Before migration, establish one durable delivery contract with atomic source and
event writes, a fenced/reclaimable dispatcher, revisioned source keys, receipts
that distinguish accepted/queued/applied/withheld, retry reconciliation and source
correction/deletion tombstones. Verify crash points around both commits and remote
acceptance, duplicate deliveries, current membership revocation, pending forgetting
and outage recovery. Keep execution usage with Agentic and quota settlement with
its owning authority. This trace does not change model defaults or conversation
ownership, and no Chat source was modified.
