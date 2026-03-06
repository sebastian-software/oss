import { defineConfig } from "vite"
import ardo from "ardo/vite"

export default defineConfig({
  plugins: [
    ardo({
      title: "Open Source — Sebastian Software",
      description:
        "Open-source projects by Sebastian Software GmbH — developer tooling, Rust-powered performance, AI & speech, and more.",
      githubPages: false,
    }),
  ],
})
