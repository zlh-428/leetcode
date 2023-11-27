function findContentChildren(g: number[], s: number[]): number {
    let result: number = 0;
    let index: number = s.length - 1;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    for (let i = g.length - 1; i >= 0; i--) {
        if (i >= 0 && s[index] >= g[i]) {
            result ++;
            index --
        }
    }

    return result;
};