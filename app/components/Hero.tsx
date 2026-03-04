import { projects } from "../data/projects"
import "./Hero.css"

export function Hero() {
  const uniqueCategories = new Set(projects.map((p) => p.category)).size
  const languages = ["TypeScript", "Rust", "Python", "Swift"]

  return (
    <section className="hero">
      <h1>Open Source</h1>
      <p className="hero-subtitle">
        Open source shaped our careers — from leading Qooxdoo at 1&amp;1 over a
        decade ago to the tools we rely on every day. We&apos;re grateful for
        that, and we give back. Today we maintain {projects.length}{" "}
        production-grade projects across four languages: TypeScript developer
        tooling that handles the config you never want to touch. Rust-native
        Node.js bindings that process Markdown at 309 MiB/s and regex at 6x
        native speed. On-device speech recognition for Apple Silicon at 40x
        real-time. Every project tested, documented, and shipped — because the
        community that shaped us deserves our best work.
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
