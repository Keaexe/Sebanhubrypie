import GameCard from './GameCard'
import './GameGrid.css'

const jeux = [
  {
    id: 1,
    nom: 'Snake',
    description: 'Mange les pommes, grandis et évite de te mordre la queue',
    joueurs: 1
  },
  {
    id: 2,
    nom: 'Échecs',
    description: 'Le grand classique de la stratégie, en partie à deux',
    joueurs: 2
  },
  {
    id: 3,
    nom: 'Dames',
    description: 'Des ronds blancs et noir qui existent uniquement pour bouffer et ragebait leurs adversaires',
    joueurs: 2
  },
  {
    id: 4,
    nom: 'Démineur',
    description: 'Dégage toute la grille sans jamais toucher une mine',
    joueurs: 1
  }
]

function GameGrid() {
  return (
    <section className="game-section">
      <div className="game-section-header">
        <h1>Choisis ton jeu</h1>
        <p>{jeux.length} jeux disponibles</p>
      </div>

      <div className="game-grid">
        {jeux.map((jeu) => (
          <GameCard
            key={jeu.id}
            nom={jeu.nom}
            description={jeu.description}
            joueurs={jeu.joueurs}
          />
        ))}
      </div>
    </section>
  )
}

export default GameGrid
