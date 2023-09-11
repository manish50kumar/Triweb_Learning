import GameState from "./GameState";


function GameOver({gameState}) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>
        case GameState.playerOwin:
            return <div className="game-over">O wins</div>
        case GameState.playerXwin:
            return <div className="game-over">X wins</div>
        case GameState.draw:
            return <div className="game-over">Draw</div>
        default:
            return <></>
    } 
}
export default GameOver;