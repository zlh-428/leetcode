function permute(nums: number[]): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    const used: object = {};

    const len: number = nums.length;
    const backTracking = (nums: number[], used: object): void => {
        if (path.length === len) {
            res.push([...path]);
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[nums[i]]) continue;
            path.push(nums[i]);
            used[nums[i]] = true;
            backTracking(nums, used);
            path.pop();
            used[nums[i]] = false;
        }
    }
    backTracking(nums, used);
    return res;
};