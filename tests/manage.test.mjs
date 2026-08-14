import assert from "node:assert/strict";
import test from "node:test";
import { AxiosHeaders } from "axios";
import {
  FaiberSDK,
  domainsFromManageProxy,
  isManageAgentActionEvent,
  isManageAgentCompleteEvent,
  isManageAgentQuestionEvent,
  managedImageUrl,
  parseManageAgentEvents,
} from "../packages/sdk/dist/index.js";

function response(config, data = {}) {
  return { data, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
}

function requestBody(config) {
  return typeof config.data === "string" ? JSON.parse(config.data) : config.data;
}

test("Manage proxy domains preserve project scope for every typed service client", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config);
  };
  const sdk = new FaiberSDK({
    domains: domainsFromManageProxy("https://manage.test///"),
    authMode: "cookie",
    axios: { adapter },
  });

  await sdk.manage.me();
  await sdk.modules.operations.routerStatusRouteGet();
  await sdk.manage.executeServiceAction({
    service: "modules",
    method: "PATCH",
    path: "/api/v1/shop/products/product%2Fone?include=variants",
    body: { status: 1 },
  });

  assert.deepEqual(requests.map(item => [item.baseURL, item.method, item.url]), [
    ["https://manage.test", "get", "/api/v1/me"],
    ["https://manage.test/api/v1/proxy/modules", "get", "/"],
    ["https://manage.test", "patch", "/api/v1/proxy/modules/api/v1/shop/products/product%2Fone?include=variants"],
  ]);
  assert.ok(requests.every(item => item.withCredentials));
  assert.ok(requests.every(item => !item.headers.has("Authorization")));
  assert.throws(
    () => sdk.manage.executeServiceAction({ service: "modules", method: "GET", path: "https://evil.test/data" }),
    /absolute service path/,
  );
  assert.throws(
    () => sdk.manage.executeServiceAction({ service: "modules", method: "GET", path: "/api/v1/../secrets" }),
    /absolute service path/,
  );
});

test("Manage durable Agent APIs retain exact methods, encoded identifiers, bodies, and stream options", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, config.responseType === "stream" ? "event: complete\ndata: {\"message\":\"ok\"}\n\n" : {});
  };
  const sdk = new FaiberSDK({
    domains: { manage: "https://manage.test" },
    authMode: "cookie",
    axios: { adapter },
  });

  await sdk.manage.listAgentModels();
  await sdk.manage.createAgentThread({ title: "Inventory review" });
  await sdk.manage.listAgentThreads();
  await sdk.manage.getAgentMessages("thread/one");
  await sdk.manage.openAgentChatStream("thread/one", {
    message: "Summarize inventory",
    agent_slug: "manage",
    project_slug: "shop",
    model_ref: "cloud:zai:glm-4.7",
    client_message_id: "message-1",
    surface: { route: "/m/modules/products" },
    context: { selection: ["product-1"] },
  }, { adapter });
  await sdk.manage.cancelAgentChat("thread/one", { client_message_id: "message-1" });
  await sdk.manage.completeAgentAction("action/one", { ok: true, result: { count: 3 } });
  await sdk.manage.completeAgentQuestion("ask/one", { answer: "Use warehouse A" });
  await sdk.manage.deleteAgentThread("thread/one");

  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/agent/models"],
    ["post", "/api/v1/agent/chat/threads"],
    ["get", "/api/v1/agent/chat/threads"],
    ["get", "/api/v1/agent/ide/threads/thread%2Fone/messages"],
    ["post", "/api/v1/agent/ide/threads/thread%2Fone/chat/stream"],
    ["post", "/api/v1/agent/ide/threads/thread%2Fone/chat/cancel"],
    ["post", "/api/v1/agent/browser/actions/action%2Fone/complete"],
    ["post", "/api/v1/agent/ask/ask%2Fone/complete"],
    ["delete", "/api/v1/agent/ide/threads/thread%2Fone"],
  ]);
  assert.equal(requestBody(requests[1]).ide_mode, "code");
  assert.equal(requests[4].responseType, "stream");
  assert.equal(requestBody(requests[4]).model_ref, "cloud:zai:glm-4.7");
  assert.equal(requestBody(requests[5]).client_message_id, "message-1");
});

test("Manage SSE parser handles chunk boundaries, CRLF, multiline data, and typed guards", async () => {
  const encoder = new TextEncoder();
  const chunks = [
    "event: phase\r\ndata: planning\r\n\r\nevent: browser_",
    "action\ndata: {\"action_id\":\"a1\",\"name\":\"manage_sdk\",\n",
    "data: \"arguments\":{\"service\":\"modules\",\"method\":\"GET\",\"path\":\"/api/v1/shop/products\"}}\n\n",
    "event: ask_user\ndata: {\"ask_id\":\"q1\",\"question\":\"Which warehouse?\"}\n\n",
    "event: complete\ndata: {\"message\":\"Done\"}\n\n",
  ].map(value => encoder.encode(value));
  const body = new ReadableStream({
    start(controller) {
      for (const chunk of chunks) controller.enqueue(chunk);
      controller.close();
    },
  });
  const events = [];
  for await (const event of parseManageAgentEvents(body)) events.push(event);

  assert.deepEqual(events.map(item => item.event), ["phase", "browser_action", "ask_user", "complete"]);
  assert.equal(events[0].data, "planning");
  assert.ok(isManageAgentActionEvent(events[1]));
  assert.equal(events[1].data.arguments.service, "modules");
  assert.ok(isManageAgentQuestionEvent(events[2]));
  assert.ok(isManageAgentCompleteEvent(events[3]));
  assert.equal(events[3].data.message, "Done");
});

test("Manage image responses support both current envelopes", () => {
  assert.equal(managedImageUrl({ data: { url: "https://cdn.test/a.png" } }), "https://cdn.test/a.png");
  assert.equal(managedImageUrl({ url: "https://cdn.test/b.png" }), "https://cdn.test/b.png");
  assert.throws(() => managedImageUrl({}), /without a URL/);
});
