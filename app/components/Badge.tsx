import type { Ecosystem } from "../types/project"

import "./Badge.css"

type BadgeProperties = {
  ecosystem: Ecosystem
  license: string
  repo: string
}

const ecosystemLabels: Record<Ecosystem, string> = {
  app: "App",
  crate: "Rust crate",
  npm: "npm",
}

export function Badge({ ecosystem, license, repo }: BadgeProperties): React.JSX.Element {
  return (
    <div className="badge-row">
      <span className={`badge-pill badge-ecosystem badge-ecosystem-${ecosystem}`}>
        {ecosystemLabels[ecosystem]}
      </span>
      <span className="badge-pill badge-license">{license}</span>
      <img
        alt="GitHub stars"
        height="18"
        loading="lazy"
        src={`/ext/shields/github/stars/${repo}?style=flat-square&label=&color=888`}
      />
    </div>
  )
}
