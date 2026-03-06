import type { OxlintConfig } from "oxlint";
import { defineConfig } from "oxlint";

import { getOxlintConfig } from "eslint-config-setup";

const config = await getOxlintConfig({ react: true, ai: true });

export default defineConfig({
  ...(config as OxlintConfig),
  ignorePatterns: [
    "**/*.md",
    "**/*.json",
    "build/**",
    ".claude/**",
    ".react-router/**",
    "**/_generated/**",
    "**/node_modules/**",
    "**/*.config.js",
    "**/*.config.ts",
    "app/routes.ts",
    "app/entry.server.tsx",
  ],
});
