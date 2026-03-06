import type { Category } from "../types/project"

import { iconMap } from "../data/icons"
import { categories, projects } from "../data/projects"
import { ProjectCard } from "./ProjectCard"
import "./ProjectGrid.css"

type ProjectGridProperties = {
  filter: Category | null
}

export function ProjectGrid({ filter }: ProjectGridProperties): React.JSX.Element {
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
          <section className="category-section" key={cat.name}>
            <h2 className="category-heading">
              {Icon ? <Icon className="category-heading-icon" size={22} /> : null}
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
