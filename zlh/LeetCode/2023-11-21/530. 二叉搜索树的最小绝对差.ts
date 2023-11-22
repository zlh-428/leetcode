function getMinimumDifference(root: TreeNode | null): number {
  const treeNodes: number[] = [];
  let min: number = Number.MAX_VALUE;

  const midTraversal = (root: TreeNode | null): null | undefined => {
    if (!root) return null;

    midTraversal(root.left);
    treeNodes.push(root.val);
    midTraversal(root.right);
  };

  // 中序遍历获取有序数组
  midTraversal(root);

  if (treeNodes.length < 2) return 0;

  // 遍历
  for (let i: number = 1; i < treeNodes.length; i++) {
    min = Math.min(min, treeNodes[i] - treeNodes[i - 1]);
  }

  return min;
}
