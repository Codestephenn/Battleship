const renderBoard = (boardEl, gameBoard, hideShips = false) => {
    boardEl.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = i;
            cell.dataset.y = j;

            if (gameBoard.missedShots.has(`${i},${j}`)) {
                cell.classList.add('miss');
            } else if (gameBoard.board[i][j]) {
                if (gameBoard.board[i][j].isSunk()) {
                    cell.classList.add('sunk');
                } else if (!hideShips) {
                    cell.classList.add('ship');
                }
                if (gameBoard.board[i][j].getHits() > 0 && !gameBoard.board[i][j].isSunk()) {
                    cell.classList.add('hit'); // Apply red only if hit but not sunk
                }
            }

            boardEl.appendChild(cell);
        }
    }
};