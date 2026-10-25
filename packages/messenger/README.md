# @faiber/faiber-messenger

Typed notification administration, recipient inboxes, channel groups, templates, delivery providers, mobile/Web Push registrations, and integration metadata.

```bash
npm install @faiber/faiber-messenger
```

```ts
import { FaiberClient, MemoryTokenProvider } from "@faiber/sdk-core";
import { MessengerApi } from "@faiber/faiber-messenger";

const tokens = new MemoryTokenProvider();
const api = new MessengerApi(new FaiberClient("messenger", {
  domains: { messenger: process.env.FAIBER_MESSENGER_URL! },
  tokenProvider: tokens,
  axios: { timeout: 15_000, withCredentials: true },
}));

const inbox = await api.myInboxPage({ "page[number]": 1, "page[size]": 20 });
const first = inbox.data.data.data[0];
if (first) await api.markMyNotificationRead(first.id);
```

Use a configured `TokenProvider` for Bearer authentication, or `withCredentials` with secure HttpOnly cookie sessions. Keep tokens in memory when possible. Calls share `FaiberClient`, including interceptors and token refresh. Self inbox operations require `notification:self:read` in the IDP `message` namespace (the backend also accepts its documented aliases) and a non-nil actor UUID. Administrative grants do not substitute for the explicit inbox permission check.

## Complete API

`api.operations` exposes all 47 mounted HTTP operations; input, query, response, path, method, and permission types are exported. The reviewed backend source is `c65ae75c6cbed3f07b13a58887e3bf4842f22d22`. Source review does not establish adoption by a deployed instance or native infrastructure acceptance.

| Capability | Operations |
|---|---:|
| Channel groups and subscriptions | 6 |
| Dashboard inventory counts | 1 |
| Integration metadata | 3 |
| Notification administration, recipient inbox and realtime | 10 |
| Durable recipient stream/count | 2 |
| Mobile push registrations | 2 |
| Provider services and readiness | 7 |
| Templates and channel-specific contents | 8 |
| Web Push | 5 |
| Health and raw OpenAPI | 3 |

The mounted OpenAPI handler's annotation list is incomplete. Use named SDK operations for the full route inventory.

## Administration and queueing

Channel groups use numeric IDs and `{name}`. Templates use `{name, fa_name, params?, channel_id?}`; content uses `{channel, text, options?}`. Content channels are `sms`, `sms-otp`, `email`, or `push_notification`. Templates, channel groups, and provider lists return unpaginated arrays inside `status/message/data`.

```ts
const template = await api.templates.create({
  name: "welcome", fa_name: "Welcome", params: ["name"],
});
await api.createTemplateContent(template.data.data.id, {
  channel: "email", text: "Welcome {{name}}",
});
const queued = await api.send({
  template_id: template.data.data.id,
  channel: "email",
  recipients: ["learner@example.test"],
  params: { name: "Learner" },
});
console.log(queued.data.data.notification_ids);
```

The example requires the appropriate template administration grants and deployment service authority for dispatch. A nonempty `recipients` array takes precedence over the single `recipient`. Sending and `api.notifications.create` return HTTP 200 with `{notification_ids}`, rather than an administrative notification record. `scheduled_at` schedules dispatch; `options.correlation_id` enables native update/reuse behavior. Queue acceptance does not prove provider delivery.

Template patch `channel_id: null` clears the group; omission preserves it. Null template name/fa_name/params and content text/options preserve stored values. Channel rename requires a nonempty trimmed name. Template/channel deletes soft-delete and return 404 if absent; provider deletes are idempotent hard deletes. All three return HTTP 200 with `data: {}`.

Provider service input uses `{name, provider, channel, options, priority?}` with lowercase provider names `smtp`, `ghasedak`, `armaghan`, `pusher`, or `firebase`. Options are provider-specific dynamic JSON encrypted by the backend; every provider read/create/update response returns `options: null`. Omitted/null patch options preserves credentials. Priority is a signed 16-bit integer. Setup reports serialize provider enum labels as `Smtp`, `Ghasedak`, `Armaghan`, `Pusher`, or `Firebase`.

Administrative notification reads include provider diagnostics and routing fields. Their list uses `{ "page[number]": 2, "page[size]": 30, recipient?: "user-id" }` with metadata nested in `response.data.data.meta`. Defaults are page 1/size 20; size clamps to 1..100, and page clamps to at least 1. Records sort by updated time then ID descending. `markAllNotificationsRead({recipient})` requires a nonempty recipient; its result is `{updated}`.

## Personal inbox state

Use `myInboxPage({important:true})` for a separately paginated pinned section and `important:false` for the rest. `setMyNotificationState(id,{important:true})` changes only that recipient's importance. `{read:false}` restores unread state; `{read:true}` marks it read. Either field can be updated independently or together. The existing `markMyNotificationRead(id)` remains compatible. Missing or deleted records and records belonging to another recipient return 404.

## Recipient delivery

`myInboxPage` and the compatible `myInbox({params})` return reduced recipient records. Nullable title, description, path, destination, work_item_id and event fields are always present. `description` is recipient message copy. Provider diagnostics, raw recipient routing, params and provider options are excluded. Destination is native dynamic JSON: validate a recognized shape before navigating.

Initialize a cursor with `api.delivery.events()` **before** loading the inbox snapshot, then resume with `events({cursor})`. Each page contains at most 100 events, a cursor and `has_more`. Omitted `wait_seconds` waits up to 25 seconds. Both convenience and canonical event calls default to a 35-second transport timeout; explicit options override it. An expired/future cursor returns 410 and requires a fresh snapshot; a negative cursor returns 400. Durable events include `cursor` and `event_id`; historical malformed notification IDs/timestamps may be null. The legacy socket base payload has no durable cursor.

`api.delivery.unreadCount()` returns the authoritative recipient notification count, separate from chat unread messages. `registerDevice({application_id, installation_id, platform, token, locale})` registers an Android/iOS installation. Reuse its non-nil installation UUID when tokens rotate and revoke before logout. Tokens must be 20..4096 characters and locale at most 32; each application permits ten devices per user. Unknown registration fields reject. Account switching can transfer an installation/token to the current actor.

Web Push canonical operations expose availability, registration/removal, actual test queueing, and delivery status. Request browser permission from a user action; pass the browser endpoint and URL-safe unpadded base64 keys. Endpoints must use an approved FCM, Mozilla, or Apple HTTPS host on port 443. A test can queue only for the current actor's subscription, at most once per minute (429 otherwise). `provider_status` is nullable and does not prove display or reading. Unsubscribe and mobile revoke return successful removal flags even for absent or other-user IDs. Background delivery requires configured providers and OS/browser permission. Reconcile inbox state after resume, reconnect, or account change.

Realtime configuration uses `notificationRealtimeConfig`; `notificationRealtimeAuth` returns raw `{auth}` for the current recipient's exact private channel. Use `subscribeRealtime` from `@faiber/sdk-core`; reload persisted inbox records on reconnect and close subscriptions on logout. Keep Sockudo secrets server-side. See the [core subscription example](https://github.com/faiber-code/faiber-ts-sdk/tree/main/packages/core#sockudo-realtime-subscriptions).

## Authority, readiness, and errors

Administrative route grants appear in operation JSDoc. Dispatch, explicit user/channel subscription, and Flow integration metadata have no handler permission macro; their actual access depends on gateway/deployment policy. The SDK forwards configured credentials for these calls too. Recipient operations derive their own actor and do not accept arbitrary recipients. Native administration repositories do not establish tenant isolation through a tenant query field.

`serviceSetupCheckPost()` requires `admin:service:read`. It sends no notification, but can contact SMTP/Ghasedak credential and template APIs. Its `{configured, providerVerified, channels, providers, checkedAt}` report describes readiness separately from HTTP success. Server-only `serviceReadinessPost({headers:{"x-website-otp-token": token}})` uses a deployment secret and returns raw `{ready}`; missing token configuration is 503 and a wrong token is 401. Never put this secret in browser code.

All methods return full Axios responses, preserving status, headers and request IDs. Pass ordinary Axios options, including `signal`, `timeout`, headers and adapters, as the final argument. Axios errors retain backend status/body. Native application errors are `{error: string}`; extractor errors may have a different body. Malformed query/path input is rejected, protected calls can return 401/403, absent scoped rows return 404, registration conflicts 409, and unavailable delivery storage/configuration 503.

```ts
const controller = new AbortController();
const pending = api.myInboxPage(undefined, { signal: controller.signal, timeout: 5_000 });
controller.abort();
try { await pending; } catch (error) {
  // Handle Axios cancellation or inspect response.status for service failures.
}
```

Use [`@faiber/faiber-ts-sdk`](https://www.npmjs.com/package/@faiber/faiber-ts-sdk) for multiple Faiber services under one configuration.
