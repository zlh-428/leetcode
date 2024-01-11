/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return "";
  let len1 = num1.length;
  let len2 = num2.length;
  let ans = []; // 存储遍历的计算的结果

  // 模拟数据计算方式，从后往前依次循环计算
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let index1 = i + j,
        index2 = i + j + 1;
      // 两个数相乘，取后一位上的数字相加得到本次循环中，两个位值的结果
      let mul = num1[i] * num2[j] + (ans[index2] || 0);
      // 前一位取整 加上 该位置的值
      ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
      // 后一位取余即可
      ans[index2] = mul % 10;
    }
  }

  let result = ans.join("").replace(/^0+/, "");

  return !result ? "0" : result;
};
