import type { Category, CategoryIcon, Project } from "../types/project"

const DEVELOPER_TOOLING: Category = "Developer Tooling"
const LIBRARIES_FRAMEWORKS: Category = "Libraries & Frameworks"
const NATIVE_BINDINGS: Category = "Native Node.js Bindings"
const AI_SPEECH: Category = "AI & Speech"
const DATA_ENCODING: Category = "Data & Encoding"
const LICENSE_APACHE: Project["license"] = "Apache-2.0"

export const categories: Array<{ icon: CategoryIcon; name: Category; }> = [
  { icon: "Wrench", name: DEVELOPER_TOOLING },
  { icon: "Blocks", name: LIBRARIES_FRAMEWORKS },
  { icon: "Cpu", name: NATIVE_BINDINGS },
  { icon: "BrainCircuit", name: AI_SPEECH },
  { icon: "Database", name: DATA_ENCODING },
]

export const projects: Project[] = [
  // Developer Tooling
  {
    category: DEVELOPER_TOOLING,
    description:
      "Pre-generated ESLint flat configs for TypeScript & React — 25 plugins, AI mode, OxLint-ready",
    detail:
      "Stop spending hours assembling ESLint configs from scratch. This package ships pre-generated flat configs that bundle 25 curated plugins for TypeScript and React projects. Includes an AI-assisted mode for intelligent rule tuning and is fully compatible with the emerging OxLint ecosystem.",
    ecosystem: "npm",
    icon: "Settings",
    license: LICENSE_APACHE,
    name: "ESLint Config Setup",
    npm: "eslint-config-setup",
    repo: "sebastian-software/eslint-config-setup",
  },
  {
    category: DEVELOPER_TOOLING,
    description: "ESLint plugin for Lingui with TypeScript type-aware rules",
    detail:
      "Catches i18n mistakes at lint time instead of runtime. This plugin adds type-aware ESLint rules specifically designed for Lingui projects using TypeScript, ensuring translation keys are correct and message descriptors follow best practices.",
    ecosystem: "npm",
    icon: "Languages",
    license: "MIT",
    name: "ESLint Plugin Lingui TS",
    npm: "eslint-plugin-lingui-typescript",
    repo: "sebastian-software/eslint-plugin-lingui-typescript",
  },
  {
    category: DEVELOPER_TOOLING,
    description:
      "Interactive tool for managing end-of-life of your npm packages",
    detail:
      "Gracefully retire npm packages without breaking downstream users. npm-sweep provides an interactive CLI that helps you deprecate, unpublish, or transfer ownership of packages while notifying dependents and keeping the registry clean.",
    ecosystem: "npm",
    icon: "Trash2",
    license: LICENSE_APACHE,
    name: "npm-sweep",
    npm: "npm-sweep",
    repo: "sebastian-software/npm-sweep",
  },
  {
    category: DEVELOPER_TOOLING,
    description: "Capture full-page screenshots at any viewport size",
    detail:
      "Generate pixel-perfect full-page screenshots across any viewport width for visual regression testing or documentation. Built on Playwright, ResponsiveShot handles lazy-loaded content, sticky headers, and infinite scroll pages out of the box.",
    ecosystem: "app",
    icon: "Camera",
    license: LICENSE_APACHE,
    name: "ResponsiveShot",
    repo: "sebastian-software/responsive-shot",
  },
  {
    category: DEVELOPER_TOOLING,
    description:
      "TypeScript-based Python to TypeScript transpiler using real AST transformation",
    detail:
      "Migrate Python codebases to TypeScript with confidence. Unlike regex-based converters, python2ts parses Python into a full AST and produces idiomatic TypeScript output — preserving type hints, class hierarchies, and module structure.",
    ecosystem: "npm",
    icon: "ArrowRightLeft",
    license: LICENSE_APACHE,
    name: "python2ts",
    npm: "python2ts",
    repo: "sebastian-software/python2ts",
  },

  // Libraries & Frameworks
  {
    category: LIBRARIES_FRAMEWORKS,
    description: "React-first static documentation framework",
    detail:
      "Build beautiful documentation sites with React components as first-class citizens. Ardo generates fully static output with zero client-side JS by default, supports MDX, and ships with a fast dev server for instant feedback while writing docs.",
    ecosystem: "npm",
    icon: "BookOpen",
    license: LICENSE_APACHE,
    name: "Ardo",
    npm: "ardo",
    repo: "sebastian-software/ardo",
  },
  {
    category: LIBRARIES_FRAMEWORKS,
    description:
      "Modern XLSX reader/writer — TypeScript rewrite of SheetJS (XLSX only)",
    detail:
      "A ground-up TypeScript rewrite of the SheetJS core, focused exclusively on XLSX. Smaller bundle, full type safety, and a modern API that makes reading and writing Excel files straightforward without the legacy baggage of the original library.",
    ecosystem: "npm",
    icon: "Sheet",
    license: LICENSE_APACHE,
    name: "xlsx-format",
    npm: "xlsx-format",
    repo: "sebastian-software/xlsx-format",
  },
  {
    category: LIBRARIES_FRAMEWORKS,
    description:
      "Modern TypeScript-first phone number parsing, formatting, and validation",
    detail:
      "A lightweight alternative to libphonenumber-js built entirely in TypeScript. Parses, validates, and formats international phone numbers with full metadata for 200+ countries — all with tree-shakeable exports and zero native dependencies.",
    ecosystem: "npm",
    icon: "Phone",
    license: LICENSE_APACHE,
    name: "ts-phonenumber",
    npm: "ts-phonenumber",
    repo: "sebastian-software/ts-phonenumber",
  },

  // Native Node.js Bindings (Rust/C++ core with Node.js API)
  {
    category: NATIVE_BINDINGS,
    description:
      "Markdown to HTML at 309 MiB/s — full CommonMark + all GFM extensions",
    detail:
      "The fastest Markdown-to-HTML converter available for Node.js. Powered by a Rust core via native bindings, Ferromark processes CommonMark and all GitHub Flavored Markdown extensions at 309 MiB/s — orders of magnitude faster than pure-JS alternatives.",
    ecosystem: "crate",
    highlight: "309 MiB/s",
    icon: "FileText",
    license: LICENSE_APACHE,
    name: "Ferromark",
    npm: "ferromark",
    repo: "sebastian-software/ferromark",
  },
  {
    category: NATIVE_BINDINGS,
    description:
      "Pure-Rust Oniguruma regex engine with SIMD-accelerated search",
    detail:
      "Brings the power of the Oniguruma regex engine to Node.js through pure Rust bindings. SIMD-accelerated matching delivers up to 6x the throughput of the standard JS RegExp engine for complex patterns used in syntax highlighting and text processing.",
    ecosystem: "crate",
    highlight: "6x faster",
    icon: "Regex",
    license: LICENSE_APACHE,
    name: "Ferroni",
    npm: "ferroni",
    repo: "sebastian-software/ferroni",
  },
  {
    category: NATIVE_BINDINGS,
    description:
      "Convert HTML to Markdown — native Node.js bindings for Rust implementation",
    detail:
      "Turn any HTML into clean Markdown at native speed. Built on a Rust HTML parser with Node.js bindings, turndown-node is 18x faster than the original JavaScript Turndown library while producing identical output for all supported HTML elements.",
    ecosystem: "crate",
    highlight: "18x faster",
    icon: "FileDown",
    license: LICENSE_APACHE,
    name: "turndown-node",
    npm: "turndown-node",
    repo: "sebastian-software/turndown-node",
  },

  // AI & Speech
  {
    category: AI_SPEECH,
    description:
      "NVIDIA Parakeet TDT ASR for Node.js with CoreML/ANE acceleration",
    detail:
      "Run NVIDIA's state-of-the-art Parakeet TDT speech recognition model directly in Node.js on Apple Silicon. Leverages CoreML and the Apple Neural Engine for 40x real-time transcription speed — no Python, no GPU server, just fast local inference.",
    ecosystem: "app",
    highlight: "40x real-time",
    icon: "Mic",
    license: LICENSE_APACHE,
    name: "Parakeet CoreML",
    repo: "sebastian-software/parakeet-coreml",
  },
  {
    category: AI_SPEECH,
    description:
      "OpenAI Whisper ASR for Node.js with CoreML/ANE acceleration on Apple Silicon",
    detail:
      "OpenAI's Whisper model optimized for Apple Silicon via CoreML. Supports 99 languages with automatic language detection, runs entirely on-device using the Neural Engine, and integrates natively with Node.js — no cloud API calls required.",
    ecosystem: "app",
    highlight: "99 languages",
    icon: "AudioLines",
    license: "MIT",
    name: "Whisper CoreML",
    repo: "sebastian-software/whisper-coreml",
  },

  // Data & Encoding
  {
    category: DATA_ENCODING,
    description:
      "Modern library for reading and writing GNU gettext PO files, hand-optimized for speed",
    detail:
      "A complete rewrite of the classic pofile library in modern TypeScript. Hand-optimized parsing is 20x faster than the original while supporting all PO features including plural forms, contexts, and translator comments.",
    ecosystem: "npm",
    highlight: "20x faster",
    icon: "Globe",
    license: LICENSE_APACHE,
    name: "pofile-ts",
    npm: "pofile-ts",
    repo: "sebastian-software/pofile-ts",
  },
  {
    category: DATA_ENCODING,
    description: "URI-friendly JSON encoding with Rison format",
    detail:
      "Encode complex JSON objects into compact, URI-safe strings without percent-encoding overhead. Effective Rison implements the Rison format with a focus on correctness and small bundle size — ideal for passing structured data in URL query parameters.",
    ecosystem: "npm",
    icon: "Braces",
    license: LICENSE_APACHE,
    name: "Effective Rison",
    npm: "effective-rison",
    repo: "sebastian-software/effective-rison",
  },
  {
    category: DATA_ENCODING,
    description:
      "CLI tool to download online courses for offline access with Markdown lesson text",
    detail:
      "Download entire online courses for offline study. Offcourse extracts video, subtitles, and lesson text from popular platforms and saves everything as neatly organized Markdown files — perfect for learning on the go without an internet connection.",
    ecosystem: "app",
    icon: "Download",
    license: LICENSE_APACHE,
    name: "Offcourse",
    repo: "sebastian-software/offcourse",
  },
]
