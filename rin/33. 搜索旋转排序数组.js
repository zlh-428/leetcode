/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //分别从数组的两侧开始搜索
  let left = 0;
  let right = nums.length - 1;
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }
  while (left < right) {
    if (target < nums[left] && target > nums[right]) {
      return -1;
    }
    if (target === nums[left]) {
      return left;
    } else if (target === nums[right]) {
      return right;
    } else if (left < right && target < nums[right]) {
      right--;
    } else if (left < right && target > nums[left]) {
      left++;
    }
  }
  return -1;
};
