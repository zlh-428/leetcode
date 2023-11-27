# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def hasPathSum(self, root: TreeNode[TreeNode], targetSum: int) -> bool:
        # DFS
        # if not root:
        #     return False
        # if not root.left and not root.right:
        #     return targetSum == root.val
        # return self.hasPathSum(root.left,targetSum - root.val) or self.hasPathSum(root.right,targetSum - root.val)

        # 回溯
        if not root:
            return False
        return self.dfs(root, targetSum, [])

    def dfs(self, root, target, path):
        if not root:
            return False
        path.append(root.val)  # 将当前节点值添加到路径中
        # 到达叶子节点时，检查路径和是否等于目标值
        if sum(path) == target and not root.left and not root.right:
            return True  # 找到符合条件的路径，返回 True
        # 递归调用左子树和右子树
        left_flag = self.dfs(root.left, target, path)
        right_flag = self.dfs(root.right, target, path)

        path.pop()  # 回溯，将当前节点值从路径中弹出
        # 如果左子树或右子树有符合条件的路径，返回 True
        return left_flag or right_flag
