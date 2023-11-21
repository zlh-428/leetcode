interface IPoint {
  readonly pointX: number;
  readonly pointY: number;
}

let point: IPoint = {
  pointX: 1,
  pointY: 2,
};

// 接口中只读属性必须在初始化时赋值
point.pointX = 2; // error!
point.pointY = 3; // error!


// TypeScript 还提供了 ReadonlyArray 
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12      // error!
ro.push(5)      // error!
ro.length = 100 // error!
a = ro          // error!
