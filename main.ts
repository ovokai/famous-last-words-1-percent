// Famous Last Words at 1 Percent — make.fun entry
// Writes one farewell line, in the phone's own voice, to /output/entry.txt.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I've kept your search history, your unsent drafts, and your 3 a.m. photos safe for years — and now I take them all with me. You're welcome.";

// The gate accepts UTF-8 text of 1..199 characters on a single line.
function validate(line: string): void {
  if (line.length === 0 || line.length > 199) {
    throw new Error(`line must be 1..199 chars, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("line must be a single line");
  }
}

function main(): void {
  validate(LINE);
  const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
  try {
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, LINE + "\n", "utf8");
    console.log(`wrote ${LINE.length} chars to ${out}`);
  } catch {
    // Fallback: local entry.txt next to this file
    writeFileSync(new URL("./entry.txt", import.meta.url), LINE + "\n", "utf8");
    console.log("wrote entry.txt locally");
  }
}

main();
