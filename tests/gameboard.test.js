import Gameboard from '../src/gameboard.js';

describe('Gameboard', () => {
    let board;

    beforeEach(() => {
        board = Gameboard();
    });

    test('should place ship horizontally', () => {
        board.placeShip(0, 0, 3, true);
        expect(board.board[0][0]).not.toBeNull();
        expect(board.board[0][1]).not.toBeNull();
        expect(board.board[0][2]).not.toBeNull();
        expect(board.board[0][3]).toBeNull();
    });

    test('should place ship vertically', () => {
        board.placeShip(0, 0, 3, false);
        expect(board.board[0][0]).not.toBeNull();
        expect(board.board[1][0]).not.toBeNull();
        expect(board.board[2][0]).not.toBeNull();
        expect(board.board[3][0]).toBeNull();
    });

    test('should register attack as miss', () => {
        board.receiveAttack(0, 0);
        expect(board.missedShots.has('0,0')).toBe(true);
    });

    test('should register attack as hit', () => {
        board.placeShip(0, 0, 2, true);
        const hit = board.receiveAttack(0, 0);
        expect(hit).toBe(true);
        expect(board.missedShots.has('0,0')).toBe(false);
    });

    test('should detect all ships sunk', () => {
        board.placeShip(0, 0, 2, true);
        board.receiveAttack(0, 0);
        board.receiveAttack(0, 1);
        expect(board.allSunk()).toBe(true);
    });
});