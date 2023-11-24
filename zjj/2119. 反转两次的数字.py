class Solution:
    def isSameAfterReversals(self, num: int) -> bool:
        # if num == 0:
        #     return True
        # s = str(num)
        # reverse_1 = s[::-1].lstrip('0')
        # reverse_2 = reverse_1[::-1]
        # return reverse_2 == s

        return num == 0 or num % 10 != 0
