// Write your code here.

import './index.css'

const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lossImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain, isWon} = props

  const imgUrl = isWon ? wonImg : lossImg
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="win-lose-score-container">
        <h1 className="win-lose-greetings">{gameStatus}</h1>
        <p className="win-loss-score">{scoreLabel}</p>
        <p className="win-loss-s">{score}/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="image" />
    </div>
  )
}

export default WinOrLoseCard
