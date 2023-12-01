# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def minDepth(self, root: TreeNode[TreeNode]) -> int:
        if not root:
            return 0
        # 其中一个节点为空，说明左右孩子有一个必然为0，所以可以返回两者和+1
        if root.left == None or root.right == None:
            return self.minDepth(root.left) + self.minDepth(root.right) + 1
        return min(self.minDepth(root.left), self.minDepth(root.right)) + 1
