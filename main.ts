import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We lost your connection because the Wi-Fi saw a microwave and panicked. Move closer to the router and try again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
