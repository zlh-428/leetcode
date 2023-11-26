function findSubsequences(nums: number[]): number[][] {
    const res: number[][] = [];

    const backTracking = (nums: number[], startIndex: number, route: number[]): void => {
        if (route.length > 1) {
            res.push([...route.slice()]);
        }

        const useSet: Set<number> = new Set();

        for (let i: number = startIndex; i < nums.length; i++) {
            if (useSet.has(nums[i]) || nums[i] < route[route.length - 1]) {
                continue;
            }
            route.push(nums[i]);
            useSet.add(nums[i]);
            backTracking(nums, i+1, route);
            route.pop();
        }
    }
    backTracking(nums, 0, []);

    return res;
};