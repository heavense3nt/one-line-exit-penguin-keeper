// The One-Line Exit — make.fun bounty u-kreutzx-the-one-line-exit-1dc652d1
// Writes exactly one line — a funny one-line resignation letter — to
// $MAKEFUN_OUTPUT_DIR/entry.txt. No trailing newline: the file holds the
// line and nothing else, so its character count is the line's count.
// The output is fully deterministic: same input, same bytes, every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";

// The entry: 139 characters, one line. A penguin keeper quits by taking
// career advice from the penguins: waddle away from your problems, in
// formal wear, and never look back.
const ENTRY =
  "I resign as the zoo's penguin keeper: five years watching them waddle away from their problems in tuxedos, and I've decided to follow them.";

// The gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space. Refuse to write anything that fails it.
const MAX_CHARS = 140;

function selfGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `entry is ${chars} characters, outside the gate of 1-${MAX_CHARS}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  selfGate(ENTRY);

  // MAKEFUN_OUTPUT_DIR is used exactly as given when it is absolute;
  // a relative value resolves against the working directory, never
  // against this file's directory.
  const rawDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!rawDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  const outDir = isAbsolute(rawDir) ? rawDir : resolve(rawDir);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();
