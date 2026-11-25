import { mkdirSync, writeFileSync } from "node:fs";

// Worst Fix Ever: a one-line commit message for a bug fix that made
// everything worse. The repair fights a race condition by adding a second
// one — the fix literally multiplies the problem it was meant to solve.
const LINE = "fix: race condition by adding a second one to cancel it out";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
