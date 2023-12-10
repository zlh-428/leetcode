# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def diameterOfBinaryTree(self, root: TreeNode[TreeNode]) -> int:
        self.ans = 0

        def maxDepth(root):
            if not root:
                return 0
            l = maxDepth(root.left)
            r = maxDepth(root.right)
            # 对每个节点都要判断左子树+右子树的高度是否大于ans，更新最大值
            self.ans = max(self.ans, l + r)
            # 返回节点高度
            return max(l, r) + 1
        maxDepth(root)
        return self.ans
