import assert from "node:assert/strict";
import test from "node:test";
import { AxiosError, AxiosHeaders } from "axios";
import { FaiberClient, MemoryTokenProvider } from "../packages/core/dist/index.js";

test("absolute URLs cannot escape the configured service origin", () => {
  const client = new FaiberClient("modules", { domains: { modules: "https://api.example.com" } });
  const uri = client.axios.getUri({ url: "https://untrusted.example/resource" });
  assert.equal(uri, "https://api.example.com/https://untrusted.example/resource");
});

test("concurrent unauthorized requests share refresh and use the replacement token", async () => {
  const tokens = new MemoryTokenProvider({ accessToken: "expired" });
  let refreshes = 0;
  const adapter = async (config) => {
    if (config.url === "/refresh") {
      refreshes += 1;
      return { data: { accessToken: "replacement" }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    }
    if (config.headers.get("Authorization") === "Bearer replacement") {
      return { data: { ok: true }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
    }
    throw new AxiosError("unauthorized", "ERR_BAD_REQUEST", config, null, { data: {}, status: 401, statusText: "Unauthorized", headers: new AxiosHeaders(), config });
  };
  const client = new FaiberClient("idp", {
    domains: { idp: "https://id.example.com" }, tokenProvider: tokens, axios: { adapter },
    refreshAuth: async ({ client: refreshClient }) => (await refreshClient.post("/refresh")).data,
  });
  const responses = await Promise.all([client.get("/protected"), client.get("/protected")]);
  assert.deepEqual(responses.map(({ data }) => data), [{ ok: true }, { ok: true }]);
  assert.equal(refreshes, 1);
  assert.equal((await tokens.getTokens()).accessToken, "replacement");
});

test("cookie mode preserves credentials without requiring a token provider", async () => {
  let observed;
  const client = new FaiberClient("profile", {
    domains: { profile: "https://profile.example.com" },
    authMode: "cookie",
    tokenProvider: new MemoryTokenProvider({ accessToken: "must-not-be-sent" }),
    axios: {
      withCredentials: true,
      adapter: async (config) => {
        observed = config;
        return { data: { ok: true }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
      },
    },
  });
  await client.get("/api/v1/profile/me");
  assert.equal(observed.withCredentials, true);
  assert.equal(observed.headers.has("Authorization"), false);
});

test("cookie refresh can rotate an HttpOnly cookie without returning tokens", async () => {
  let refreshed = false;
  let attempts = 0;
  const client = new FaiberClient("profile", {
    domains: { profile: "https://profile.example.com" },
    authMode: "cookie",
    axios: { adapter: async (config) => {
      attempts += 1;
      if (refreshed) return { data: { ok: true }, status: 200, statusText: "OK", headers: new AxiosHeaders(), config };
      throw new AxiosError("unauthorized", "ERR_BAD_REQUEST", config, null, { data: {}, status: 401, statusText: "Unauthorized", headers: new AxiosHeaders(), config });
    } },
    refreshAuth: async () => { refreshed = true; return null; },
  });
  const response = await client.get("/protected");
  assert.deepEqual(response.data, { ok: true });
  assert.equal(attempts, 2);
});

test("refresh failure preserves the original protected-request Axios error", async () => {
  const tokens = new MemoryTokenProvider({ accessToken: "expired", refreshToken: "invalid" });
  const original = new AxiosError("unauthorized", "ERR_BAD_REQUEST", undefined, null, {
    data: { message: "expired" }, status: 401, statusText: "Unauthorized", headers: new AxiosHeaders(), config: {},
  });
  const refreshFailure = new AxiosError("refresh rejected", "ERR_BAD_REQUEST", undefined, null, {
    data: { message: "invalid refresh" }, status: 403, statusText: "Forbidden", headers: new AxiosHeaders(), config: {},
  });
  const client = new FaiberClient("idp", {
    domains: { idp: "https://id.example.com" },
    tokenProvider: tokens,
    axios: { adapter: async (config) => { original.config = config; throw original; } },
    refreshAuth: async () => { throw refreshFailure; },
  });
  await assert.rejects(client.get("/protected"), (error) => {
    assert.equal(error, original);
    assert.equal(error.response.status, 401);
    assert.equal(error.cause, refreshFailure);
    return true;
  });
  assert.equal(await tokens.getTokens(), null);
});
