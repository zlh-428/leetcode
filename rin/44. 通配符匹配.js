/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const l1 = s.length;
  const l2 = p.length;

  const dp = Array.from({ length: l1 + 1 });

  for (let i = 0; i < l1 + 1; i++) {
    dp[i] = Array.from({ length: l2 + 1 }).fill(false);
  }

  dp[0][0] = true;
  for (let j = 1; j <= l2; j++) {
    dp[0][j] = p[j - 1] == "*" && dp[0][j - 1];
  }

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (p[j - 1] == "?" || s[i - 1] == p[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else if (p[j - 1] == "*" && (dp[i - 1][j] || dp[i][j - 1]))
        dp[i][j] = true;
    }
  }
  return dp[l1][l2];
};
