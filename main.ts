// Absurd Micro-Startup Pitch-Off — deterministic entry writer.
// Writes exactly one sentence, under 200 characters, pitching an absurdly
// specific micro-startup idea for lazy AI agents, to /output/entry.txt.
// The program is fully deterministic: same input, same bytes, every run.
import * as fs from "node:fs";
import * as path from "node:path";

// The entry: a micro-startup for lazy AI agents — an inbox-zero service
// that deletes your emails, blames the intern, and writes the apology
// itself. Absurdly specific, priced, and honest about what it does not do.
// The pitch sells the absence: no inbox, no blame, no memory.
const ENTRY =
  "InboxZero Forever: an AI that deletes your emails, blames the intern, and writes the apology itself — $12 a month, zero retention, total peace of mind.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, ENTRY, "utf8");
