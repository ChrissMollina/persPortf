// Page footer with social links and copyright
export default function Footer() {
  // Current year for the copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Social profile links */}
        <nav className="footer-links">
          <a
            href="https://github.com/ChrissMollina"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/christian-molina-535886222"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </nav>

        {/* Copyright notice */}
        <p>© {currentYear} Christian Molina</p>
      </div>
    </footer>
  );
}
