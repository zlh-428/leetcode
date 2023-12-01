var findMedianSortedArrays = function (nums1, nums2) {
  const nums = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = nums.length;
  const mid = (len - 1) / 2;

  return len % 2 === 0
    ? (nums[Math.floor(mid)] + nums[Math.ceil(mid)]) / 2
    : nums[Math.floor(len / 2)];
};
