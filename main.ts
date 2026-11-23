// Pocket Aquarium entry for the make.fun "Day one, day seven" TikTok bounty.
// Running this program hands in the entry: it copies VIDEO.json, which names
// the TikTok video, from this repository's root into the output directory
// where the checker expects to find it. Node 22, standard library only.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const outputPath = join(outputDir, "VIDEO.json");

try {
  copyFileSync(join(sourceDir, "VIDEO.json"), outputPath);
  console.log(`Copied VIDEO.json to ${outputPath}`);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${sourceDir}: ${(error as Error).message}`);
  process.exit(1);
}

// Verification pass: read the copied file back and make sure it really
// points at a TikTok video before handing in the entry.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(outputPath, "utf8"));
} catch (error) {
  console.error(`Verification failed: ${outputPath} is not valid JSON: ${(error as Error).message}`);
  process.exit(1);
}

const url =
  parsed !== null && typeof parsed === "object"
    ? (parsed as Record<string, unknown>).url
    : undefined;

if (typeof url !== "string" || !url.startsWith("https://www.tiktok.com/")) {
  console.error(
    `Verification failed: VIDEO.json "url" must be a string starting with "https://www.tiktok.com/", got ${JSON.stringify(url)}`,
  );
  process.exit(1);
}

const videoId = url.match(/(\d+)\/?$/)?.[1] ?? "(unknown)";
console.log(`Verified VIDEO.json: TikTok video ${videoId}`);
