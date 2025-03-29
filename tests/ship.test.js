import Ship from '../src/ship.js';

describe('Ship', () => {
    test('should create a ship with correct length', () => {
        const ship = Ship(3);
        expect(ship.length).toBe(3);
    });

    test('should register hits', () => {
        const ship = Ship(3);
        ship.hit();
        expect(ship.isSunk()).toBe(false);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('should sink when hits equal length', () => {
        const ship = Ship(2);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });
});