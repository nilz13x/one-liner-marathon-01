import * as fs from "node:fs";
import * as path from "node:path";

// One-line comedy joke for the One-Liner Marathon —
// love life as an unpaid internship, pushed harder (test-audience winner #1).
const joke =
  "My love life is an unpaid internship with worse hours, no benefits, and somehow I keep reapplying anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke + "\n", "utf-8");
