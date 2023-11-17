import bisect


class Solution:
    def breakfastNumber(self, staple: list[int], drinks: list[int], x: int) -> int:
        cnt = 0
        drinks.sort()
        for i in staple:
            if i <= x:
                index = bisect.bisect_right(drinks, x - i)
                cnt += index
        cnt %= (1e9 + 7)
        return int(cnt)
