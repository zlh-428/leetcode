/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const isValid = (row, col, val, board) => {
    // 判断行里是否重复
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == val) {
        return false;
      }
    }
    // 判断列里是否重复
    for (let j = 0; j < 9; j++) {
      if (board[j][col] == val) {
        return false;
      }
    }
    // 判断9方格里是否重复
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == val) {
          return false;
        }
      }
    }
    return true;
  };

  const backtracking = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== ".") continue;
        for (let k = 1; k <= 9; k++) {
          if (isValid(i, j, `${k}`, board)) {
            board[i][j] = `${k}`;
            if (backtracking(board)) return true;
            board[i][j] = ".";
          }
        }
        return false;
      }
    }

    return true;
  };

  backtracking(board);

  return board;
};
