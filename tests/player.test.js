import Player from '../src/player.js';
import Gameboard from '../src/gameboard.js';

describe('Player', () => {
    test('human player should attack specific coordinates', () => {
        const player = Player('Human');
        const enemyBoard = Gameboard();
        enemyBoard.placeShip(0, 0, 2, true);
        const hit = player.attack(enemyBoard, 0, 0);
        expect(hit).toBe(true);
    });

    test('computer player should attack randomly', () => {
        const computer = Player('Computer', true);
        const enemyBoard = Gameboard();
        const hit = computer.attack(enemyBoard); // Random attack
        expect(enemyBoard.missedShots.size).toBeGreaterThanOrEqual(1);
    });
});