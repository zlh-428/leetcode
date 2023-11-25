type Item = number | null;

function subsets(nums: number[]): Item[][] {
  const res: Item[][] = [];
  const path: number[] = [];

  const backTracking = (num: number[], startIndex: number): undefined => {
    res.push([...path]);
    if (startIndex > num.length) {
      return;
    }

    for (let i: number = startIndex; i < num.length; i++) {
      path.push(num[i]);
      backTracking(num, i + 1);
      path.pop();
    }
  };

  backTracking(nums, 0);
  return res;
};