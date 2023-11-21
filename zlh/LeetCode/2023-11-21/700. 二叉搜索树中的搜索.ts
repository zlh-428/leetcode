function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  // 递归法
  // let res : TreeNode | null = null;

  // if (!root || root.val === val) return root;

  // if (root.val > val) res = searchBST(root.left, val);
  // if (root.val < val) res = searchBST(root.right, val);

  // return res

  // 迭代法
  while (root !== null) {
    if (root.val > val) root = root.left;
    else if (root.val < val) root = root.right;
    else return root;
  }

  return null;
}
