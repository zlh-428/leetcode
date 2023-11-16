// 迭代法 ----------------------------------------------------------------

// 前序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  const res = [];
  const queue = [root];

  while (queue.length) {
    const cur = queue.pop();
    if (cur) {
      res.push(cur.val);
      cur.right && queue.push(cur.right);
      cur.left && queue.push(cur.left);
    }
  }

  return res;
};

// 中序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    const queue = [root]

    while(queue.length) {
        const cur = queue.shift()
        if (cur) {
            res.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return res
}

// 后序遍历
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = []
    const queue = [root]

    while(queue.length) {
        const cur = queue.pop()
        if (cur) {
            res.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }
    return res.reverse()
};