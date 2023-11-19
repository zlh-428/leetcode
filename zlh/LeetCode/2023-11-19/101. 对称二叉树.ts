function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  return compareNode(root.left, root.right);
}

const compareNode = (
  left: TreeNode | null,
  right: TreeNode | null
): boolean => {
  if (left === null && right !== null) return false;
  else if (left !== null && right === null) return false;
  else if (left === null && right === null) return true;
  else if (left.val !== right.val) return false;

  let outside: boolean = compareNode(left.left, right.right);
  let inside: boolean = compareNode(left.right, right.left);

  return outside && inside;
};
