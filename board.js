class Board {
    constructor() {
    }

    // Сбрасывает игровое поле перед началом новой игры
    reset() {
        this.grid = this.getEmptyBoard();
    }

    // Создает матрицу нужного размера
    getEmptyBoard() {
        for (let i = 0; i < ROWS; i++) {
            mas[i] = [];
            for (let j = 0; j < COLS; j++) {
               mas[i][j] = Math.floor(Math.random() * 5);
            }
        }
    }
}