/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) return 2147483647;

  // 符号
  const flag = dividend ^ divisor;

  // 保证统一符号
  if (dividend > 0) dividend = -dividend;
  if (divisor > 0) divisor = -divisor;

  let sum = 0,
    t = 0; //第一层累加数
  let sums = 0,
    ts = 0; //第二层累加数
  let sumss = 0,
    tss = 0; //第三层累加数
  let res = 0; //结果

  while (dividend <= divisor) {
    //暴力累加法
    sum += divisor;
    t--;
    sums += sum;
    ts += t;
    sumss += sums;
    tss += ts;
    if (dividend - sumss < 0 && sumss < 0) {
      //判断三层累加是否超出
      res += tss;
      dividend -= sumss;
    } else {
      //超出则普通累加
      res--;
      dividend -= divisor;
      sum = 0;
      t = 0;
      sums = 0;
      ts = 0;
      sumss = 0;
      tss = 0;
    }
  }

  return flag < 0 ? res : -res;
};
