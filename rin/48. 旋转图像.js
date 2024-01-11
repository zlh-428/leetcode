/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var len = matrix.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = i; j < len - 1 - i; j++) {
      [
        matrix[i][j],
        matrix[j][len - 1 - i],
        matrix[len - 1 - i][len - 1 - j],
        matrix[len - 1 - j][i],
      ] = [
        matrix[len - 1 - j][i],
        matrix[i][j],
        matrix[j][len - 1 - i],
        matrix[len - 1 - i][len - 1 - j],
      ];
    }
  }
  return matrix;
};
