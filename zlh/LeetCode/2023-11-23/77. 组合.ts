function combine(n: number, k: number): number[][] {
    const res: number[][] = [];
    const path: number[] = [];
    const backtracking = (n: number, k: number, startIndex: number): number[] | undefined => {
        if (path.length === k) {
            res.push([...path]);
            return
        }

        for (let i : number = startIndex; i <= n ; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }
    }

    backtracking(n, k, 1)
    return res;
};