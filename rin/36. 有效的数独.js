/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rows = {};
  let columns = {};
  let boxes = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];
      if (num != ".") {
        let boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3);
        if (
          rows[i + "-" + num] ||
          columns[j + "-" + num] ||
          boxes[boxIndex + "-" + num]
        ) {
          return false;
        }
        rows[i + "-" + num] = 1;
        columns[j + "-" + num] = 1;
        boxes[boxIndex + "-" + num] = 1;
      }
    }
  }
  return true;
};
