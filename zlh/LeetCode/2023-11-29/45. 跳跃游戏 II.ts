function jump(nums: number[]): number {
    let res: number = 0;
    if (nums.length == 1) return res
    let curIndex: number = 0; // 当前覆盖最远距离下标
    let nextIndex: number = 0;  // 下一步覆盖最远距离下标

    for (let i = 0; i < nums.length - 1; i ++) {
        nextIndex = Math.max(nums[i] + i, nextIndex);

        if (i === curIndex) {
            curIndex = nextIndex;
            res ++;
        }
    }

    return res;
};