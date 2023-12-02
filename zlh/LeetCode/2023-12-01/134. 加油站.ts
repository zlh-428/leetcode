function canCompleteCircuit(gas: number[], cost: number[]): number {
    const gasLen: number = gas.length;
    let start: number = 0;
    let curSum: number = 0;
    let totalSum: number = 0;

    for (let i: number = 0; i < gasLen; i++) {
        curSum += gas[i] - cost[i];
        totalSum += gas[i] - cost[i];
        
        if (curSum < 0) {
            curSum = 0;
            start = i + 1;
        }
    }

    if (totalSum < 0) return -1;

    return start;
};