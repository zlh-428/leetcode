// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数
// 0 <= n <= 10^9


/**
 * @param {number} n
 * @return {number}
 */

// 自己解法
var countDigitOne = function (n) {
    let numString = String(n)
    let l = numString.length
    let all = 0
    while (l--) {
        // 当前位数的左侧数字
        const beforeNumber = Number(numString.substring(0, l)) // math.floor可以平替
        // 当前位数的右侧数字
        const afterNumber = Number(numString.substring(l + 1)) // %可以平替
        if (numString[l] === '0') {
            all = all + beforeNumber * Math.pow(10, numString.length - l - 1)
        } else if (numString[l] === '1') {
            all = all + beforeNumber * Math.pow(10, numString.length - l - 1) + afterNumber + 1
        } else {
            all = all + (beforeNumber + 1) * Math.pow(10, numString.length - l - 1)
        }
    }
    return all
};

//60ms 40.02M

// 官方解
var countDigitOne = function (n) {
    let mulk = 1;
    let ans = 0;
    for (let k = 0; n >= mulk; ++k) {
        ans += (Math.floor(n / (mulk * 10))) * mulk + Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0), mulk);
        mulk *= 10;
    }
    return ans;
};
// 48ms 39.86M

// 优化点比较
// 所有数字转字符串转数字的运算都是不必要的，使用math.floor取模和%取余最优
// 所有的判断条件可以取消，直接写成Math.min(Math.max(n % (mulk * 10) - mulk + 1, 0)比较大小就可以兼容所有情况
// Math.pow使用非必要，每次调用都会耗费性能重新生成一个数，可以直接在循环里定义一个参数，每次循环结束给参数乘相应的数即可