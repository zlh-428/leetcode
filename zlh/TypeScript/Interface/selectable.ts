// 可选属性
interface Person {
  name: string;
  age?: number;
  [propName: string]: any;
}

const person1: Person = { name: "Alice" };
const person2: Person = { name: "Bob", age: 25 };
