import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { AxiosHeaders } from "axios";
import {
  FAIBER_SERVICE_CAPABILITIES, FaiberSDK, MemoryTokenProvider, SERVICE_NAMES,
} from "../packages/sdk/dist/index.js";

const manifest = JSON.parse(await readFile(new URL("../service-contracts.json", import.meta.url), "utf8"));

test("the facade and AI catalog cover every sandbox service exactly once", () => {
  const expected = ["idp", "profile", "modules", "asset", "payment", "messenger", "crm", "lms", "reservation", "session", "version", "flow", "knowledge", "chat", "social", "state", "drm", "task"];
  assert.deepEqual([...SERVICE_NAMES], expected);
  assert.deepEqual(FAIBER_SERVICE_CAPABILITIES.map(item => item.service), expected);
  for (const capability of FAIBER_SERVICE_CAPABILITIES) {
    assert.ok(capability.description.length > 30, `${capability.service} description`);
    assert.ok(capability.aiGuidance.length > 30, `${capability.service} AI guidance`);
    assert.match(capability.environmentVariable, /^FAIBER_[A-Z]+_URL$/);
    assert.ok(capability.operationCount > 0);
    assert.ok(capability.auth.length > 20);
  }
});

test("all 18 public service connections share auth, transport, and facade configuration", async () => {
  const requests = [];
  const domains = Object.fromEntries(SERVICE_NAMES.map(service => [service, `https://${service}.sandbox.test`]));
  const sdk = new FaiberSDK({
    domains,
    tokenProvider: new MemoryTokenProvider({ accessToken: "integration-token" }),
    axios: { adapter: async config => {
      requests.push(config);
      return { data: { status: "ok" }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  for (const service of SERVICE_NAMES) {
    assert.ok(sdk[service], `${service} facade property`);
    await sdk.service(service).get("/health");
  }
  assert.equal(requests.length, SERVICE_NAMES.length);
  assert.deepEqual(requests.map(request => request.baseURL), SERVICE_NAMES.map(service => domains[service]));
  assert.ok(requests.every(request => request.headers.get("Authorization") === "Bearer integration-token"));
});

test("DRM preserves typed filtering, identifiers, cookie auth, and route semantics", async () => {
  const requests = [];
  const sdk = new FaiberSDK({
    domains: { drm: "https://drm.test" },
    authMode: "cookie",
    axios: { withCredentials: true, adapter: async config => {
      requests.push(config);
      return { data: {}, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    } },
  });
  await sdk.drm.media({ search: "launch", media_type: "video", page: 2, size: 20 });
  await sdk.drm.playback("media/one");
  assert.deepEqual(requests.map(request => [request.method, request.url]), [
    ["get", "/api/v1/media"],
    ["get", "/api/v1/media/media%2Fone/playback"],
  ]);
  assert.equal(requests[0].params.search, "launch");
  assert.ok(requests.every(request => request.withCredentials));
  assert.ok(requests.every(request => !request.headers.has("Authorization")));
});

test("generated contracts have exact route coverage, named outputs, and complete JSDoc", async () => {
  let total = 0;
  for (const [service, endpoints] of Object.entries(manifest)) {
    const operations = await readFile(new URL(`../packages/${service}/src/operations.ts`, import.meta.url), "utf8");
    const types = await readFile(new URL(`../packages/${service}/src/operations.types.ts`, import.meta.url), "utf8");
    assert.equal((operations.match(/@returns The complete Axios response/g) ?? []).length, endpoints.length, `${service} return docs`);
    assert.equal((operations.match(/@throws AxiosError/g) ?? []).length, endpoints.length, `${service} error docs`);
    assert.equal((operations.match(/return this\.client\.request</g) ?? []).length, endpoints.length, `${service} transport`);
    assert.doesNotMatch(types, /handler-defined response/, `${service} response provenance`);
    assert.doesNotMatch(types, /\bany\b/, `${service} any`);
    for (const endpoint of endpoints) {
      assert.ok(endpoint.response || endpoint.responseEnvelope, `${service} ${endpoint.method} ${endpoint.path} response contract`);
    }
    total += endpoints.length;
  }
  assert.equal(total, 889);
});

test("every published workspace package includes developer documentation", async () => {
  const packageNames = await readdir(new URL("../packages", import.meta.url));
  for (const name of packageNames) {
    const packageJson = JSON.parse(await readFile(new URL(`../packages/${name}/package.json`, import.meta.url), "utf8"));
    assert.equal(packageJson.version, "0.6.0", `${packageJson.name} release version`);
    for (const [dependency, version] of Object.entries(packageJson.dependencies ?? {})) {
      if (dependency.startsWith("@faiber/")) assert.equal(version, "0.6.0", `${packageJson.name} -> ${dependency}`);
    }
    assert.ok(packageJson.files.includes("README.md"), `${packageJson.name} publishes README`);
    const readme = await readFile(new URL(`../packages/${name}/README.md`, import.meta.url), "utf8");
    assert.match(readme, /npm install/);
  }
});
