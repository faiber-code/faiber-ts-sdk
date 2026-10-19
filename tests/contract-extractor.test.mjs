import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

test("contract extraction finds the sibling services tree and emits portable mounted paths", async () => {
  const temporary = await mkdtemp(join(tmpdir(), "faiber-extractor-test-"));
  const output = join(temporary, "contracts.json");
  try {
    const extraction = spawnSync(
      process.execPath,
      [fileURLToPath(new URL("../scripts/extract-service-contracts.mjs", import.meta.url)), output],
      { encoding: "utf8" },
    );
    assert.equal(extraction.status, 0, extraction.stderr || extraction.stdout);
    const manifest = JSON.parse(await readFile(output, "utf8"));
    assert.ok(manifest.modules.length > 0);
    assert.ok(manifest.modules.some(endpoint => endpoint.path === "/api/v1/manage/content"));
    assert.ok(manifest.knowledge.some(endpoint => endpoint.path === "/api/v1/runtime/assistants/{assistant_id}/contracts/{slug}"));
    assert.ok(!manifest.knowledge.some(endpoint => endpoint.path === "/api/v1/assistants/{assistant_id}/contracts/{slug}"), "runtime contracts must retain their mounted authorization boundary");
    assert.ok(manifest.knowledge.some(endpoint => endpoint.path === "/api/v1/runtime/assistants/{assistant_id}/query"));
    assert.ok(manifest.knowledge.some(endpoint => endpoint.path === "/internal/task-projections/sync"));
    assert.ok(!manifest.knowledge.some(endpoint => endpoint.path === "/api/v1/assistants/{assistant_id}/query"));
    const socialOverview = manifest.social.find(endpoint => endpoint.method === "GET" && endpoint.path === "/api/v1/admin/social/overview");
    assert.ok(socialOverview, "the mounted Social administrative router must not be silently omitted");
    assert.deepEqual(socialOverview.permissions, ["social:panel:view"]);
    assert.ok(manifest.social.some(endpoint => endpoint.method === "POST" && endpoint.path === "/api/v1/admin/social/claims/{id}/approve"));
    assert.ok(!manifest.social.some(endpoint => endpoint.path === "/api/v1/overview"), "nested admin routes must keep their complete mount prefix");
    assert.ok(manifest.version.some(endpoint=>endpoint.path==='/health'&&endpoint.handler==='status_route'));
    assert.ok(!manifest.version.some(endpoint=>endpoint.path==='/'&&endpoint.handler==='status_route'), 'stale OpenAPI annotations cannot override the mounted health path');
    for (const service of ["asset", "idp", "modules", "payment"]) {
      assert.ok(manifest[service].some(endpoint=>endpoint.path==="/health" && endpoint.response==="HealthResponse"),service);
      assert.equal(manifest[service].find(endpoint=>endpoint.path==="/api/openapi.json").responseEnvelope,"raw",service);
    }
    assert.ok(manifest.idp.some(endpoint=>endpoint.path==="/.well-known/openid-configuration"));
    assert.ok(!manifest.idp.some(endpoint=>endpoint.path==="/api/v1/oauth2/token"));
    assert.ok(manifest.idp.some(endpoint=>endpoint.path==="/oauth2/token"));
    assert.ok(manifest.idp.some(endpoint=>endpoint.path==="/api/v1/auth/validate" && endpoint.method==="OPTIONS"));
    assert.equal(manifest.idp.find(endpoint=>endpoint.path==="/api/v1/auth/secure/generate/one-time/{user_id}").pathParam,"(Uuid)");
    assert.ok(manifest.modules.some(endpoint=>endpoint.path==="/api/v1/shop/cart"));
    assert.ok(manifest.modules.some(endpoint=>endpoint.path==="/api/v1/inventory/stock-movements"));
    assert.ok(manifest.modules.some(endpoint=>endpoint.path==="/api/v1/public/requests/{key}"));
    assert.ok(manifest.payment.some(endpoint=>endpoint.path==="/api/v1/transactions/daily-income"));
    assert.ok(!manifest.payment.some(endpoint=>endpoint.path.includes("/transactions/transactions/")));
    const manager=manifest.profile.find(endpoint=>endpoint.path==="/api/v1/profile/manager");
    assert.deepEqual(manager.permissions,["profile:read_manager"]);
    assert.equal(manager.query,"models::ListQuery");
    assert.equal(manager.response,"models::ListData");
    assert.equal(manager.responseMeta,"crate::models::PaginationMeta");
    for (const path of ["/api/v1/me/conversations","/api/v1/me/unread-count","/api/v1/me/events","/api/v1/me/realtime/config","/api/v1/me/realtime/auth"]) {
      assert.ok(manifest.chat.some(endpoint=>endpoint.path===path),path);
    }
    assert.ok(manifest.chat.some(endpoint=>endpoint.path==="/api/v1/integrations/lms/messages/{id}/notification-context"));
    assert.ok(manifest.session.some(e=>e.path==="/api/v1/integrations/lms/rooms/{id}/notification-state"));
    assert.ok(manifest.session.some(e=>e.path==="/integration/flow"));
    assert.ok(!manifest.session.some(e=>e.path==="/api/v1/integration/flow"));
    assert.ok(manifest.reservation.some(e=>e.path==="/api/v1/providers/{id}/capacity"));
    assert.equal(manifest.reservation.find(e=>e.path==="/api/openapi.json").responseEnvelope,"raw");
    const upload = manifest.task.find(endpoint => endpoint.method === "POST" && endpoint.path === "/api/v1/work-items/{id}/attachments");
    assert.equal(upload.handlerModule, "attachments", "qualified type resolution must use the owning handler module");
    const drmOperationsSettings = manifest.drm.find(endpoint => endpoint.method === "GET" && endpoint.path === "/api/v1/operations/settings");
    const drmKnowledgeSettings = manifest.drm.find(endpoint => endpoint.method === "GET" && endpoint.path === "/api/v1/mixed-media/{id}/knowledge-sync");
    assert.deepEqual(
      { pathParam: drmOperationsSettings?.pathParam, response: drmOperationsSettings?.response },
      { pathParam: undefined, response: "SettingsResponse" },
      "qualified DRM operations settings must resolve operations_handlers::get_settings",
    );
    assert.deepEqual(
      { pathParam: drmKnowledgeSettings?.pathParam, response: drmKnowledgeSettings?.response },
      { pathParam: "Uuid", response: "KnowledgeSyncSettings" },
      "qualified DRM knowledge sync must resolve knowledge_sync::get_settings",
    );
    for (const endpoints of Object.values(manifest)) {
      for (const endpoint of endpoints) {
        assert.doesNotMatch(endpoint.path, /\/api\/v1\/api\/v1\//);
        assert.doesNotMatch(endpoint.source, /\\/);
      }
    }
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});


test("contract audit rejects an unknown selection instead of verifying zero services", () => {
  const result=spawnSync(process.execPath,[fileURLToPath(new URL("../scripts/audit-service-contracts.mjs",import.meta.url))],{
    encoding:"utf8", env:{...process.env,FAIBER_CONTRACT_SERVICES:"sessoin"}
  });
  assert.notEqual(result.status,0);
  assert.match(result.stderr,/Unknown contract service: sessoin/);
});
