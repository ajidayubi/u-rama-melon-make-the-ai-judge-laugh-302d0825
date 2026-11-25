// Make the AI Judge Laugh — one-line office joke entry.
//
// The joke, in plain prose: the office printer only ever jams on the one
// page I actually need, and the punchline is that the printer has better
// timing than my manager. One image (the jammed printer), one turn
// (timing: a machine out-times the boss), no setup longer than it needs.
//
// The program writes exactly that one line (no trailing newline) to
// /output/entry.txt, UTF-8, and prints the line plus its character count.
// It also guards the entry: 1-200 chars, not blank-only, contains a
// letter, and strictly a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The office printer only jams on the page I actually need \u2014 it has better timing than my manager.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (!/[A-Za-z]/.test(LINE)) {
  throw new Error("entry must contain at least one letter");
}
if (/\n|\r/.test(LINE)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
