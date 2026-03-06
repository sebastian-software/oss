export type Category =
  | "AI & Speech"
  | "Data & Encoding"
  | "Developer Tooling"
  | "Libraries & Frameworks"
  | "Native Node.js Bindings"

export type CategoryIcon =
  | "Blocks"
  | "BrainCircuit"
  | "Cpu"
  | "Database"
  | "Wrench"

export type Ecosystem = "app" | "crate" | "npm"

export type Project = {
  category: Category
  description: string
  detail: string
  ecosystem: Ecosystem
  highlight?: string
  icon: string
  license: string
  name: string
  npm?: string
  repo: string
}
