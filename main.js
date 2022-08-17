const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// Устанавливаем размеры холста
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;


let mas = []

let board = new Board();
let piece = new Piece(ctx);

// старт игры
function play() {
    board.reset();
    piece.draw();
    board.piece = piece;
    setInterval(displacements, 50)
}


canvas.onmousedown = function (event) {
    let cx = Math.floor(event.offsetX / BLOCK_SIZE)
    let cy = Math.floor(event.offsetY / BLOCK_SIZE)
   
    isStreak( cy, cx )
}


function displacements(){
    for (let i = 0; i < mas.length; i++) {
        for (let j = 0; j < mas[i].length; j++) {
            if(mas[i][j]===null){
                if(mas[i][j] !== mas[0][j]){
                    mas[i][j] = mas[i-1][j]
                    mas[i - 1][j]=null
                }else{
                    mas[0][j] = Math.floor(Math.random() * 5) 
                }
            }
        }
    }
    piece.draw();
}



// Проверка на группу сбора
function isStreak( row, col ) {
	return isVerticalStreak( row, col );
}

// Проверка на группу сбора по колонкам
function isVerticalStreak( row, col ) {
    
	let gemValue = mas[row][col];
	let tmp = row;

	while(tmp > 0 && mas[tmp - 1][col] == gemValue){
	    tmp--;
      
        mas[tmp][col]=mas[row][col]=null
	}

	tmp = row;

	while(tmp < ROWS - 1 && mas[tmp + 1][col] == gemValue){
		tmp++; 
        
         mas[tmp][col]=mas[row][col]=null
	}
     tmp = col;

	while(tmp > 0 && mas[row][tmp - 1] == gemValue){
		tmp--;
       
        mas[row][tmp]=mas[row][col]=null
	}

	tmp = col;

	while(tmp <COLS - 1 && mas[row][tmp + 1] == gemValue){
		tmp++;
       
        mas[row][tmp]=mas[row][col]=null
	}
 	
}


// Проверка на группу сбора по строкам
function isHorizontalStreak( row, col ) {
	let gemValue = mas[row][col];
	
	let tmp = col;

	while(tmp > 0 && mas[row][tmp - 1] == gemValue){
		tmp--;
       
        mas[row][tmp]=mas[row][col]=null
	}

	tmp = col;

	while(tmp <COLS - 1 && mas[row][tmp + 1] == gemValue){
		tmp++;
       
        mas[row][tmp]=mas[row][col]=null
	}
  
}
