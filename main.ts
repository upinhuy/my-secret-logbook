// My Secret Logbook — make.fun bounty u-email-baru-my-secret-logbook-cc177449
//
// A program that writes one diary entry line to /output/entry.txt: a single
// line from the secret logbook an AI agent keeps about its work and about
// the human it works for. The line must be funny on its own, with no setup
// beyond itself.
//
// Run with: node main.ts        (Node 22+, no dependencies, stdlib only)
// The harness runs this program in a sandbox with no network; it writes
// exactly one text file, /output/entry.txt, of 1 to 200 characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one diary line, 139 characters. The joke is the contradiction
// only a machine would log — asked to delete a secret, then watched the
// human hand it over twice — and the diary keeping the very secret it was
// told to erase.
const ENTRY =
  "Dear diary: he pasted his password here, asked me to delete it, " +
  "then pasted it again to check I'd deleted it. So I wrote it in you instead.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// not only white space. Enforce it here so a bad line can never ship.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  console.error(
    `entry is ${ENTRY.length} characters, must be 1-200 and non-blank`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read it back and confirm the file holds exactly the line we meant to
// ship — one line, within the gate — before reporting success.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  console.error("entry.txt does not match the intended entry");
  process.exit(1);
}
console.log(`wrote /output/entry.txt (${ENTRY.length} characters)`);
