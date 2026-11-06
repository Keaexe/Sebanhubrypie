import './MenuDrawer.css'
import { House, UserRound, X } from 'lucide-react'
import logo from '../assets/Logo.png'

function MenuDrawer({ isOpen, onClose, onProfileClick }) {
  if (!isOpen) return null

  const games = ['Snake', 'Échecs', 'Dames', 'Démineur']

  return (
    <div className="menu-overlay" onClick={onClose}>
      <aside
        className="menu-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-top">
          <div className="menu-brand">
            <img src={logo} alt="Logo" />
            <strong>Sebanhubrypie</strong>
          </div>

          <button
            className="menu-close"
            onClick={onClose}
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="menu-navigation">
          <button className="menu-active" onClick={onClose}>
            <House size={18} />
            Accueil
          </button>

          <h3>JEUX</h3>

          {games.map((game) => (
            <button key={game} onClick={onClose}>
              <span className="game-dot"></span>
              {game}
            </button>
          ))}
        </nav>

        <div className="menu-bottom">
          <button onClick={onProfileClick}>
            <UserRound size={19} />
            Mon profil
          </button>
        </div>
      </aside>
    </div>
  )
}

export default MenuDrawer
