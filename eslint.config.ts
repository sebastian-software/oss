import { getEslintConfig } from "eslint-config-setup";

const config = await getEslintConfig({ ai: true, react: true, oxlint: true });

export default [
  ...config,
  {
    ignores: [
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
      "functions/**",
    ],
  },
];
