function wiggleMaxLength(nums: number[]): number {
    let result: number = 1;
    let preCount: number = 0;
    let curCount: number = 0;

    if (nums.length <= 1) return nums.length

    for (let i = 0; i < nums.length - 1; i++) {
        curCount = nums[i + 1] - nums[i];

        if ((curCount < 0 && preCount >= 0) || (curCount > 0 && preCount <= 0)) {
            result ++
            preCount = curCount
        }
    }

    return result;
};