class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const p = new Person("Echo", 26);
console.log(p.name); // 输出：Echo
console.log(p.age);  // 输出：26
p.sayHello();        // 输出：Hello, my name is Echo and I'm 26 years old.
