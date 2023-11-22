function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  // 找到遍历的节点为null的时候，就是要插入节点的位置了，并把插入的节点返回
  if (!root) {
    const node: TreeNode = new TreeNode(val);
    return node;
  }

  if (val > root.val) root.right = insertIntoBST(root.right, val);
  if (val < root.val) root.left = insertIntoBST(root.left, val);

  return root;
}
