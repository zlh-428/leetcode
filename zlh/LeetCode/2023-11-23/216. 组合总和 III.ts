function combinationSum3(k: number, num: number): number[][] {
    const res: number[][] = [];
    const path: number[] = []
    const backTarcking = (k: number, n: number, startIndex: number): number[] | undefined => {
        if (path.length === k) {
            if (getTotal(path) === num) {
                res.push([...path])
            }
            return
        }

        for (let i : number = startIndex; i <= n; i++) {
            path.push(i);
            backTarcking(k, n, i + 1)
            path.pop();
        }
    }
    backTarcking(k, 9, 1);
    return res
};

const getTotal = (arr: number[]): number => {
    let total: number = 0;

    total = arr.reduce((pre: number, cur: number): number => {
        return pre + cur;
    })

    return total;
}