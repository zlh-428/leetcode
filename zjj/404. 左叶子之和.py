# Definition for a binary tree node.
import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sumOfLeftLeaves(self, root: TreeNode[TreeNode]) -> int:
        # BFS
        # if not root:
        #     return 0
        # ans = 0
        # que = collections.deque([root])
        # def isLeafNode(node): return not node.left and not node.right
        # while que:
        #     tmp = que.popleft()
        #     if tmp.left:
        #         if isLeafNode(tmp.left):
        #             ans += tmp.left.val
        #         else:
        #             que.append(tmp.left)
        #     if tmp.right and not isLeafNode(tmp.right):
        #         que.append(tmp.right)
        # return ans

        # DFS
        def isLeafNode(node): return not node.left and not node.right

        def dfs(node: TreeNode) -> int:
            ans = 0
            if node.left:
                if isLeafNode(node.left):
                    ans += node.left.val
                else:
                    ans += dfs(node.left)
            if node.right and not isLeafNode(node.right):
                ans += dfs(node.right)
            return ans

        return dfs(root) if root else 0
