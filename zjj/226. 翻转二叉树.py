# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def invertTree(self, root: TreeNode[TreeNode]) -> TreeNode[TreeNode]:
        # 递归
        # if not root:
        #     return None
        # root.left , root.right = root.right , root.left
        # self.invertTree(root.left)
        # self.invertTree(root.right)
        # return root

        # 迭代 广度优先遍历
        if not root:
            return None
        que = [root]
        while que:
            tmp = que.pop(0)
            tmp.left, tmp.right = tmp.right, tmp.left
            if tmp.left:
                que.append(tmp.left)
            if tmp.right:
                que.append(tmp.right)
        return root
