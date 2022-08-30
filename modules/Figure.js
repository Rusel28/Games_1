
class Figure {
    constructor(COLS, ROWS, CELL_SIZE, RADIUS, COLORS, ctx,matrix) {
        this.cols = COLS;
        this.rows = ROWS;
        this.cell_size = CELL_SIZE;
        this.radius = RADIUS;
        this.color = COLORS;
        this.ctx = ctx;
        this.matrix = matrix;
    }

    drawFigures() {
        for (let i = 0; i <  this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.color[this.matrix[i][j]];
                this.ctx.arc((j * this.cell_size)+25, (i * this.cell_size)+25, this.radius, 0, Math.PI*2);
                this.ctx.fill();
            }
        }
    }
}

export default Figure