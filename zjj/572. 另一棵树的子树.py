# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSubtree(self, root: TreeNode[TreeNode], subRoot: TreeNode[TreeNode]) -> bool:
        # 递归判断两个二叉树是否相等
        def isSameTree(node1: TreeNode, node2: TreeNode) -> bool:
            if not node1 and not node2:
                return True
            if not node1 or not node2 or node1.val != node2.val:
                return False
            return isSameTree(node1.left, node2.left) and isSameTree(node1.right, node2.right)
        # 递归判断在root中是否有与subroot相同的子树

        def traverse(node: TreeNode) -> bool:
            if not node:
                return False
            return isSameTree(node, subRoot) or traverse(node.left) or traverse(node.right)

        return traverse(root)
