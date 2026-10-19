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
  isManageAgentActionEvent,
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
  if (isManageAgentActionEvent(event)) {
    // Render and confirm mutations before calling executeServiceAction.
    console.log(event.data.arguments);
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
known operations. `executeServiceAction` exists for runtime actions proposed by the Manage
Agent, and callers must review destructive or privileged actions before execution.

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
