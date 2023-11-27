function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [];
    const used: boolean[] = new Array(nums.length).fill(false);
    const path: number[] = [];

    nums.sort((a, b) => a - b);

    const backTracking = (nums: number[], used: object): void => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }

            if ( used[i] === false) {
                path.push(nums[i]);
                used[i] = true;
                backTracking(nums, used);
                path.pop();
                used[i] = false;
            }
        }
    }

    backTracking(nums, used);
    return res;
};