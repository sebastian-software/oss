import { Link } from "react-router"

import "./Footer.css"

export function Footer(): React.JSX.Element {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; 2014&ndash;{new Date().getFullYear()} <a href="https://sebastian-software.com" rel="noopener noreferrer" target="_blank">Sebastian Software GmbH</a></span>
        <nav aria-label="Footer" className="footer-links">
          <a
            href="https://github.com/sebastian-software"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://sebastian-software.com"
            rel="noopener noreferrer"
            target="_blank"
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
