
class Board {
    constructor(COLS, ROWS, CELL_SIZE, ctx,matrix) {
        this.cols = COLS;
        this.rows = ROWS;
        this.cell_size = CELL_SIZE;
        this.ctx = ctx;
        this.matrix = matrix;
    }

    //Отрисовка поля
    drawBox() {
        this.ctx.canvas.width = this.cols * this.cell_size;
        this.ctx.canvas.height = this.rows * this.cell_size;
    }

    // Создает матрицу нужного размера
    getMatrix() {
        for (let i = 0; i < this.rows; i++) {
            this.matrix[i] = new Array();
            for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] = Math.floor(Math.random() * 5);
            }
        }
        return this.matrix
    }
}

export default Board
