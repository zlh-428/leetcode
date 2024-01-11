/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let end = 0,
    longest = 0,
    count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    longest = Math.max(longest, nums[i] + i);
    if (end === i) {
      count++;
      end = longest;
    }
  }
  return count;
};
