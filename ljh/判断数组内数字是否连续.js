"展览馆展出来自 13 个朝代的文物，每排展柜展出 5 个文物。某排文物的摆放情况记录于数组 places，其中 places[i] 表示处于第 i 位文物的所属朝代编号。其中，编号为 0 的朝代表示未知朝代。请判断并返回这排文物的所属朝代编号是否连续（如遇未知朝代可算作连续情况）"
"places.length = 5"
"0 <= places[i] <= 13"

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 长度为5的数字数组是否连续，可以通过最大值与最小值是否相差小于5来判断（且没有重复数字）
var isStraight = function (nums) {
    let i = new Set()
    let max = 0, min = 13
    for (let j = 0; j < 5; j++) {
        if (nums[j] == 0) continue // 为0不参与计算
        if (i.has(nums[j])) return false
        i.add(nums[j])
        max = Math.max(max, nums[j])
        min = Math.min(min, nums[j])
    }
    if (max - min < 5) return true
    else return false
};
