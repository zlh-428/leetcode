/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 二叉树右视图 只需要把每一层最后一个节点存储到res数组
  const res = [];

  const queue = [root];

  if (!root) return res;

  while (queue.length) {
    // 记录当前层级节点个数
    let len = queue.length;

    while (len--) {
      const cur = queue.shift();
      // length长度为0的时候表明到了层级最后一个节点
      if (!len) {
        res.push(cur.val);
      }

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return res;
};
