import bisect

"""找到大于等于 x 
  的第一个 y
  和小于 x 的第一个 y
看看它们满不满足这个性质
 """


class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:
        count = 0
        arr2.sort()
        for x in arr1:
            p = bisect.bisect_left(arr2, x)  # 在有序列表或数组中找到大于或等于某个给定值的最小索引
            # x大于所有arr2则返回arr2数组长度，进入下一个判断：p-1是否满足
            if p == len(arr2) or abs(x - arr2[p]) > d:
                if abs(x - arr2[p - 1]) > d or p == 0:
                    count += 1
        return count
