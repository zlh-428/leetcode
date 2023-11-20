/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  const res = [];
      const dfs = (root) => {
          if (!root) {
              return;
          }
          root.left && dfs(root.left);
          res.push(root.val);
          root.right && dfs(root.right);
      }
      dfs(root);
      return res;
  };