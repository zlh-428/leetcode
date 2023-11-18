/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const queue = [root];
  const res = [];

  if (!root) return res;

  while (queue.length) {
    // 记录当前层级节点数
    let len = queue.length;
    // 存放每一层的节点
    let levelRoots = [];

    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      levelRoots.push(cur.val);

      // 存放当前层下一层的节点
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }

    //把每一层的结果放到结果数组
    res.push(levelRoots);
  }

  return res;
};
