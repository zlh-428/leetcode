function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0;

  if (!root) return sum;
  if (!root.left && !root.right) return sum;

  let leftNum: number = sumOfLeftLeaves(root.left);

  if (root.left && !root.left.left && !root.left.right) {
    leftNum = root.left.val;
  }

  let rightNum: number = sumOfLeftLeaves(root.right);

  return leftNum + rightNum;
}
