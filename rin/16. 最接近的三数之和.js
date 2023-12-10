/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {

    const numbers = nums.sort((a, b) => a - b);
    let result = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < numbers.length - 2; i++) {

        let l = i + 1;
        let r = numbers.length - 1;

        while (l < r) {

            let sub = numbers[i] + numbers[l] + numbers[r]

            if (Math.abs(sub - target) < Math.abs(result - target)) {
                result = sub
            } else if (sub < target) {
                l++
            } else if (sub > target) {
                r--

            } else {

                return sub
            }


        }
    }

    return result;
};