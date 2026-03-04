import { categories, projects } from "../data/projects"
import { iconMap } from "../data/icons"
import type { Category } from "../types/project"
import { ProjectCard } from "./ProjectCard"
import "./ProjectGrid.css"

interface ProjectGridProps {
  filter: Category | null
}

export function ProjectGrid({ filter }: ProjectGridProps) {
  const visibleCategories = filter
    ? categories.filter((c) => c.name === filter)
    : categories

  return (
    <div className="project-grid-wrapper">
      {visibleCategories.map((cat) => {
        const catProjects = projects.filter((p) => p.category === cat.name)
        if (catProjects.length === 0) return null

        const Icon = iconMap[cat.icon]

        return (
          <section key={cat.name} className="category-section">
            <h2 className="category-heading">
              {Icon && <Icon size={22} className="category-heading-icon" />}
              {cat.name}
              <span className="category-count">{catProjects.length}</span>
            </h2>
            <div className="project-grid">
              {catProjects.map((project) => (
                <ProjectCard key={project.repo} project={project} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
