var myAtoi = function (s) {
  const num = parseInt(s);

  if (Number.isNaN(num)) return 0;

  if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
    return num < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return num;
  }
};
