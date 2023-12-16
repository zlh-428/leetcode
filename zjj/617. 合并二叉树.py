# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def mergeTrees(self, root1: TreeNode[TreeNode], root2: TreeNode[TreeNode]) -> TreeNode[TreeNode]:
        if not root1:
            return root2
        if not root2:
            return root1
        node_merged = TreeNode(root1.val + root2.val)
        node_merged.left = self.mergeTrees(root1.left, root2.left)
        node_merged.right = self.mergeTrees(root1.right, root2.right)
        return node_merged
