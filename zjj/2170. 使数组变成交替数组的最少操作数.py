from collections import Counter


class Solution:
    def minimumOperations(self, nums: list[int]) -> int:
        n = len(nums)
        if n == 1:
            return 0

        cnt0 = Counter(nums[::2])   # 从下标0开始，间隔为2
        cnt1 = Counter(nums[1::2])  # 从下标1开始，间隔为2

        cnt0 = sorted(cnt0.items(), key=lambda x: -x[1])    # 按照出现次数倒序排列
        cnt1 = sorted(cnt1.items(), key=lambda x: -x[1])

        if cnt0[0][0] != cnt1[0][0]:    # 两个数组中，出现次数最多的元素不同
            return n-cnt0[0][1]-cnt1[0][1]
        else:                           # 两个数组中，出现次数最多的元素相同
            # 保留偶数组中出现次数最多的元素，并考虑保留奇数组中出现次数第二多（如存在）的元素
            cost0 = n - cnt0[0][1] - (0 if len(cnt1) == 1 else cnt1[1][1])
            # 保留奇数组中出现次数最多的元素，并考虑保留偶数组中出现次数第二多（如存在）的元素
            cost1 = n - cnt1[0][1] - (0 if len(cnt0) == 1 else cnt0[1][1])

            return min(cost0, cost1)    # 两种情况取最小值
