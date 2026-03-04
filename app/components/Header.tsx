import { Github } from "lucide-react"
import logoSoftware from "../assets/logo-software.svg"
import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="https://sebastian-software.com" className="header-brand">
          <img
            src={logoSoftware}
            alt="Sebastian Software"
            className="header-logo"
          />
        </a>
        <a
          href="https://github.com/sebastian-software"
          target="_blank"
          rel="noopener noreferrer"
          className="header-github"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}
