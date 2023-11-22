class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        # cnt = 0
        # while num1 and num2:
        #     if num1 >= num2:
        #         num1 -= num2
        #     else:
        #         num2 -= num1
        #     cnt += 1
        # return cnt

        # 辗转相除
        res = 0
        while num1 and num2:
            # num1变成比num2小需要的操作数
            res += num1//num2
            # num1的新数值就是取模后的值
            num1 %= num2
            # 再交换相除
            num1, num2 = num2, num1
        return res
