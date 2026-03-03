import { Github } from "lucide-react"
import type { Project } from "../types/project"
import { iconMap } from "../data/icons"
import { Badge } from "./Badge"
import "./ProjectCard.css"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon]

  return (
    <a
      href={`https://github.com/${project.repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card-header">
        <div className="project-card-title">
          {Icon && <Icon size={20} className="project-card-icon" />}
          <h3>{project.name}</h3>
        </div>
        <Github size={16} className="project-card-github" />
      </div>

      <p className="project-card-tagline">{project.description}</p>

      {project.highlight && (
        <span className="project-card-highlight">{project.highlight}</span>
      )}

      <p className="project-card-detail">{project.detail}</p>

      <div className="project-card-footer" onClick={(e) => e.preventDefault()}>
        <Badge
          repo={project.repo}
          license={project.license}
          ecosystem={project.ecosystem}
        />
      </div>
    </a>
  )
}
