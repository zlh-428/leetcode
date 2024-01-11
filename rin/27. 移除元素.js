/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let slow = 0;

  for (let num of nums) {
    console.log(num, "num +++");
    if (num !== val) {
      nums[slow] = num;
      slow++;
    }
  }

  console.log(nums);

  return slow;
};
