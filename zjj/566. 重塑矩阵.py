class Solution:
    def matrixReshape(self, mat: list[list[int]], r: int, c: int) -> list[list[int]]:
        m, n = len(mat), len(mat[0])
        if m*n != r*c:
            return mat

        ans = []
        cur_row = []
        for i in range(m):
            for j in range(n):
                cur_row.append(mat[i][j])
                if len(cur_row) == c:
                    ans.append(cur_row)
                    cur_row = []
        return ans


'''
class Solution:
    def matrixReshape(self, mat: list[list[int]], r: int, c: int) -> list[list[int]]:
        m, n = len(mat), len(mat[0])
        if m*n != r*c:
            return mat

        ans = [[0]*c for cow in range(r)]
        for x in range(m*n):
            ans[x//c][x % c] = mat[x//n][x % n]
        return ans
'''
