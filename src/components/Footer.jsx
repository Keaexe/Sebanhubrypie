import './Footer.css'

function Footer() {
  return (
    <footer>
      <p>© 2026 Sebanhubrypie</p>

      <div className="footer-links">
        <a href="#apropos">À propos</a>
        <a href="#regles">Règles des jeux</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="https://github.com/Sbyspaceopera/Sebanhubrypie"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-github"
        aria-label="Code source sur GitHub"
      >
        &lt;/&gt;
      </a>
    </footer>
  )
}

export default Footer
