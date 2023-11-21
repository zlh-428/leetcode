function findMode(root: TreeNode | null): number[] {
  const res: number[] = [];
  const map: object = {};
  let maxCount: number = 0;
  let counts: number[] = [];

  const midTraversl = (root: TreeNode | null): null | undefined => {
    if (!root) return null;

    midTraversl(root.left);
    res.push(root.val);
    midTraversl(root.right);
  };

  midTraversl(root);

  for (let i: number = 0; i < res.length; i++) {
    let num = res[i];
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num] = map[num] + 1;
    }
  }

  for (let key in map) {
    if (map[key] > maxCount) {
      maxCount = map[key];
      counts = [Number(key)];
    } else if (map[key] === maxCount) {
      counts.push(Number(key));
    }
  }

  return counts;
}
