import { Link } from "react-router"
import "./Footer.css"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {new Date().getFullYear()} Sebastian Software GmbH</span>
        <nav className="footer-links" aria-label="Footer">
          <a
            href="https://github.com/sebastian-software"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.sebastian-software.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
          <Link to="/imprint">Legal Notice</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  )
}
