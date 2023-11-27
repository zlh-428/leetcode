from collections import Counter


class Solution:
    def numberOfPairs(self, nums: list[int]) -> list[int]:
        nums_len, nums_count = len(nums), 0
        my_counter = Counter(nums)
        for cnt in my_counter.values():
            if cnt >= 2:
                nums_count += cnt // 2
        return [nums_count, nums_len - nums_count*2]
