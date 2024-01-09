/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  const path = [];

  candidates.sort((a, b) => a - b);

  const backtracking = (j, sum) => {
    if (sum === target) {
      result.push(Array.from(path));
      return;
    }

    for (let i = j; i < candidates.length; i++) {
      const element = candidates[i];

      if (element > target - sum) break;

      path.push(element);
      sum += element;

      backtracking(i, sum);

      path.pop();
      sum -= element;
    }
  };

  backtracking(0, 0);

  return result;
};
