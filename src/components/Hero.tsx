import { projects } from "../data/projects"
import "./Hero.css"

export function Hero() {
  const uniqueCategories = new Set(projects.map((p) => p.category)).size
  const languages = ["TypeScript", "Rust", "Python", "Swift"]

  return (
    <section className="hero">
      <h1>Open Source</h1>
      <p className="hero-subtitle">
        Most companies our size maintain a blog and maybe a CLI tool. We
        maintain 16 production-grade open source projects across four languages.
        TypeScript developer tooling that handles the config you never want to
        touch. Rust-native Node.js bindings that process Markdown at 309 MiB/s
        and regex at 6x native speed. On-device speech recognition for Apple
        Silicon that transcribes at 40x real-time. Every project tested,
        documented, and shipped to npm. This is what we do instead of meetings.
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
