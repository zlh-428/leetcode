from more_itertools import pairwise


class Solution:
    def maxConsecutive(self, bottom: int, top: int, special: list[int]) -> int:
        # 把 bottom−1和 top+1视作两个特殊楼层，从而简化代码逻辑。
        special.append(bottom - 1)
        special.append(top + 1)
        special.sort()
        return max(y - x - 1 for x, y in pairwise(special))
