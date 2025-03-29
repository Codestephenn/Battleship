import Game from '../src/game.js';

describe('Game', () => {
    let game;

    beforeEach(() => {
        game = Game();
    });

    test('should place computer ships randomly', () => {
        let shipCount = 0;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (game.computerBoard.board[i][j]) shipCount++;
            }
        }
        expect(shipCount).toBe(17); // 5 + 4 + 3 + 3 + 2
    });

    test('should end game when all ships sunk', () => {
        game.playerBoard.placeShip(0, 0, 2, true);
        game.playTurn(0, 0); // Player attacks computer (ignored here)
        game.playerBoard.receiveAttack(0, 0);
        game.playerBoard.receiveAttack(0, 1);
        const result = game.playTurn(0, 0); // Computer's turn
        expect(result).toMatch(/Computer wins!/);
    });
});