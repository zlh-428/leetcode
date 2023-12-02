# Definition for a binary tree node.
import collections


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def binaryTreePaths(self, root: TreeNode[TreeNode]) -> list[str]:
        # # DFS深度优先搜索
        # def construct_path(root, path):
        #     if root:
        #         path += str(root.val)
        #         # 是叶子结点
        #         if not root.left and not root.right:
        #             res.append(path)
        #         # 不是叶子结点
        #         else:
        #             path += "->"
        #             construct_path(root.left, path)
        #             construct_path(root.right, path)
        # res = []
        # construct_path(root, "")
        # return res

        # BFS广度优先搜索
        paths = []
        if not root:
            return paths
        # 创建双端队列
        node_deque = collections.deque([root])
        path_deque = collections.deque([str(root.val)])

        while node_deque:
            node = node_deque.popleft()
            path = path_deque.popleft()
            if not node.left and not node.right:
                paths.append(path)
            else:
                if node.left:
                    node_deque.append(node.left)
                    path_deque.append(path + "->" + str(node.left.val))
                if node.right:
                    node_deque.append(node.right)
                    path_deque.append(path + "->" + str(node.right.val))
        return paths
