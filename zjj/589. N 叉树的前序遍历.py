"""
# Definition for a Node.

"""


class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


class Solution:
    def preorder(self, root: 'Node') -> list[int]:
        return self.dfs(root, [])

    def dfs(self, node, li):
        if not node:
            return
        li.append(node.val)
        for i in node.children:
            self.dfs(i, li)
        return li
