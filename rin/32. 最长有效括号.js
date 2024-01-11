/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  let res = 0;

  let p = 0;

  let stack = [-1];

  while (p < s.length) {
    let c = s[p];

    if (c === "(") {
      stack.push(p);
    } else {
      stack.pop();

      if (stack.length) {
        let cur = p - stack[stack.length - 1];

        res = Math.max(res, cur);
      } else {
        stack.push(p);
      }
    }

    p++;
  }

  return res;
};
