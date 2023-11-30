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

    // 使用箭头函数的隐式返回值时，需使用简写省略花括号，否则要在 a + b 前加上 return
    return nums.reduce((a, b) => a + b)
};