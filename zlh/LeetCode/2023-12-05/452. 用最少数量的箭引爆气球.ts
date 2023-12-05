function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[0] - b[0]);

    let result: number = 1;

    for(let i: number = 1; i < points.length; i++) {
        if(points[i][0] > points[i - 1][1]) {
            result++;
        } else {
            points[i][1] = Math.min(points[i - 1][1], points[i][1]);
        }
    }

    return result;
};