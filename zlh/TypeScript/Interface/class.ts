class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " is eating.");
  }
}

interface CanRun extends Animal {
  run(): void;
  eat(): void;
}

class Dog implements CanRun {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    console.log(this.name + " is running.");
  }
  eat() {
    console.log(this.name + " is eating.");
  }
}

const dog: CanRun = new Dog("Buddy");
dog.eat(); // 输出：Buddy is eating.
dog.run(); // 输出：Buddy is running.