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
 var postorderTraversal = function(root) {
  const res = [];
      const dfs = (root) => {
          if (!root) {
              return;
          }
          root.left && dfs(root.left);
          root.right && dfs(root.right);
          res.push(root.val);
      }
      dfs(root);
      return res;
  };