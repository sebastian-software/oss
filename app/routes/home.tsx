import { useState } from "react"
import type { Category } from "../types/project"
import type { Route } from "./+types/home"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { CategoryFilter } from "../components/CategoryFilter"
import { ProjectGrid } from "../components/ProjectGrid"
import { Footer } from "../components/Footer"

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Open Source — Sebastian Software" },
    {
      name: "description",
      content:
        "Open-source projects by Sebastian Software GmbH — developer tooling, Rust-powered performance, AI & speech, and more.",
    },
  ]
}

export default function Home() {
  const [filter, setFilter] = useState<Category | null>(null)

  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <CategoryFilter active={filter} onChange={setFilter} />
        <ProjectGrid filter={filter} />
      </main>
      <Footer />
    </>
  )
}
