function maxDepth(root: TreeNode | null): number {
  let deep: number = 0;
  const queue = [root];

  if (!root) return deep;

  while (queue.length) {
    deep++;
    let len: number = queue.length;

    while (len--) {
      const cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return deep;
}
