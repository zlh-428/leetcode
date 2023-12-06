class Solution:
    def islandPerimeter(self, grid: list[list[int]]) -> int:
        # 遍历到每个点的时候，只需要对其下方或者右边判断是否有格子
        if not grid:
            return 0
        ans = 0
        row, col = len(grid), len(grid[0])
        # 对每个为1的格子判断右边和下边是否有1的格子
        for i in range(row):
            for j in range(col):
                if grid[i][j] == 1:
                    right = 2 if j < col - 1 and grid[i][j + 1] == 1 else 0
                    down = 2 if i < row - 1 and grid[i + 1][j] == 1 else 0
                    ans += 4 - down - right
        return ans
