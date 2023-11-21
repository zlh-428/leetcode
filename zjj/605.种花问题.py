class Solution:
    def canPlaceFlowers(self, flowerbed: list[int], n: int) -> bool:
        i, len_ = 0, len(flowerbed)
        while (i < len_):
            # 当遍历到index遇到1时，说明这个位置有花，那必然从index+2的位置才有可能种花
            if flowerbed[i] == 1:
                i += 2
            # 当遍历到index遇到0时，由于每次碰到1都是跳两格，因此前一格必定是0，此时只需要判断下一格是不是1即可得出index这一格能不能种花，如果能种则令n减一，然后这个位置就按照遇到1时处理，即跳两格
            elif i == len_ - 1 or flowerbed[i + 1] == 0:
                n -= 1
                i += 2
             # 如果index的后一格是1，说明这个位置不能种花且之后两格也不可能种花，直接跳过3格。
            else:
                i += 3
        return n <= 0

        # 修改原数组

        # flowerbed = [0] + flowerbed + [0]
        #     for i in range(1,len(flowerbed) - 1):
        #         if flowerbed[i - 1] == 0 and flowerbed[i] == 0 and flowerbed[i + 1] == 0:
        #             n -= 1
        #             flowerbed[i] = 1
        #     return n <= 0
