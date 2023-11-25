class Solution:
    def cellsInRange(self, s: str) -> list[str]:
        res = []
        for col in range(ord(s[0]), ord(s[3]) + 1):
            for row in range(ord(s[1]), ord(s[4]) + 1):
                res.append(chr(col) + chr(row))
        return res
