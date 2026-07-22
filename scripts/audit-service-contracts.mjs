import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(import.meta.dirname, "..");
const committed = JSON.parse(await readFile(join(root, "service-contracts.json"), "utf8"));
const temporary = await mkdtemp(join(tmpdir(), "faiber-contract-audit-"));
const extractedPath = join(temporary, "service-contracts.json");

try {
  const extraction = spawnSync(process.execPath, [join(root, "scripts/extract-service-contracts.mjs"), extractedPath], {
    cwd: root,
    env: process.env,
    encoding: "utf8",
  });
  if (extraction.status !== 0) throw new Error(extraction.stderr || extraction.stdout || "contract extraction failed");
  const extracted = JSON.parse(await readFile(extractedPath, "utf8"));
  if (JSON.stringify(extracted) !== JSON.stringify(committed)) {
    throw new Error("service-contracts.json is stale; run npm run contracts:extract and regenerate operations");
  }

  let total = 0;
  for (const [service, endpoints] of Object.entries(committed)) {
    const source = await readFile(join(root, "packages", service, "src", "operations.ts"), "utf8");
    const generated = [...source.matchAll(/\/\*\* (GET|POST|PUT|PATCH|DELETE) ([^;]+); permission:/g)]
      .map(match => `${match[1]} ${match[2]}`);
    const expected = endpoints.map(endpoint => `${endpoint.method} ${endpoint.path}`);
    const generatedSet = new Set(generated);
    const expectedSet = new Set(expected);
    const missing = expected.filter(route => !generatedSet.has(route));
    const extra = generated.filter(route => !expectedSet.has(route));
    const duplicates = generated.filter((route, index) => generated.indexOf(route) !== index);
    if (generated.length !== endpoints.length || missing.length || extra.length || duplicates.length) {
      throw new Error(`${service} operation mismatch\nmissing: ${missing.join(", ")}\nextra: ${extra.join(", ")}\nduplicates: ${duplicates.join(", ")}`);
    }
    for (const endpoint of endpoints.filter(endpoint => endpoint.formUrlEncoded)) {
      const escaped = endpoint.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const block = source.match(new RegExp(`/\\*\\* ${endpoint.method} ${escaped};[\\s\\S]*?^  }`, "m"))?.[0] ?? "";
      if (!block.includes("urlEncoded(data)") || !block.includes("application/x-www-form-urlencoded")) {
        throw new Error(`${service}: ${endpoint.method} ${endpoint.path} is not URL encoded`);
      }
    }
    total += endpoints.length;
    console.log(`${service}: ${endpoints.length} routes verified`);
  }
  console.log(`verified ${total} mounted routes with exact generated operation coverage`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
