const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const undoButton = document.getElementById('undo');
const redoButton = document.getElementById('redo');
const resetButton = document.getElementById('reset');
const infoDisplay = document.querySelector("#info");
infoDisplay.textContent = " It is now X's turn ";

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;
let moveHistory = [];
let redoHistory = [];
let moves = 0;

const renderBoard = () => {
    boardElement.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.textContent = cell;
        cellElement.onclick = () => handleCellClick(index);
        boardElement.appendChild(cellElement);
    });
};

const handleCellClick = (index) => {
    
    if (board[index] || !gameActive) return;
    moves++;
    console.log(moves);
    // Save the move to history
    moveHistory.push({ board: [...board], player: currentPlayer });
    redoHistory = []; // Clear the redo history on a new move
    board[index] = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    infoDisplay.textContent = "It is now " + currentPlayer + "'s turn";
    checkGameStatus();
    console.log(board);
    renderBoard();
    checkEndGame();

};

const checkGameStatus = () => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]            // Diagonals
    ];

    for (const combination of winningCombinations) { 
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusElement.textContent = `Player ${board[a]} wins!`;
          
          
            let confettiCounter = 29;
            while (confettiCounter != 0)
            {
                confetti();
                confettiCounter--;
            }

            infoDisplay.textContent = "";
            gameActive = false;
            return;
            
        }
    }

    if (!board.includes(null)) {
        statusElement.textContent = "It's a tie!";
        gameActive = false;
    }
};

const undoMove = () => {
    if (moveHistory.length === 0) return;
    moves--;
    const lastMove = moveHistory.pop();
    redoHistory.push({ board: [...board], player: currentPlayer });
    statusElement.textContent = "";
    board = lastMove.board;
    currentPlayer = lastMove.player;
    infoDisplay.textContent = "It is now " + currentPlayer + "'s turn";
    gameActive = true; 
    renderBoard();
    console.log(board);
    console.log(moveHistory);
    console.log(redoHistory);
    checkEndGame();
};

const redoMove = () => {
    if (redoHistory.length === 0) return;
    moves++;
    const nextMove = redoHistory.pop();
    moveHistory.push({ board: [...board], player: currentPlayer });
    statusElement.textContent = "";
    board = nextMove.board;
    currentPlayer = nextMove.player;
    infoDisplay.textContent = "It is now " + currentPlayer + "'s turn";
    gameActive = true; 
    renderBoard();
    console.log(board);
    console.log(moveHistory);
    console.log(redoHistory);
    checkEndGame();
};


function resetGame()
{
        location.reload();

}

function checkEndGame(){
   
    if(moves == 9){
       infoDisplay.textContent = "DEAD GAME!"
    }
}

resetButton.onclick = resetGame;
undoButton.onclick = undoMove;
redoButton.onclick = redoMove;
renderBoard();


