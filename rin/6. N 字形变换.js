var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let flag = true;
  let x = 0;
  let y = 0;

  const arr = Array.from({ length: numRows }, () => "");

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    arr[y] += element;

    if (flag) {
      y = y + 1;

      if (y === numRows - 1) {
        flag = !flag;
      }
    } else {
      x = x + 1;
      y = y - 1;

      if (y === 0) {
        flag = !flag;
      }
    }
  }

  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, "");
};
