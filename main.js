const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
let counter = document.getElementById('counter');

// Устанавливаем размеры холста
ctx.canvas.width = COLS * CELL_SIZE;
ctx.canvas.height = ROWS * CELL_SIZE;

let scoreCounter = 0;
let mas = [];

let board = new Board();
let piece = new Piece(ctx);

// старт игры
function play() {
    scoreCounter = 0;
    board.reset();
    piece.draw();
    board.piece = piece;
    setInterval(displacements, 50);
}


canvas.onmousedown = function (event) {
    let cx = Math.floor(event.offsetX / CELL_SIZE);
    let cy = Math.floor(event.offsetY / CELL_SIZE);
    isStreak(cy, cx);
}

function displacements() {

    counter.innerText = scoreCounter;

    for (let i = 0; i < mas.length; i++) {
        for (let j = 0; j < mas[i].length; j++) {
            if (mas[i][j] === null) {
                if (mas[i][j] !== mas[0][j]) {
                    mas[i][j] = mas[i - 1][j];
                    mas[i - 1][j] = null;
                }
                else {
                    mas[0][j] = Math.floor(Math.random() * 5);
                    scoreCounter++;
                }
            }
        }
    }
    piece.draw();
}



// Проверка на группу сбора

function isStreak(row, col) {

    let gemValue = mas[row][col];
    let tmp = row;

    while (tmp > 0 && mas[tmp - 1][col] == gemValue) {
        tmp--;
        mas[tmp][col] = mas[row][col] = null;
    }

    tmp = row;

    while (tmp < ROWS - 1 && mas[tmp + 1][col] == gemValue) {
        tmp++;
        mas[tmp][col] = mas[row][col] = null;
    }

    tmp = col;

    while (tmp > 0 && mas[row][tmp - 1] == gemValue) {
        tmp--;
        mas[row][tmp] = mas[row][col] = null;
    }

    tmp = col;

    while (tmp < COLS - 1 && mas[row][tmp + 1] == gemValue) {
        tmp++;
        mas[row][tmp] = mas[row][col] = null;
    }
}



