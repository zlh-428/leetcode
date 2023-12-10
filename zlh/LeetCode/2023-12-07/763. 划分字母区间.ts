function partitionLabels(s: string): number[] {
    let left: number = 0;
    let right: number = 0;
    const length: number = s.length;
    const resArr: number[] = [];
    const helperMap: Map<string, number> = new Map();

    for (let i = 0; i < length; i++) {
        helperMap.set(s[i], i);
    }
  
    for (let i = 0; i < length; i++) {
        right = Math.max(helperMap.get(s[i])!, right);
        if (i === right) {
            resArr.push(i - left + 1);
            left = i + 1;
        }
    }

    return resArr;
};