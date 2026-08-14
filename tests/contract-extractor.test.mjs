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
