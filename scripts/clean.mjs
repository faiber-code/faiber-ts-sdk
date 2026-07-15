import { rm, readdir } from "node:fs/promises";
const packages = await readdir(new URL("../packages", import.meta.url), { withFileTypes: true });
await Promise.all(packages.filter((entry) => entry.isDirectory()).map((entry) => rm(new URL(`../packages/${entry.name}/dist`, import.meta.url), { recursive: true, force: true })));
