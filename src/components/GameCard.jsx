import './GameCard.css'

function GameCard({ nom, description, joueurs }) {
  return (
    <article className="game-card">
      <div className="game-illustration">
        <h2>{nom}</h2>
      </div>

      <div className="game-info">
        <div className="game-description">
          <p>{description}</p>
          <span>{joueurs} joueur{joueurs > 1 ? 's' : ''}</span>
        </div>

        <button className="play-button" disabled>
          Jouer
        </button>
      </div>
    </article>
  )
}

export default GameCard
