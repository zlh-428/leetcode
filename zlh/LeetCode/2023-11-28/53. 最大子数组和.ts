function maxSubArray(nums: number[]): number {
    let res: number = -Infinity;
    let count = 0;

    for (let i: number = 0; i <= nums.length; i++) {
        count += nums[i];

        if (count > res) res = count;

        if (count < 0) count = 0
    }

    return res;
};