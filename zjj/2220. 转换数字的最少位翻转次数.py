class Solution:
    def minBitFlips(self, start: int, goal: int) -> int:
        # res = 0
        # tmp = start ^ goal
        # while tmp:
        #     res += tmp & 1
        #     tmp >>= 1
        # return res

        # bin()返回的是对应二进制的str
        return bin(start ^ goal).count('1')
