from bisect import bisect_left


class Solution:
    def minimumTime(self, time: list[int], totalTrips: int) -> int:
        # 答案不可能超过让最快的车跑totalTrips趟所花费的时间
        return bisect_left(range(totalTrips * min(time)), totalTrips,
                           key=lambda x: sum(x // t for t in time))
