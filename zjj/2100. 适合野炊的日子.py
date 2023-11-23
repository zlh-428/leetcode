class Solution:
    def goodDaysToRobBank(self, security: list[int], time: int) -> list[int]:
        n = len(security)
        left, right = [0] * n, [0] * n
        for i in range(1, n):
            # 从左向右看，维护每个坐标左边递减的个数
            if security[i - 1] >= security[i]:
                left[i] = left[i - 1] + 1
            # 从右向左看，维护每个坐标右边递增的个数
            if security[n - i] >= security[n - 1 - i]:
                right[n - 1 - i] = right[n - i] + 1
            # 当第i天同时满足 left≥time,right ≥time 时，即可认定第i天适合野炊
        return [i for i in range(time, n - time) if left[i] >= time and right[i] >= time]
