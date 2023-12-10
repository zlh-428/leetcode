function merge(intervals: number[][]): number[][] {
  const resArr: number[][] = [];

  intervals.sort((a, b) => a[0] - b[0]);

  resArr[0] = [...intervals[0]]; // 避免修改原intervals

  for (let i = 1, length = intervals.length; i < length; i++) {
    let interval: number[] = intervals[i];

    let last: number[] = resArr[resArr.length - 1];

    if (interval[0] <= last[1]) {
      last[1] = Math.max(interval[1], last[1]);
    } else {
      resArr.push([...intervals[i]]);
    }
  }

  return resArr;
}
