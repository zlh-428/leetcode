/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n <= 0) return [];

  let res = [];

  const dfs = (paths, l, r) => {
    if (l > n || r > l) return;
    if (paths.length === n * 2) {
      res.push(paths);

      return;
    }

    dfs(paths + "(", l + 1, r);
    dfs(paths + ")", l, r + 1);
  };

  dfs("", 0, 0);

  return res;
};
