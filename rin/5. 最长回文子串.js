var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let res = "";

  const run = (m, n) => {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }

    if (n - m - 1 > res.length) {
      res = s.substring(m + 1, n);
    }
  };

  for (let i = 0; i < s.length; i++) {
    run(i, i);

    run(i, i + 1);
  }

  return res;
};
