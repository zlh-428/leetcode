function maxArea(height: number[]): number {
  let max: number = 0;

  let left: number = 0,
    right: number = height.length - 1;

  while (left !== right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(area, max);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return max;
}
