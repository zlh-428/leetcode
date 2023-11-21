function isValidBST(root: TreeNode | null): boolean {
  const treeNodes: number[] = [];

  const midTraversal = (root: TreeNode | null): null | undefined => {
    if (!root) return null;

    midTraversal(root.left);
    treeNodes.push(root.val);
    midTraversal(root.right);
  };

  midTraversal(root);

  for (let i : number = 0; i < treeNodes.length; i++) {
    if (treeNodes[i] <= treeNodes[i - 1]) return false;
  }

  return true;
}
