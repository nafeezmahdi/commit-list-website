import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const distDir = resolve(rootDir, "dist");

function ensureCleanDist() {
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });
}

function buildCss() {
  execSync(
    "node node_modules/@tailwindcss/cli/dist/index.mjs -i ./src/input.css -o ./dist/output.css",
    { cwd: rootDir, stdio: "inherit" }
  );
}

function copyStaticFiles() {
  cpSync(resolve(rootDir, "script.js"), resolve(distDir, "script.js"));
  cpSync(resolve(rootDir, "todo-details.js"), resolve(distDir, "todo-details.js"));
  cpSync(resolve(rootDir, "assets"), resolve(distDir, "assets"), { recursive: true });
}

function writeDeployHtml(fileName) {
  const srcPath = resolve(rootDir, fileName);
  const outPath = resolve(distDir, fileName);
  const html = readFileSync(srcPath, "utf8").replace("./dist/output.css", "./output.css");
  writeFileSync(outPath, html, "utf8");
}

function main() {
  if (!existsSync(resolve(rootDir, "src", "input.css"))) {
    throw new Error("Missing src/input.css");
  }

  ensureCleanDist();
  buildCss();
  writeDeployHtml("index.html");
  writeDeployHtml("todo.html");
  copyStaticFiles();
}

main();
