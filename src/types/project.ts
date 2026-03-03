export type Category =
  | "Developer Tooling"
  | "Libraries & Frameworks"
  | "Native Node.js Bindings"
  | "AI & Speech"
  | "Data & Encoding"

export type CategoryIcon =
  | "Wrench"
  | "Blocks"
  | "Cpu"
  | "BrainCircuit"
  | "Database"

export type Ecosystem = "npm" | "crate" | "app"

export interface Project {
  name: string
  repo: string
  icon: string
  category: Category
  description: string
  detail: string
  license: string
  ecosystem: Ecosystem
  highlight?: string
  npm?: string
}
