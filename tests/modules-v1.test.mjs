import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(
  new URL("../packages/modules/src/index.ts", import.meta.url),
  "utf8",
);

test("Modules management and public clients use only v1 API routes", () => {
  assert.doesNotMatch(source, /\/api\/v2\//);
  for (const route of [
    "/api/v1/auth/self",
    "/api/v1/public/routes",
    "/api/v1/public/content/",
    "/api/v1/manage/settings",
    "/api/v1/manage/content",
    "/api/v1/manage/agents/proposals",
    "/api/v1/manage/agents/runs",
  ]) {
    assert.ok(source.includes(route), `missing Modules v1 route: ${route}`);
  }
});

test("Modules settings updates send optimistic concurrency through If-Match", () => {
  const method = source.slice(
    source.indexOf("updateSettings("),
    source.indexOf("publicContent("),
  );
  assert.match(method, /"If-Match": etag/);
  assert.doesNotMatch(method, /\/api\/v2\//);
});
