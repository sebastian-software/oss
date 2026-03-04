import type { Category, CategoryIcon, Project } from "../types/project"

export const categories: { name: Category; icon: CategoryIcon }[] = [
  { name: "Developer Tooling", icon: "Wrench" },
  { name: "Libraries & Frameworks", icon: "Blocks" },
  { name: "Native Node.js Bindings", icon: "Cpu" },
  { name: "AI & Speech", icon: "BrainCircuit" },
  { name: "Data & Encoding", icon: "Database" },
]

export const projects: Project[] = [
  // Developer Tooling
  {
    name: "ESLint Config Setup",
    repo: "sebastian-software/eslint-config-setup",
    icon: "Settings",
    category: "Developer Tooling",
    description:
      "Pre-generated ESLint flat configs for TypeScript & React — 25 plugins, AI mode, OxLint-ready",
    detail:
      "Stop spending hours assembling ESLint configs from scratch. This package ships pre-generated flat configs that bundle 25 curated plugins for TypeScript and React projects. Includes an AI-assisted mode for intelligent rule tuning and is fully compatible with the emerging OxLint ecosystem.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "eslint-config-setup",
  },
  {
    name: "ESLint Plugin Lingui TS",
    repo: "sebastian-software/eslint-plugin-lingui-typescript",
    icon: "Languages",
    category: "Developer Tooling",
    description: "ESLint plugin for Lingui with TypeScript type-aware rules",
    detail:
      "Catches i18n mistakes at lint time instead of runtime. This plugin adds type-aware ESLint rules specifically designed for Lingui projects using TypeScript, ensuring translation keys are correct and message descriptors follow best practices.",
    license: "MIT",
    ecosystem: "npm",
    npm: "eslint-plugin-lingui-typescript",
  },
  {
    name: "npm-sweep",
    repo: "sebastian-software/npm-sweep",
    icon: "Trash2",
    category: "Developer Tooling",
    description:
      "Interactive tool for managing end-of-life of your npm packages",
    detail:
      "Gracefully retire npm packages without breaking downstream users. npm-sweep provides an interactive CLI that helps you deprecate, unpublish, or transfer ownership of packages while notifying dependents and keeping the registry clean.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "npm-sweep",
  },
  {
    name: "ResponsiveShot",
    repo: "sebastian-software/responsive-shot",
    icon: "Camera",
    category: "Developer Tooling",
    description: "Capture full-page screenshots at any viewport size",
    detail:
      "Generate pixel-perfect full-page screenshots across any viewport width for visual regression testing or documentation. Built on Playwright, ResponsiveShot handles lazy-loaded content, sticky headers, and infinite scroll pages out of the box.",
    license: "Apache-2.0",
    ecosystem: "app",
  },
  {
    name: "python2ts",
    repo: "sebastian-software/python2ts",
    icon: "ArrowRightLeft",
    category: "Developer Tooling",
    description:
      "TypeScript-based Python to TypeScript transpiler using real AST transformation",
    detail:
      "Migrate Python codebases to TypeScript with confidence. Unlike regex-based converters, python2ts parses Python into a full AST and produces idiomatic TypeScript output — preserving type hints, class hierarchies, and module structure.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "python2ts",
  },

  // Libraries & Frameworks
  {
    name: "Ardo",
    repo: "sebastian-software/ardo",
    icon: "BookOpen",
    category: "Libraries & Frameworks",
    description: "React-first static documentation framework",
    detail:
      "Build beautiful documentation sites with React components as first-class citizens. Ardo generates fully static output with zero client-side JS by default, supports MDX, and ships with a fast dev server for instant feedback while writing docs.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "ardo",
  },
  {
    name: "xlsx-format",
    repo: "sebastian-software/xlsx-format",
    icon: "Sheet",
    category: "Libraries & Frameworks",
    description:
      "Modern XLSX reader/writer — TypeScript rewrite of SheetJS (XLSX only)",
    detail:
      "A ground-up TypeScript rewrite of the SheetJS core, focused exclusively on XLSX. Smaller bundle, full type safety, and a modern API that makes reading and writing Excel files straightforward without the legacy baggage of the original library.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "xlsx-format",
  },
  {
    name: "ts-phonenumber",
    repo: "sebastian-software/ts-phonenumber",
    icon: "Phone",
    category: "Libraries & Frameworks",
    description:
      "Modern TypeScript-first phone number parsing, formatting, and validation",
    detail:
      "A lightweight alternative to libphonenumber-js built entirely in TypeScript. Parses, validates, and formats international phone numbers with full metadata for 200+ countries — all with tree-shakeable exports and zero native dependencies.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "ts-phonenumber",
  },

  // Native Node.js Bindings (Rust/C++ core with Node.js API)
  {
    name: "Ferromark",
    repo: "sebastian-software/ferromark",
    icon: "FileText",
    category: "Native Node.js Bindings",
    description:
      "Markdown to HTML at 309 MiB/s — full CommonMark + all GFM extensions",
    detail:
      "The fastest Markdown-to-HTML converter available for Node.js. Powered by a Rust core via native bindings, Ferromark processes CommonMark and all GitHub Flavored Markdown extensions at 309 MiB/s — orders of magnitude faster than pure-JS alternatives.",
    highlight: "309 MiB/s",
    license: "Apache-2.0",
    ecosystem: "crate",
    npm: "ferromark",
  },
  {
    name: "Ferroni",
    repo: "sebastian-software/ferroni",
    icon: "Regex",
    category: "Native Node.js Bindings",
    description:
      "Pure-Rust Oniguruma regex engine with SIMD-accelerated search",
    detail:
      "Brings the power of the Oniguruma regex engine to Node.js through pure Rust bindings. SIMD-accelerated matching delivers up to 6x the throughput of the standard JS RegExp engine for complex patterns used in syntax highlighting and text processing.",
    highlight: "6x faster",
    license: "Apache-2.0",
    ecosystem: "crate",
    npm: "ferroni",
  },
  {
    name: "turndown-node",
    repo: "sebastian-software/turndown-node",
    icon: "FileDown",
    category: "Native Node.js Bindings",
    description:
      "Convert HTML to Markdown — native Node.js bindings for Rust implementation",
    detail:
      "Turn any HTML into clean Markdown at native speed. Built on a Rust HTML parser with Node.js bindings, turndown-node is 18x faster than the original JavaScript Turndown library while producing identical output for all supported HTML elements.",
    highlight: "18x faster",
    license: "Apache-2.0",
    ecosystem: "crate",
    npm: "turndown-node",
  },

  // AI & Speech
  {
    name: "Parakeet CoreML",
    repo: "sebastian-software/parakeet-coreml",
    icon: "Mic",
    category: "AI & Speech",
    description:
      "NVIDIA Parakeet TDT ASR for Node.js with CoreML/ANE acceleration",
    detail:
      "Run NVIDIA's state-of-the-art Parakeet TDT speech recognition model directly in Node.js on Apple Silicon. Leverages CoreML and the Apple Neural Engine for 40x real-time transcription speed — no Python, no GPU server, just fast local inference.",
    highlight: "40x real-time",
    license: "Apache-2.0",
    ecosystem: "app",
  },
  {
    name: "Whisper CoreML",
    repo: "sebastian-software/whisper-coreml",
    icon: "AudioLines",
    category: "AI & Speech",
    description:
      "OpenAI Whisper ASR for Node.js with CoreML/ANE acceleration on Apple Silicon",
    detail:
      "OpenAI's Whisper model optimized for Apple Silicon via CoreML. Supports 99 languages with automatic language detection, runs entirely on-device using the Neural Engine, and integrates natively with Node.js — no cloud API calls required.",
    highlight: "99 languages",
    license: "MIT",
    ecosystem: "app",
  },

  // Data & Encoding
  {
    name: "pofile-ts",
    repo: "sebastian-software/pofile-ts",
    icon: "Globe",
    category: "Data & Encoding",
    description:
      "Modern library for reading and writing GNU gettext PO files, hand-optimized for speed",
    detail:
      "A complete rewrite of the classic pofile library in modern TypeScript. Hand-optimized parsing is 20x faster than the original while supporting all PO features including plural forms, contexts, and translator comments.",
    highlight: "20x faster",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "pofile-ts",
  },
  {
    name: "Effective Rison",
    repo: "sebastian-software/effective-rison",
    icon: "Braces",
    category: "Data & Encoding",
    description: "URI-friendly JSON encoding with Rison format",
    detail:
      "Encode complex JSON objects into compact, URI-safe strings without percent-encoding overhead. Effective Rison implements the Rison format with a focus on correctness and small bundle size — ideal for passing structured data in URL query parameters.",
    license: "Apache-2.0",
    ecosystem: "npm",
    npm: "effective-rison",
  },
  {
    name: "Offcourse",
    repo: "sebastian-software/offcourse",
    icon: "Download",
    category: "Data & Encoding",
    description:
      "CLI tool to download online courses for offline access with Markdown lesson text",
    detail:
      "Download entire online courses for offline study. Offcourse extracts video, subtitles, and lesson text from popular platforms and saves everything as neatly organized Markdown files — perfect for learning on the go without an internet connection.",
    license: "Apache-2.0",
    ecosystem: "app",
  },
]
