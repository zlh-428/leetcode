from string import ascii_uppercase


class Solution:
    def greatestLetter(self, s: str) -> str:
        ss = set(s)
        for i in ascii_uppercase[::-1]:
            if i in ss and i.lower() in ss:
                return i
        return ""
