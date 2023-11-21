let value : any = "hello";

const len : number = (<string>value).length;

const res : number = (value as string).length;

console.log(len, res); // 输出5，5


let num : number = 1;

// let numlen = num.length; // 报错 类型“number”上不存在属性“length”


// window.bar = 1; // 报错提示 window上不存在bar

(window as any).bar = 1; // 正常赋值

let x: number = 5;
// let y: string = x as string; // 错误，不能将 number 类型断言为 string 类型

let X: null = null;

let Y: number = x as number; // 错误，不能将 null 断言为 number 类型

let Value: string | number = "Echo";

let Len: number = (value as string).length; // 正确，因为 value 的实际类型可以为 string

// let size: number = (value as number).toFixed(2); // 错误，value 的实际类型不是 number
