const reg = /[10*#]/g;

function letterCombinations(digits: string): string[] {
    digits = digits.replace(reg, '');

    const map: object = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    const len: number = digits.length;

    const res: string[] = [];
    const path: string[] = [];

    const backTracking = (digits: string, Index: number): string[] | undefined => {
        if (path.length === len) {
            res.push(path.join(''));
            return
        }

        const num : number = Number(digits[Index]);
        const letters: string = map[num];

        for (let i: number = 0; i < letters.length; i++) {
            path.push(letters[i]);
            backTracking(digits, Index + 1);
            path.pop()
        }
    }
    if (digits.length) {
        backTracking(digits, 0);
    }
    return res;
};