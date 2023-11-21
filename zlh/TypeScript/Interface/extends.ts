interface Point2D {
  x: number;
  y: number;
}

interface Point3D extends Point2D {
  // 属性和方法定义
}

interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
  getArea(): number;
}

const circle: Circle = {
  color: "red",
  radius: 5,
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

// 一个接口可以继承多个接口，创建出多个接口的合成接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;