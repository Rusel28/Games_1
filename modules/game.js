
//перемещение элемента вниз

let scoreCounter = 0;

function displacements(matrix, counter) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === null) {
                if (matrix[i][j] !== matrix[0][j]) {
                    matrix[i][j] = matrix[i - 1][j];
                    matrix[i - 1][j] = null;
                } else {
                    matrix[0][j] = Math.floor(Math.random() * 5);
                    scoreCounter++;
                }
            }
        }
    }
    counter.innerText = scoreCounter;
}


// Проверка на группу сбора

function isStreak(row, col, matrix, COLS, ROWS) {

    let gemValue = matrix[row][col];
    let tmp = row;

    while (tmp > 0 && matrix[tmp - 1][col] == gemValue) {
        tmp--;
        matrix[tmp][col] = matrix[row][col] = null
    }

    tmp = row;

    while (tmp < ROWS - 1 && matrix[tmp + 1][col] == gemValue) {
        tmp++;
        matrix[tmp][col] = matrix[row][col] = null
    }
    tmp = col;

    while (tmp > 0 && matrix[row][tmp - 1] == gemValue) {
        tmp--;
        matrix[row][tmp] = matrix[row][col] = null
    }

    tmp = col;

    while (tmp < COLS - 1 && matrix[row][tmp + 1] == gemValue) {
        tmp++;
        matrix[row][tmp] = matrix[row][col] = null
    }
}

export { displacements, isStreak }