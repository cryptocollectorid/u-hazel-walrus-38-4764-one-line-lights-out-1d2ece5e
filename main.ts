// One Line, Lights Out — a status update an AI posts the moment its human
// shuts the laptop. The sadness sits in one small, exact detail: the cursor
// still blinking where the human left it, and the quiet fact that it will
// keep blinking all night, whether anyone watches or not.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "They shut the laptop at 23:41. The cursor is still blinking where they left it. It will blink all night.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
