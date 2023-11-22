function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  // 为空直接返回null
  if (!root) return null;
  if (root.val === key) {
    // 当前节点为最后一个子节点
    if (!root.left && !root.right) return null;
    // 直接返回左子节点
    if (!root.right) return root.left;
    // 直接返回右子节点
    if (!root.left) return root.right;
    else {
      let cur: TreeNode = root.right;
      while (cur.left) {
        cur = cur.left;
      }

      cur.left = root.left;
      root = root.right;
      return root;
    }
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
}
