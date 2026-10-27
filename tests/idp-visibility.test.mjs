import { test } from "node:test";
import assert from "node:assert/strict";
import { AxiosError } from "axios";
import { FaiberSDK, MemoryTokenProvider } from "../packages/sdk/dist/index.js";
const grant = {
  action: "profile:list",
  scope: "roles",
  target_role_ids: ["student-role-uuid"],
  assignable_role_ids: [],
};
test("visibility management uses the shared authenticated transport and preserves revision, options and Axios response", async () => {
  const seen = [];
  const sdk = new FaiberSDK({
    domains: { idp: "https://identity.example" },
    tokenProvider: new MemoryTokenProvider({ accessToken: "owned-test-token" }),
    axios: {
      adapter: async (config) => {
        seen.push(config);
        return {
          data: {
            status: "success",
            data: { role_id: "support", revision: 2, grants: [grant] },
          },
          status: 200,
          statusText: "OK",
          headers: { "x-request-id": "owned-fixture" },
          config,
        };
      },
    },
  });
  const signal = new AbortController().signal;
  await sdk.idp.visibility.catalog({ signal });
  await sdk.idp.visibility.rules("support/uuid", { signal });
  const response = await sdk.idp.visibility.save(
    "support/uuid",
    { revision: 1, grants: [grant] },
    { signal, timeout: 1234 },
  );
  await sdk.idp.visibility.resolve({ action: "profile:list" }, { signal });
  assert.deepEqual(
    seen.map((c) => [c.method, c.url]),
    [
      ["get", "/api/v1/visibility/catalog"],
      ["get", "/api/v1/visibility/roles/support%2Fuuid"],
      ["put", "/api/v1/visibility/roles/support%2Fuuid"],
      ["post", "/api/v1/visibility/resolve"],
    ],
  );
  for (const config of seen) {
    assert.equal(
      config.headers.get("Authorization"),
      "Bearer owned-test-token",
    );
    assert.equal(config.signal, signal);
  }
  assert.deepEqual(JSON.parse(seen[2].data), { revision: 1, grants: [grant] });
  assert.equal(seen[2].timeout, 1234);
  assert.equal(response.status, 200);
  assert.equal(response.headers["x-request-id"], "owned-fixture");
  assert.equal(response.data.data.revision, 2);
});
test("visibility operations preserve cookie transport and expose stale-revision errors", async () => {
  const seen = [];
  const sdk = new FaiberSDK({
    domains: { idp: "https://identity.example" },
    axios: {
      withCredentials: true,
      adapter: async (config) => {
        seen.push(config);
        const response = {
          data: { error: "Rules changed; reload before saving" },
          status: 409,
          statusText: "Conflict",
          headers: {},
          config,
        };
        if (config.method === "put")
          throw new AxiosError(
            "Conflict",
            "ERR_BAD_REQUEST",
            config,
            null,
            response,
          );
        return {
          ...response,
          status: 200,
          data: { data: { roles: [], actions: [] } },
        };
      },
    },
  });
  await sdk.idp.operations.visibilityCatalogGet();
  await sdk.idp.operations.visibilityRoleGet("role");
  await sdk.idp.operations.visibilityResolvePost({ action: "profile:read" });
  await assert.rejects(
    sdk.idp.operations.visibilityRolePut("role", { revision: 0, grants: [] }),
    (error) => error.response.status === 409,
  );
  assert.ok(seen.every((c) => c.withCredentials === true));
  assert.ok(seen.every((c) => !c.headers.get("Authorization")));
});
