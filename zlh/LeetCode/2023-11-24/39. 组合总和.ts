function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];

    const backTracking = (candidates: number[], target: number, num: number, startIndex: number): number[] | undefined => {
        let sum : number = num;
        if (sum > target) {
            return
        }

        if (sum === target) {
            res.push([...path]);
            return
        }

        for (let i : number = startIndex; i < candidates.length; i++) {
            sum += candidates[i];
            path.push(candidates[i])
            backTracking(candidates, target, sum, i)
            sum -= candidates[i];
            path.pop()
        }
    }

    backTracking(candidates, target, 0, 0)

    return res;
};