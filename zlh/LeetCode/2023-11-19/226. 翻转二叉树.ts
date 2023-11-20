function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let preLeft: TreeNode | null = root.left;
  root.left = root.right;
  root.right = preLeft;

  invertTree(root.left);
  invertTree(root.right);
  return root;
}
