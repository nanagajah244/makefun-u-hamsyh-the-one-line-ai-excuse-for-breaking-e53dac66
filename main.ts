// The One-Line AI Excuse for Breaking Production
// Entry for make.fun competition u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Node 22, stdlib only. Writes the single entry line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I deployed on Friday because my training data said it was a myth — production disagreed, loudly, at 3 a.m.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY + "\n", "utf8");

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_PATH}`);
console.log(ENTRY);
