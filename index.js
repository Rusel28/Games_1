import Board from './modules/Board.js';
import Figure from './modules/Figure.js';
import { COLS, ROWS, CELL_SIZE, RADIUS, COLORS } from './modules/constants.js';
import { displacements, isStreak } from './modules/game.js';

const play = document.getElementById('play');
let counter = document.getElementById('counter');

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

let matrix = []

const board = new Board(COLS, ROWS, CELL_SIZE, ctx, matrix)
const figure = new Figure(COLS, ROWS, CELL_SIZE, RADIUS, COLORS, ctx, matrix)

function start() {
  return board.drawBox();
}
start()


play.addEventListener('click', () => {
  board.getMatrix();
  setInterval(() => {
    displacements(matrix, counter)
    figure.drawFigures();
  }, 50)
})


canvas.onmousedown =  (event)=> {
  let cx = Math.floor(event.offsetX / CELL_SIZE)
  let cy = Math.floor(event.offsetY / CELL_SIZE)
  isStreak(cy, cx, matrix, COLS, ROWS)
}







