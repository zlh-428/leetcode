function subsetsWithDup(nums: number[]): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    const used: object = {};

    nums.sort((a, b) => a - b);

    const backTracking = (nums: number[], startIndex: number): void => {
        res.push([...path])

        for (let i: number = startIndex; i < nums.length; i++) {
            if (nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }
            path.push(nums[i]);
            used[i] = true;
            backTracking(nums, i + 1);
            used[i] = false;
            path.pop()
        }
    }

    backTracking(nums, 0)
    return res;
};