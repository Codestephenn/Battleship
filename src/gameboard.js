import Ship from './ship.js';

const Gameboard = () => {
    const board = Array(10).fill().map(() => Array(10).fill(null));
    const ships = [];
    const missedShots = new Set();

    const placeShip = (x, y, length, isHorizontal) => {
        const ship = Ship(length);
        ships.push(ship);
        if (isHorizontal) {
            for (let i = 0; i < length; i++) board[x][y + i] = ship;
        } else {
            for (let i = 0; i < length; i++) board[x + i][y] = ship;
        }
    };

    const receiveAttack = (x, y) => {
        if (board[x][y] === null) {
            missedShots.add(`${x},${y}`);
            return false;
        }
        board[x][y].hit();
        return true;
    };

    const allSunk = () => ships.every(ship => ship.isSunk());

    const canPlaceShip = (x, y, length, isHorizontal) => {
        if (isHorizontal) {
            if (y + length > 10) return false;
            for (let i = 0; i < length; i++) if (board[x][y + i] !== null) return false;
        } else {
            if (x + length > 10) return false;
            for (let i = 0; i < length; i++) if (board[x + i][y] !== null) return false;
        }
        return true;
    };

    const isValidMove = (x, y) => !missedShots.has(`${x},${y}`) && x >= 0 && x < 10 && y >= 0 && y < 10;

    return { placeShip, receiveAttack, allSunk, canPlaceShip, isValidMove, board, missedShots };
};

export default Gameboard;