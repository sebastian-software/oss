import { useState } from "react"

import type { Category } from "../types/project"
import type { Route } from "./+types/home"

import { CategoryFilter } from "../components/CategoryFilter"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ProjectGrid } from "../components/ProjectGrid"

export function meta(_arguments: Route.MetaArgs): Route.MetaDescriptors {
  return [
    { title: "Open Source — Sebastian Software" },
    {
      content:
        "Open-source projects by Sebastian Software GmbH — developer tooling, Rust-powered performance, AI & speech, and more.",
      name: "description",
    },
  ]
}

export default function Home(): React.JSX.Element {
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
