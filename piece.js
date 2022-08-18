class Piece {
    constructor(ctx) {
        this.ctx = ctx;
        this.color = COLORS[Math.floor(Math.random() * 4)];
    }

    draw() {
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                this.ctx.beginPath();
                this.ctx.fillStyle =COLORS[mas[i][j]];
                this.ctx.arc((j * CELL_SIZE)+25, (i * CELL_SIZE)+25, RADIUS, 0, Math.PI*2);
                ctx.fill();
            }
        }
    }
}