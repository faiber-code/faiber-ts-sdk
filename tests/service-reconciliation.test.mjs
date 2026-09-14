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
  const mutation = { headers: { "Idempotency-Key": "dashboard-1" } };
  await sdk.crm.deleteTeam("team/one", { version: 3 }, mutation);
  await sdk.crm.removeTeamMember("team/one", "member/one", mutation);
  await sdk.crm.addLeadToSos("lead/one", mutation);
  await sdk.crm.removeLeadFromSos("lead/one", mutation);
  await sdk.crm.assignTeamToWorkflow("workflow/one", "team/one", mutation);
  await sdk.crm.assignUserToWorkflow("workflow/one", "user/one", mutation);
  await sdk.crm.deleteWorkflowAssignment("workflow/one", "assignment/one", mutation);

  assert.equal(leads.status, 200);
  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/leads"],
    ["patch", "/api/v1/leads/lead%2Fone/stage"],
    ["post", "/api/v1/reports/refresh"],
    ["post", "/api/v1/reports/report%2Fone/agentic"],
    ["delete", "/api/v1/teams/team%2Fone"],
    ["delete", "/api/v1/teams/team%2Fone/members/member%2Fone"],
    ["post", "/api/v1/leads/lead%2Fone/sos"],
    ["delete", "/api/v1/leads/lead%2Fone/sos"],
    ["post", "/api/v1/workflows/workflow%2Fone/assignments"],
    ["post", "/api/v1/workflows/workflow%2Fone/assignments"],
    ["delete", "/api/v1/workflows/workflow%2Fone/assignments/assignment%2Fone"],
  ]);
  assert.equal(requests[0].params.q, "Acme");
  assert.equal(body(requests[1]).version, 4);
  assert.equal(requests[2].params.period_start, "2026-01-01T00:00:00Z");
  assert.equal(body(requests[4]).version, 3);
  assert.deepEqual(body(requests[8]), { team_id: "team/one" });
  assert.deepEqual(body(requests[9]), { user_id: "user/one" });
  assert.equal("leads" in sdk.crm, false);
  assert.equal("markLeadDone" in sdk.crm, false);
});

test("LMS Office integration uses UUID classroom batches and an explicit legacy-ID bridge", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, { data: {} });
  };
  const sdk = new FaiberSDK({ domains: { lms: "https://lms.test" }, axios: { adapter } });

  await sdk.lms.batchClassrooms({ ids: ["00000000-0000-0000-0000-000000000001"] });
  await sdk.lms.resolveLegacyClassroomIds({ classrooms: [42], courses: [7] });

  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["post", "/api/v1/classrooms/batch"],
    ["post", "/api/v1/integration/legacy-ids/resolve"],
  ]);
  assert.deepEqual(body(requests[0]), { ids: ["00000000-0000-0000-0000-000000000001"] });
  assert.deepEqual(body(requests[1]), { classrooms: [42], courses: [7] });
});

test("DRM management facade uses the mounted API prefix and supports binary multipart chunks", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, {});
  };
  const sdk = new FaiberSDK({ domains: { drm: "https://drm.test" }, axios: { adapter } });
  const chunk = new Uint8Array([1, 2, 3]).buffer;

  await sdk.drm.dashboardSummary();
  await sdk.drm.drmStatuses();
  await sdk.drm.listLibraries();
  await sdk.drm.listCompositionCategories();
  await sdk.drm.listCompositions();
  await sdk.drm.operationsSettings();
  await sdk.drm.uploadPart("upload/one", 2, chunk);

  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/dashboard/summary"],
    ["get", "/api/v1/media/drm-statuses"],
    ["get", "/api/v1/libraries"],
    ["get", "/api/v1/composition-categories"],
    ["get", "/api/v1/compositions"],
    ["get", "/api/v1/operations/settings"],
    ["put", "/api/v1/upload-sessions/upload%2Fone/parts/2"],
  ]);
  assert.strictEqual(requests[6].data, chunk);
  assert.equal(requests[6].headers.get("Content-Type"), "application/octet-stream");
});

test("Session facade covers room lifecycle, recordings, integrations, and canonical views", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, {});
  };
  const sdk = new FaiberSDK({ domains: { session: "https://session.test" }, axios: { adapter } });

  await sdk.session.listRooms();
  await sdk.session.joinRoom("room/one");
  await sdk.session.startInteractive("room/one");
  await sdk.session.end("room/one");
  await sdk.session.roomRecordings("room/one");
  await sdk.session.listRecordings();
  await sdk.session.recordingManifest("recording/one");
  await sdk.session.chatToolSchema();

  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/rooms"],
    ["get", "/api/v1/rooms/room%2Fone/join"],
    ["post", "/api/v1/rooms/room%2Fone/interactive/start"],
    ["post", "/api/v1/rooms/room%2Fone/end"],
    ["get", "/api/v1/rooms/room%2Fone/recordings"],
    ["get", "/api/v1/recordings"],
    ["get", "/api/v1/recordings/recording%2Fone/manifest"],
    ["get", "/api/v1/integrations/chat/tool-schema"],
  ]);
  assert.equal(sdk.session.roomViewUrl("room/one"), "https://session.test/view/room/room%2Fone");
  assert.equal(sdk.session.recordingViewUrl("room/one"), "https://session.test/view/recording/room%2Fone");
  assert.equal(sdk.session.playbackViewUrl("room/one"), "https://session.test/view/playback/room%2Fone");
});

test("Chat facade exposes assistant administration and AI conversation management", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push(config);
    return response(config, {});
  };
  const sdk = new FaiberSDK({ domains: { chat: "https://chat.test" }, axios: { adapter } });

  await sdk.chat.assistants();
  await sdk.chat.managedAssistants();
  await sdk.chat.assistantModels();
  await sdk.chat.assistantContextCatalog();
  await sdk.chat.customerActionContent();
  await sdk.chat.conversations();
  await sdk.chat.aiRuntimeInputs("conversation/one");

  assert.deepEqual(requests.map(item => [item.method, item.url]), [
    ["get", "/api/v1/assistants"],
    ["get", "/api/v1/admin/assistants"],
    ["get", "/api/v1/admin/assistant-models"],
    ["get", "/api/v1/admin/assistant-context-catalog"],
    ["get", "/api/v1/admin/customer-action-content"],
    ["get", "/api/v1/conversations"],
    ["get", "/api/v1/conversations/conversation%2Fone/ai/runtime-inputs"],
  ]);
});

test("Messenger and Payment facades expose their management surfaces", async () => {
  const requests = [];
  const adapter = async config => {
    requests.push([config.baseURL, config.method, config.url]);
    return response(config, {});
  };
  const sdk = new FaiberSDK({
    domains: { messenger: "https://messenger.test", payment: "https://payment.test" },
    axios: { adapter },
  });

  await sdk.messenger.listNotifications();
  await sdk.messenger.notificationRealtimeConfig();
  await sdk.messenger.templateContents("template/one");
  await sdk.messenger.integrationDocs();
  await sdk.messenger.dashboard();
  await sdk.payment.settings();
  await sdk.payment.verificationLogs("transaction/one");
  await sdk.payment.verifyTransaction("transaction/one");
  await sdk.payment.rejectTransaction("transaction/one");
  await sdk.payment.transactionStatus("transaction/one");

  assert.deepEqual(requests, [
    ["https://messenger.test", "get", "/api/v1/notifications"],
    ["https://messenger.test", "get", "/api/v1/notifications/realtime/config"],
    ["https://messenger.test", "get", "/api/v1/templates/template%2Fone/contents"],
    ["https://messenger.test", "get", "/api/v1/integration/docs"],
    ["https://messenger.test", "get", "/api/v1/dashboard"],
    ["https://payment.test", "get", "/api/v1/settings"],
    ["https://payment.test", "get", "/api/v1/transactions/transaction%2Fone/verifications"],
    ["https://payment.test", "post", "/api/v1/transactions/transaction%2Fone/verify"],
    ["https://payment.test", "post", "/api/v1/transactions/transaction%2Fone/reject"],
    ["https://payment.test", "get", "/api/v1/transactions/transaction%2Fone"],
  ]);
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
