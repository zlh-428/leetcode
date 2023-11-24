function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    const path: number[] = []
    const used: boolean[] = new Array(candidates.length).fill(false);

    candidates.sort((a, b) => a - b);

    const backTracking = (candidates: number[], target: number, num: number, startIndex: number): number[] | undefined => {
        if (num > target) {
            return
        }

        if (num === target) {
            res.push([...path])
            return
        }

        for (let i: number = startIndex; i < candidates.length; i++) {
            if (used[i - 1] === false && candidates[i] === candidates[i - 1]) {
                continue
            }
            num += candidates[i];
            path.push(candidates[i]);
            used[i] = true;
            backTracking(candidates, target, num, i + 1);
            used[i] = false;
            num -= candidates[i];
            path.pop()
        }
    }

    backTracking(candidates, target, 0, 0)
    return res
};