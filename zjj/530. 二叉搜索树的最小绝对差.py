# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def getMinimumDifference(self, root: TreeNode[TreeNode]) -> int:
        li = []
        # BTS通过中序遍历得到升序序列

        def dfs(root):
            if not root:
                return
            dfs(root.left)
            li.append(root.val)
            dfs(root.right)
        dfs(root)
        ans = float('inf')
        for i in range(len(li) - 1):
            if ans > li[i + 1] - li[i]:
                ans = li[i + 1] - li[i]
        return ans
