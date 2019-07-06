module.exports = function solveSudoku(matrix) {
  // your solution
  let sudoku = matrix;
  let countEmpty = 81;

  let checkIfComplete = function () {
    for (let cellV = 0; cellV < sudoku.length; cellV++) {
      for (let cellH = 0; cellH < sudoku.length; cellH++) {
        if (sudoku[cellV][cellH] === 0) {
          let impossibleValues = {};
          for (let i = 0; i < 9; i++) {
            if (sudoku[cellV][i] !== 0) {
              impossibleValues[sudoku[cellV][i]] = true;
            }
            if (sudoku[i][cellH] !== 0) {
              impossibleValues[sudoku[i][cellH]] = true;
            }
          }
          let vBox = Math.floor(cellV / 3) * 3;
          let hBox = Math.floor(cellH / 3) * 3;
          for (let i = vBox; i < vBox + 3; i++) {
            for (let j = hBox; j < hBox + 3; j++) {
              if (sudoku[i][j] !== 0) {
                impossibleValues[sudoku[i][j]] = true;
              }
            }
          }
          let values = Object.keys(impossibleValues).map(n => parseInt(n, 10));

          if (values.length === 8) {
            let missingValue = 45 - values.reduce((sum, val) => sum + val, 0);
            sudoku[cellV][cellH] = missingValue;
          }
        }
      }
    }
    if (countEmpty > 0) {
      countEmpty--;
      checkIfComplete();
    }
  }
  checkIfComplete();
  return sudoku;
}
