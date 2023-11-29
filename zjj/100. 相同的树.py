# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


# class Solution:
#     def isSameTree(self, p: TreeNode[TreeNode], q: TreeNode[TreeNode]) -> bool:
#         res_p = []
#         res_q = []
#         self.predfs(p, res_p)
#         self.predfs(q, res_q)
#         return res_p == res_q

#     def predfs(self, root, res):
#         if not root:
#             res.append(None)
#             return
#         res.append(root.val)
#         self.predfs(root.left, res)
#         self.predfs(root.right, res)

class Solution:
    def isSameTree(self, p: TreeNode[TreeNode], q: TreeNode[TreeNode]) -> bool:
        if not p and not q:
            return True
        elif (not p and q) or (p and not q) or (p.val != q.val):
            return False
        left_ = self.isSameTree(p.left, q.left)
        right_ = self.isSameTree(p.right, q.right)
        return left_ and right_
