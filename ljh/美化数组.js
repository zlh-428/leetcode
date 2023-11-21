//给你一个下标从 0 开始的整数数组 nums ，如果满足下述条件，则认为数组 nums 是一个 美丽数组 ：

// nums.length 为偶数
// 对所有满足 i % 2 == 0 的下标 i ，nums[i] != nums[i + 1] 均成立
// 注意，空数组同样认为是美丽数组。

// 你可以从 nums 中删除任意数量的元素。当你删除一个元素时，被删除元素右侧的所有元素将会向左移动一个单位以填补空缺，而左侧的元素将会保持 不变 。

// 返回使 nums 变为美丽数组所需删除的 最少 元素数目。



/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
    let all = 0
    // 从偶数位开始遍历
    for (let k = 0; k < nums.length; k += 2) {
        // 如果不满足条件，则删除当前元素，偶数位转奇数位（相当于删除以后的偶数位），继续匹配直到当前位与下一位不等
        while (nums[k] === nums[k + 1]) {
            all++
            k++
        }
    }

    // 若最后数组长度不是偶数，则再加1（删除最后一个即可）
    if ((nums.length - all) % 2 !== 0) {
        all++
    }
    return all
};