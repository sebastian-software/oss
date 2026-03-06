import { Github } from "lucide-react"

import logoSoftware from "../assets/logo-software.svg"
import "./Header.css"

export function Header(): React.JSX.Element {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="header-brand" href="https://oss.sebastian-software.de">
          <img
            alt="Sebastian Software"
            className="header-logo"
            src={logoSoftware}
          />
        </a>
        <a
          className="header-github"
          href="https://github.com/sebastian-software"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}
