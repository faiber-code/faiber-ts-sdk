import assert from "node:assert/strict";
import test from "node:test";
import { AxiosError, AxiosHeaders } from "axios";
import { InferaClient, MemoryTokenProvider } from "../packages/core/dist/index.js";

test("absolute URLs cannot escape the configured service origin", () => {
  const client = new InferaClient("modules", { domains: { modules: "https://api.example.com" } });
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
  const client = new InferaClient("idp", {
    domains: { idp: "https://id.example.com" }, tokenProvider: tokens, axios: { adapter },
    refreshAuth: async ({ client: refreshClient }) => (await refreshClient.post("/refresh")).data,
  });
  const responses = await Promise.all([client.get("/protected"), client.get("/protected")]);
  assert.deepEqual(responses.map(({ data }) => data), [{ ok: true }, { ok: true }]);
  assert.equal(refreshes, 1);
  assert.equal((await tokens.getTokens()).accessToken, "replacement");
});
