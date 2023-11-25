function partition(s: string): string[][] {
    const res: string[][] = [];
    const path: string[] = [];

    const backTracking = (s: string, startIndex: number) : undefined => {
        if (s.length <= startIndex) {
            res.push([...path])
            return
        }

        for (let i : number = startIndex; i < s.length; i++) {
            if (!isTrackingString(s, startIndex, i)) {
                continue
            }
            path.push(s.substring(startIndex, i + 1))
            backTracking(s, i + 1)
            path.pop()
        }
    }

    backTracking(s, 0)
    return res;
};

const isTrackingString = (str: string, startIndex: number, endIndex: number): boolean => {
    while(startIndex < endIndex) {
        if (str[startIndex] !== str[endIndex]) {
            return false
        }
        startIndex ++
        endIndex --
    }
    return true;
}