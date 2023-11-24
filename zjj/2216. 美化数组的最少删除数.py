class Solution:
    def minDeletion(self, nums: list[int]) -> int:
        n = len(nums)
        cnt = 0
        for i in range(n - 1):
            if (i - cnt) % 2 == 0 and nums[i] == nums[i + 1]:
                cnt += 1

        return cnt + 1 if (n - cnt) % 2 else cnt
