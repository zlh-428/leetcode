// dp
function countNodesByDp(root: TreeNode | null): number {
  let res = [];

  const helpFn = (root) => {
    if (!root) return;

    res.push(root.val);
    root.left && helpFn(root.left);
    root.right && helpFn(root.right);
  };

  helpFn(root);
  return res.length;
}

// 迭代法
function countNodes(root: TreeNode | null): number {
    const queue : TreeNode[] = [];
    const res : number[] = []

    if (!root) return 0
    queue.push(root)

    while(queue.length) {
        let len = queue.length;

        while(len --) {
            const cur = queue.shift()
            res.push(cur.val);
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
    }

    return res.length;
};