function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => Math.abs(b) - Math.abs(a))

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {
            nums[i] = - nums[i];
            k--;
        }
    }

    // 若k还大于0,则寻找最小的数进行不断取反
    while (k > 0) {
        nums[nums.length - 1] = - nums[nums.length - 1]
        k--;
    }

    return nums.reduce((a, b) => a + b)
};