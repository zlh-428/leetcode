import bisect
from itertools import accumulate

# list1 = [2, 4]
# print(bisect.bisect_left(list1, 3))

ast = [1, 1, 5, 25]
lst = accumulate(ast, initial=5)  # 返回迭代器对象
for x, y in zip(ast, lst):
    print(x, y)
