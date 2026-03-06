import type { Ecosystem } from "../types/project"
import "./Badge.css"

interface BadgeProps {
  repo: string
  license: string
  ecosystem: Ecosystem
}

const ecosystemLabels: Record<Ecosystem, string> = {
  npm: "npm",
  crate: "Rust crate",
  app: "App",
}

export function Badge({ repo, license, ecosystem }: BadgeProps) {
  return (
    <div className="badge-row">
      <span className={`badge-pill badge-ecosystem badge-ecosystem-${ecosystem}`}>
        {ecosystemLabels[ecosystem]}
      </span>
      <span className="badge-pill badge-license">{license}</span>
      <img
        src={`/ext/shields/github/stars/${repo}?style=flat-square&label=&color=888`}
        alt="GitHub stars"
        loading="lazy"
        height="18"
      />
    </div>
  )
}
