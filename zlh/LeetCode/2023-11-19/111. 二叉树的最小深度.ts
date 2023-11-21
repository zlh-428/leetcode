function minDepth(root: TreeNode | null): number {
  let deep: number = 0;
  const queue: TreeNode[] = [root];

  if (!root) return deep;
  while (queue.length) {
    let len: number = queue.length;
    deep++;

    while (len--) {
      let cur = queue.shift();
      if (!cur.left && !cur.right) return deep;

      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return deep;
}
