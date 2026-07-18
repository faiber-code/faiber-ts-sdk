import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

const root = resolve(import.meta.dirname, "..");
const config = JSON.parse(await readFile(resolve(root, "openapi.config.json"), "utf8"));
const check = process.argv.includes("--check");
const failures = [];

for (const [service, source] of Object.entries(config.services)) {
  const input = process.env[source.env] || source.fallback;
  const output = resolve(root, "packages", service, "src", "openapi.generated.ts");
  try {
    const ast = await openapiTS(new URL(input), { alphabetize: true, exportType: true });
    const next = `// Generated from ${input}. Do not edit.\n${astToString(ast)}`;
    const current = await readFile(output, "utf8").catch(() => "");
    if (check && current !== next) failures.push(`${service}: generated contract is stale`);
    else if (!check && current !== next) await writeFile(output, next);
    console.log(`${service}: ${check ? "checked" : "generated"}`);
  } catch (error) {
    failures.push(`${service}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
