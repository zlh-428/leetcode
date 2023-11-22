class Solution:
    def minOperations(self, nums: list[int]) -> int:
        i, cnt = 0, 0
        n = len(nums)
        while i < n - 1:
            if nums[i] >= nums[i + 1]:
                increase = abs(nums[i] - nums[i + 1]) + 1
                cnt += increase
                nums[i + 1] += increase
            i += 1
        return cnt
