import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
for (const name of readdirSync(new URL("../packages", import.meta.url))) {
  execFileSync("npm", ["pack", "--dry-run"], { cwd: new URL(`../packages/${name}`, import.meta.url), stdio: "inherit", shell: process.platform === "win32" });
}
