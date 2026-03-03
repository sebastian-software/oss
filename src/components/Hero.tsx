import { projects } from "../data/projects"
import "./Hero.css"

export function Hero() {
  const uniqueCategories = new Set(projects.map((p) => p.category)).size
  const languages = ["TypeScript", "Rust", "Python", "Swift"]

  return (
    <section className="hero">
      <h1>Open Source</h1>
      <p className="hero-subtitle">
        Tools, libraries, and engines built by Sebastian Software — from
        developer tooling to Rust-powered performance.
      </p>
      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-value">{projects.length}</span>
          <span className="hero-stat-label">Projects</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-value">{uniqueCategories}</span>
          <span className="hero-stat-label">Categories</span>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <span className="hero-stat-value">{languages.length}</span>
          <span className="hero-stat-label">Languages</span>
        </div>
      </div>
    </section>
  )
}
