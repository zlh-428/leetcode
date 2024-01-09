/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const index = nums.findIndex((num) => num >= target);
  return ~index ? index : nums.length;
};
