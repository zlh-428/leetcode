/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let maxDeep = Math.max.apply(null, height);
  let allAcc = 0;
  for (let i = 1; i <= maxDeep; i++) {
    allAcc += calcCount(height, i);
  }

  return allAcc;
};

function calcCount(height, deep) {
  let isStart = false;
  // let isEnd = false;
  let account = 0;
  let accountCache = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] >= deep && !isStart) {
      isStart = true;
    }

    if (height[i] >= deep && isStart) {
      account += accountCache;
      accountCache = 0;
    }

    if (isStart && height[i] < deep) {
      accountCache += 1;
    }
  }

  return account;
}
