import Gameboard from './gameboard.js';
import Player from './player.js';

const Game = () => {
    const player1 = Player('Player 1');
    const computer = Player('Computer', true);
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();
    let currentPlayer = player1;
    let gameOver = false;

    const placeShipsRandomly = (board) => {
        const ships = [5, 4, 3, 3, 2];
        ships.forEach(length => {
            let placed = false;
            while (!placed) {
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);
                const isHorizontal = Math.random() > 0.5;
                if (board.canPlaceShip(x, y, length, isHorizontal)) {
                    board.placeShip(x, y, length, isHorizontal);
                    placed = true;
                }
            }
        });
    };

    const switchTurn = () => {
        currentPlayer = currentPlayer === player1 ? computer : player1;
    };

    const playTurn = (x, y) => {
        if (gameOver) return "Game Over!";
        
        const enemyBoard = currentPlayer === player1 ? computerBoard : playerBoard;
        const hit = currentPlayer.attack(enemyBoard, x, y);
        
        if (enemyBoard.allSunk()) {
            gameOver = true;
            return `${currentPlayer.name} wins!`;
        }
        
        switchTurn();
        return hit ? "Hit!" : "Miss!";
    };

    placeShipsRandomly(computerBoard);

    return { playTurn, playerBoard, computerBoard, placeShipsRandomly };
};

export default Game;