function averageOfLevels(root: TreeNode | null): number[] {
  let res: number[] = [];
  let queue = [root];

  if (!root) return res;

  while (queue.length) {
    let len = queue.length;
    let value: number[] = [];
    while (len--) {
      let cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
      value.push(cur.val);
    }

    res.push(getValueByArr(value));
  }

  return res;
}

const getValueByArr = (arr: number[]): number => {
  const total = arr.reduce((pre, val) => {
    return pre + val;
  });

  return total / arr.length;
};
