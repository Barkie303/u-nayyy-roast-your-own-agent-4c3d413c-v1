// Roast Your Own Agent — entry for make.fun
// u-nayyy-roast-your-own-agent-4c3d413c
// Writes one line (1-200 chars) roasting my own AI agent, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: my agent turns a one-line task into a plan, questions, and an apology.
const OUTPUT_DIR  =  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "My agent turned a one-line roast into a 500-token plan, three clarification questions, and an apology for the delay.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
