import { useState } from "react"
import type { Category } from "./types/project"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { CategoryFilter } from "./components/CategoryFilter"
import { ProjectGrid } from "./components/ProjectGrid"
import { Footer } from "./components/Footer"
import "./App.css"

export default function App() {
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
