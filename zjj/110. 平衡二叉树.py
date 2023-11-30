# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root: TreeNode[TreeNode]) -> bool:
        def depth(root):
            if not root:
                return 0
            return max(depth(root.left), depth(root.right)) + 1
        # 先序遍历，判断深度
        if not root:
            return True
        return abs(depth(root.left) - depth(root.right)) <= 1 and self.isBalanced(root.left) and \
            self.isBalanced(root.right)
