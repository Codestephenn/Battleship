const Player = (name, isComputer = false) => {
    const attack = (enemyBoard, x, y) => {
        if (isComputer) {
            let valid = false;
            while (!valid) {
                x = Math.floor(Math.random() * 10);
                y = Math.floor(Math.random() * 10);
                valid = enemyBoard.isValidMove(x, y);
            }
        }
        return enemyBoard.receiveAttack(x, y);
    };

    return { name, attack, isComputer };
};

export default Player;