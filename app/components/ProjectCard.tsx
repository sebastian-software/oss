import { Github } from "lucide-react"

import type { Project } from "../types/project"

import { iconMap } from "../data/icons"
import { Badge } from "./Badge"
import "./ProjectCard.css"

type ProjectCardProperties = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProperties): React.JSX.Element {
  const Icon = iconMap[project.icon]

  return (
    <a
      className="project-card"
      href={`https://github.com/${project.repo}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="project-card-header">
        <div className="project-card-title">
          {Icon ? <Icon className="project-card-icon" size={20} /> : null}
          <h3>{project.name}</h3>
        </div>
        <Github className="project-card-github" size={16} />
      </div>

      <p className="project-card-tagline">{project.description}</p>

      {project.highlight != null && project.highlight !== "" ? (
        <span className="project-card-highlight">{project.highlight}</span>
      ) : null}

      <p className="project-card-detail">{project.detail}</p>

      <div className="project-card-footer" onClick={(event) => { event.preventDefault(); }} role="presentation">
        <Badge
          ecosystem={project.ecosystem}
          license={project.license}
          repo={project.repo}
        />
      </div>
    </a>
  )
}
