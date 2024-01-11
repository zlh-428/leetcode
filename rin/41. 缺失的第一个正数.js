/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  if (nums.length == 0) {
    return 1;
  }
  let arr = [];
  nums.forEach((element) => {
    if (element >= 1) {
      arr.push(element);
    }
  });
  let arr1 = new Set(arr);
  console.log(arr1);
  let arr2 = [...arr1];
  console.log(arr2, "arr2");
  let arr3 = arr2.sort(function (a, b) {
    return a > b ? 1 : -1;
  });
  console.log(arr3, "=====");
  if (arr3.length == 0) {
    return 1;
  }
  // console.log(arr);
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] != i + 1) {
      return i + 1;
    }
  }
  return arr3[arr3.length - 1] + 1;
};
