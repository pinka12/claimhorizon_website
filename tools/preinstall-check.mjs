import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { rmSync, existsSync } from "node:fs";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const lockFiles = ["package-lock.json", "yarn.lock"];

for (const file of lockFiles) {
  const target = resolve(rootDir, file);
  if (existsSync(target)) {
    rmSync(target, { force: true });
  }
}

const userAgent = process.env.npm_config_user_agent ?? "";

if (!userAgent.toLowerCase().startsWith("pnpm/")) {
  console.error("Use pnpm instead");
  process.exit(1);
}
