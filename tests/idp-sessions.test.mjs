import assert from "node:assert/strict";
import test from "node:test";
import { AxiosHeaders } from "axios";
import { FaiberClient } from "../packages/core/dist/index.js";
import { IdpApi } from "../packages/idp/dist/index.js";

test("IDP session helpers use the self-service session routes", async () => {
  const requests = [];
  const adapter = async (config) => {
    requests.push({ method: config.method, url: config.url });
    const data = config.url === "/api/v1/auth/sessions"
      ? { status: "success", message: "ok", data: [] }
      : { status: "success", message: "ok" };
    return { data, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
  };
  const client = new FaiberClient("idp", {
    domains: { idp: "https://id.example.test" },
    axios: { adapter },
  });
  const api = new IdpApi(client);

  assert.deepEqual((await api.sessions()).data.data, []);
  await api.revokeSession("session/with spaces");
  await api.logout();

  assert.deepEqual(requests, [
    { method: "get", url: "/api/v1/auth/sessions" },
    { method: "delete", url: "/api/v1/auth/sessions/session%2Fwith%20spaces" },
    { method: "get", url: "/api/v1/auth/logout" },
  ]);
});

test("generated IDP session operations use the same routes", async () => {
  const requests = [];
  const adapter = async (config) => {
    requests.push({ method: config.method, url: config.url });
    return {
      data: { status: "success", message: "ok", data: [] },
      status: 200,
      statusText: "OK",
      headers: new AxiosHeaders(),
      config,
    };
  };
  const api = new IdpApi(new FaiberClient("idp", {
    domains: { idp: "https://id.example.test" },
    axios: { adapter },
  }));

  await api.operations.authListSessionsGet();
  await api.operations.authDeleteSessionDelete("session-id");
  await api.operations.authLogoutGet();

  assert.deepEqual(requests, [
    { method: "get", url: "/api/v1/auth/sessions" },
    { method: "delete", url: "/api/v1/auth/sessions/session-id" },
    { method: "get", url: "/api/v1/auth/logout" },
  ]);
});
