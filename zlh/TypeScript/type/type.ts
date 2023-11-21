// 未使用类型别名
let arr: (number | string)[] = [1, 2, 3]
let arr1: (number | string)[] = ['a', 'b', 'c']

// 使用类型别名
type CustomArray = (number | string)[]
let arr2: CustomArray = [1, 2, 3]
let arr3: CustomArray = ['a', 'b', 'c']
let arr4: CustomArray = [1, 'a', 2, 'b', 3, 'c']