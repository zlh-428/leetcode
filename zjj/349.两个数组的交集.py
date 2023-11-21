class Solution:
    def intersection(self, nums1: list[int], nums2: list[int]) -> list[int]:
        # res = []
        # nums2.sort()
        # for i in nums1:
        #     j = bisect.bisect_left(nums2,i)
        #     if j == len(nums2) or (j == 0 and nums2[j] != i): continue
        #     else:
        #         if i not in res and nums2[j] == i:
        #             res.append(i)
        # return res

        # return list(set(nums1).intersection(set(nums2)))

        return list(set(nums1) & set(nums2))
