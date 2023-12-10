# Definition for a binary tree node.
from collections import Counter


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def findMode(self, root: TreeNode[TreeNode]) -> list[int]:
        node_vals = []
        ans = []

        def dfs(root):
            if not root:
                return
            node_vals.append(root.val)
            dfs(root.left)
            dfs(root.right)
        dfs(root)
        dic = Counter(node_vals)
        sort_dic = dict(
            sorted(dic.items(), key=lambda item: item[1], reverse=True))
        for key, val in sort_dic.items():
            if not ans:
                ans.append(key)
            else:
                if sort_dic[ans[0]] == val:
                    ans.append(key)
                else:
                    break
        return ans
