interface Shape {
  color: string;
  getArea(): number;
}

class Circle implements Shape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(10, 'blue');
const area = circle.getArea();
console.log(area); // 输出：314.1592653589793
