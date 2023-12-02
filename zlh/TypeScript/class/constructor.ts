class ClassName {
  constructor(parameter1: string, parameter2: number) {
    // 书写构造函数的逻辑
  }
}

class PersonNanme {
  name: string;
  age: number | undefined;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

const personTem = new PersonNanme("Echo", 26);

class PersonAge {
  name: string;
  age: number;

  constructor(name: string);
  constructor(name: string, age: number);
  constructor(name: string, age?: number) {
    this.name = name;
    if (age) {
      this.age = age;
    } else {
      this.age = 0;
    }
  }
}

const person1 = new PersonAge('Echo');
const person2 = new PersonAge('Echo', 26);

console.log(person1.name, person1.age); // 输出：Echo 0
console.log(person2.name, person2.age); // 输出：Echo 26