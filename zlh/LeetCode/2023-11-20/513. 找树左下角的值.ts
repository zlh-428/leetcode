function findBottomLeftValue(root: TreeNode | null): number | null {
  let num: number | null = null;

  const queue: TreeNode[] = [root];

  if (!root) return num;

  while (queue.length) {
    let len: number = queue.length;
    const ln: number = queue.length;

    while (len--) {
      const cur: TreeNode = queue.shift();

      if (len === ln - 1) {
        num = cur.val;
      }
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return num;
}
