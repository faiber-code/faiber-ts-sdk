import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { AxiosHeaders } from "axios";
import { FaiberClient, MemoryTokenProvider } from "../packages/core/dist/index.js";
import { LmsApi } from "../packages/lms/dist/index.js";
import { SocialApi } from "../packages/social/dist/index.js";
import { StateApi } from "../packages/state/dist/index.js";

const manifest = JSON.parse(await readFile(new URL("../service-contracts.json", import.meta.url), "utf8"));

test("every extracted endpoint has one documented operation using the shared client", async () => {
  for (const [service, endpoints] of Object.entries(manifest)) {
    const source = await readFile(new URL(`../packages/${service}/src/operations.ts`, import.meta.url), "utf8");
    const routes = [...source.matchAll(/\* Calls `([A-Z]+) ([^`]+)`/g)].map(([, method, path]) => `${method} ${path}`);
    assert.equal(routes.length, endpoints.length, `${service} documentation/operation count`);
    assert.equal(new Set(routes).size, routes.length, `${service} duplicate operations`);
    for (const endpoint of endpoints) assert.ok(routes.includes(`${endpoint.method} ${endpoint.path}`), `${service}: ${endpoint.method} ${endpoint.path}`);
    assert.equal((source.match(/return this\.client\.request</g) ?? []).length, endpoints.length, `${service} centralized client usage`);
    assert.equal((source.match(/@returns The complete Axios response/g) ?? []).length, endpoints.length, `${service} response documentation`);
    assert.equal((source.match(/@throws AxiosError/g) ?? []).length, endpoints.length, `${service} error documentation`);
  }
});

test("generated concrete inputs and queries are never empty placeholders", async () => {
  for (const service of Object.keys(manifest)) {
    const source = await readFile(new URL(`../packages/${service}/src/operations.types.ts`, import.meta.url), "utf8");
    assert.doesNotMatch(source, /interface \w+(?:Input|Query) extends (?:JsonObject|QueryParams) \{\s*\}/, service);
  }
});

test("LMS academy and question deletion preserve routes, bodies, and Bearer authorization", async () => {
  const seen = [];
  const client = new FaiberClient("lms", {
    domains: { lms: "https://lms.example.com" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "academy-token" }),
    axios: { adapter: async (config) => {
      seen.push(config);
      return { data: { status: "success", data: {} }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  const api = new LmsApi(client);
  await api.academyCourses({ category_id: 7 });
  await api.completeAcademySession("enrollment", 9, { idempotency_key: "once" });
  await api.examQuestions.delete(42);
  assert.deepEqual(seen.map(({ method, url }) => [method, url]), [
    ["get", "/api/v1/academy/courses"],
    ["post", "/api/v1/academy/enrollments/enrollment/sessions/9/complete"],
    ["delete", "/api/v1/exams/questions/42"],
  ]);
  assert.ok(seen.every((request) => request.headers.get("Authorization") === "Bearer academy-token"));
  assert.equal(seen[0].params.category_id, 7);
  const completionBody = typeof seen[1].data === "string" ? JSON.parse(seen[1].data) : seen[1].data;
  assert.equal(completionBody.idempotency_key, "once");
});

test("Social moderation audit uses typed query routing in cookie mode", async () => {
  let seen;
  const client = new FaiberClient("social", {
    domains: { social: "https://social.example.com" },
    axios: { withCredentials: true, adapter: async (config) => {
      seen = config;
      return { data: { status: "success", data: [], meta: { total: 0, page: 1, limit: 30 } }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  await new SocialApi(client).moderationAudit({ target_type: "post", action: "hide", page: 1, limit: 30 });
  assert.equal(seen.url, "/api/v1/moderation/audit");
  assert.equal(seen.params.action, "hide");
  assert.equal(seen.withCredentials, true);
  assert.equal(seen.headers.has("Authorization"), false);
});

test("State world updates use PUT through the authorized shared client", async () => {
  let seen;
  const client = new FaiberClient("state", {
    domains: { state: "https://state.example.com" }, authMode: "bearer",
    tokenProvider: new MemoryTokenProvider({ accessToken: "state-token" }),
    axios: { adapter: async (config) => {
      seen = config;
      return { data: { data: {} }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  await new StateApi(client).updateWorld("world/id", { name: "Arena" });
  assert.equal(seen.method, "put");
  assert.equal(seen.url, "/api/v1/worlds/world%2Fid");
  assert.equal(seen.headers.get("Authorization"), "Bearer state-token");
});
