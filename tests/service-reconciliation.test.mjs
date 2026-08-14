import assert from "node:assert/strict";
import test from "node:test";
import { AxiosHeaders } from "axios";
import { FaiberSDK } from "../packages/sdk/dist/index.js";

function response(config, data = {}) {
  return { data, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
}

function body(config) {
  return typeof config.data === "string" ? JSON.parse(config.data) : config.data;
}

test("CRM convenience client uses current plural production routes and optimistic mutations", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, { data: {}, meta: { request_id: "request-1" } });
  };
  const sdk = new FaiberSDK({ domains: { crm: "https://crm.test" }, axios: { adapter } });

  const leads = await sdk.crm.listLeads({ q: "Acme", status: "open" });
  await sdk.crm.moveLeadStage("lead/one", { stage_id: "stage-2", version: 4 });
  await sdk.crm.refreshReports({ period_start: "2026-01-01T00:00:00Z" });
  await sdk.crm.requestAgenticInsight("report/one");

  assert.equal(leads.status, 200);
  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/leads"],
    ["patch", "/api/v1/leads/lead%2Fone/stage"],
    ["post", "/api/v1/reports/refresh"],
    ["post", "/api/v1/reports/report%2Fone/agentic"],
  ]);
  assert.equal(requests[0].params.q, "Acme");
  assert.equal(body(requests[1]).version, 4);
  assert.equal(requests[2].params.period_start, "2026-01-01T00:00:00Z");
  assert.equal("leads" in sdk.crm, false);
  assert.equal("markLeadDone" in sdk.crm, false);
});

test("Task client covers protected workspace, grant, proposal, comments, and SSE routes", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, config.responseType === "stream" ? "event: invalidate\ndata: projects\n\n" : { data: {} });
  };
  const sdk = new FaiberSDK({ domains: { task: "https://task.test" }, axios: { adapter } });

  await sdk.task.workspace();
  await sdk.task.grantProjectAccess("project/one", {
    user_id: "user-1",
    profile_key: "contributor",
    expires_at: null,
  });
  await sdk.task.createWorkItem({
    project_id: "project-1",
    title: "Implement reports",
    owner_id: "user-1",
  }, "idempotency-1");
  await sdk.task.updateProject("project/one", 7, { name: "Delivery" });
  await sdk.task.createComment("item/one", { body: "Ready", mentions: ["user-2"] });
  await sdk.task.createAgentProposal({ project_id: "project-1", operation: "transition", payload: {} });
  await sdk.task.approveAgentProposal("proposal/one");
  await sdk.task.openEvents({ adapter });

  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/workspace"],
    ["post", "/api/v1/projects/project%2Fone/grants"],
    ["post", "/api/v1/work-items"],
    ["patch", "/api/v1/projects/project%2Fone"],
    ["post", "/api/v1/work-items/item%2Fone/comments"],
    ["post", "/api/v1/agent-proposals"],
    ["post", "/api/v1/agent-proposals/proposal%2Fone/approve"],
    ["get", "/api/v1/events"],
  ]);
  assert.equal(requests[2].headers.get("Idempotency-Key"), "idempotency-1");
  assert.equal(requests[3].headers.get("If-Match"), "7");
  assert.equal(requests[7].responseType, "stream");
});
