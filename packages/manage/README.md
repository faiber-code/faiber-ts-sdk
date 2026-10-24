# @faiber/faiber-manage

Typed browser and server client for the project-scoped Faiber Manage gateway, including
service proxy origins and the Manage Agent interaction protocol.

```bash
npm install @faiber/faiber-manage
```

```ts
import {
  FaiberClient,
  ManageApi,
  domainsFromManageProxy,
  isManageDurableActionEvent,
  parseManageAgentEvents,
} from "@faiber/faiber-manage";

const domains = domainsFromManageProxy(window.location.origin);
const manage = new ManageApi(new FaiberClient("manage", {
  domains,
  authMode: "cookie",
}));

const me = await manage.me();
const models = await manage.listAgentModels();
const thread = await manage.createAgentThread({ title: "Manage products" });
const stream = await manage.openAgentChatStream(thread.data.id, {
  message: "Show products with low inventory",
  agent_slug: "manage",
  project_slug: me.data.project.slug,
});

for await (const event of parseManageAgentEvents(stream.data)) {
  if (isManageDurableActionEvent(event)) {
    const review = await manage.getAgentAction(event.data.thread_id, event.data.action_id);
    // Render the persisted payload/schema; collect a decision before review/execute.
    console.log(review.data.action);
  }
}
```

`listAgentModels` returns the Agentic model catalog used by helper settings and chat
composition. Manage conversations belong to the signed session’s current project and
active user; personal Ask history and other projects are excluded. Current project
settings permission is required on every request, and creation/execution additionally
requires agent permission. Execution retains normal Agentic billing/model checks.
Durable chat management is available through `listAgentThreads`,
`getAgentMessages`, `cancelAgentChat`, and `deleteAgentThread`.

`domainsFromManageProxy` configures normal Faiber service clients through Manage's
project-scoped `/api/v1/proxy/{service}` boundary. Prefer those typed service clients for
known operations. `executeServiceAction` supports manual runtime service requests whose
schemas belong to the owning service. Durable agent actions always use the separate
review/execute protocol below; a browser event cannot authorize proxy execution.

All methods return complete Axios responses. Request options accept headers, timeouts,
`AbortSignal`, credentials, adapters, and interceptors through the shared client. Cookie
mode is recommended because Manage sessions are HttpOnly and project scoped. Stream
requests default to Axios's fetch adapter so browser `ReadableStream` responses remain
incremental; consumers may supply another streaming adapter.

Axios errors retain HTTP status, response headers, request IDs, and backend details. Agent
event parsing is transport-only: it never auto-executes an action. The complete facade is
available from [`@faiber/faiber-ts-sdk`](https://www.npmjs.com/package/@faiber/faiber-ts-sdk).

History is paged (default20, maximum100). Axios retains the `x-has-more` and
`x-next-before` response headers:

```ts
const page = await manage.listAgentThreadsPage({ limit: 20 });
const cursor = page.headers.get("x-next-before");
if (page.headers.get("x-has-more") === "true" && typeof cursor === "string") {
  const next = await manage.listAgentThreadsPage({ limit: 20, before: cursor });
  console.log(next.data);
}
```

`openAgentChatStream` accepts `context` preferences with `enabled_helpers`
(`seo`, `reportSummary`, `writing`, `smartForms`) and `locale` (`en` or `fa`).
`enabled_services` is optional for compatibility: Manage replaces it with current
server-authorized services. Agent and project are bound by the server; conflicting
values, assistant configuration, unknown preferences, and forged trusted-chat context
are rejected. Cross-project thread operations return404; invalid preferences return400.
These preferences never grant service, execution, model, or billing permissions.

## Durable Manage actions (canonical v1)

Check `getAgentActionCapabilities()` before enabling durable reviews. The supported
protocol is `durable-manage-action-v1` with `legacy_completion: false` and the
closed JSON-schema subset, including a concrete type paired with `null` in a
two-element `type` array. General unions and schema references remain unavailable.
A missing, failed or incompatible capability stays
unavailable; it never enables a legacy proxy/completion fallback.

`manage_action` SSE carries only `action_id`, `thread_id` and the protocol. Use
`isManageDurableActionEvent`, then `getAgentAction(threadId, actionId)` to load the
server-owned record. `listAgentActions` returns the latest 50 summaries, without
an invented cursor. Presentation suggestions are untrusted; `body_schema` comes
from the server catalog. No model form or TypeScript string is schema authority.

`reviewAgentAction` accepts edit/approve/reject. Edits require an explicit body
and keep the stored service/method/path. Decisions require a nonempty reason of
at most 2048 UTF-8 bytes. Send the captured `expected_version`, `payload_hash` and
a caller-owned non-nil `operation_id`. `executeAgentAction` accepts only those
three fields: the server executes its saved payload under current authorization.
The generated equivalents are on `manage.operations` with the same method names.

Preserve the entire request and UUID after an unknown network result. A 409 needs
a fresh GET and review, never automatic rebase or a new UUID. A cancelled HTTP
request does not cancel a claimed action. `outcome_unknown` is terminal here:
read the durable receipt; do not resend the target or use the old completion API.
Server expiry and current permissions remain authoritative. UUID/hash/version,
closed request fields, finite JSON and input bounds are checked before transport.

No signer, proof header helper, actor/project grant, internal claim/dispatch or
finish operation is exported. The legacy browser-event guard rejects
`manage_sdk`; other browser tools retain their existing event contract. General
manual service operations remain separate APIs and are never called as durable
action fallback.

Source: reviewed Manage `5ac22d1145c68693717ff4dedcaff74a74746197` and Agentic
`e6c2a00fc4418604a99bf84b365e0db13fc8f5e6`. Backend native authority/execution
proof, SDK wire validation, packed consumer checks and combined UI/runtime
acceptance are separate gates. This client does not imply all deployed catalog
entries contain supported schemas or authorize deployment/publication.

`me()` includes `runtime.status` and `runtime.reauth_required`; an unavailable authority
may return the recovery view with an empty service list. `health()` only checks Manage
liveness. `checkSetup()` inspects current enabled services and saves a signed setup report;
it does not send a payment or message. Each service result reports `connected`, `configured`,
`providerVerified` and `setupNeeded`, plus `verificationError` when present. Localized
`prerequisites` can be null when a newer report already won. `logout()` clears the session
cookie and follows the panel redirect by default; a server consumer must apply Set-Cookie
to its own cookie jar. SSO is a browser navigation to `/sso`, not a JSON SDK login API.

`getAgentMessagesPage(threadId, { limit: 10, before: timestamp })` supports the existing
message history query. Its exclusive cursor is RFC3339 and its limit is clamped to1..100;
it returns no pagination headers. Message `created_at` uses BSON extended JSON (`$date`),
while thread creation/list timestamps use RFC3339 strings. Chat supports ephemeral `images`
with `mime_type`, `data_base64` and optional `name`, plus `model_strategy`; backend validation
and model access remain authoritative. AbortSignal stops the HTTP stream request, and
`cancelAgentChat` requests cancellation of the chat run. Neither cancels a claimed durable
service action; reconcile that action through its durable receipt.
