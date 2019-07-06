module.exports = function solveSudoku(matrix) {
  let sudoku = matrix;

  let checkIfValid = function (sudoku, row, col, n) {
    for (let i = 0; i < 9; i++) {
      let v = Math.floor(row / 3) * 3 + Math.floor(i / 3);
      let h = Math.floor(col / 3) * 3 + i % 3;
      if (sudoku[row][i] === n || sudoku[i][col] === n || sudoku[v][h] === n) {
        return false;
      }
    }
    return true;
  }

  let completeBoard = function (sudoku) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoku[i][j] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (checkIfValid(sudoku, i, j, n)) {
              sudoku[i][j] = n;
              if (completeBoard(sudoku)) {
                return true;
              } else {
                sudoku[i][j] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  completeBoard(sudoku);
  return sudoku;
}
