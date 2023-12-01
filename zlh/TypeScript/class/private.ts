class PersonPrivate {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const personPva = new PersonPrivate("Echo");
personPva.sayHello();        // 输出：Hello, my name is Echo.
console.log(personPva.name); // 报错：属性“name”为私有属性，只能在类“Person”中访问


class Animals {
  private name: string;
  public constructor(name: string) {
    this.name = name;
  }
}

class Dogs extends Animals {
  constructor(name: string) {
    super(name);
    console.log(this.name); // 报错：属性“name”为私有属性，只能在类“Animals”中访问
  }
}


class AnimalPrCon {
  public name: string;
  private constructor(name: string) {
    this.name = name;
  }
}

class DogPr extends AnimalPrCon { // 报错：无法扩展类“AnimalPrCon”，类构造函数标记为私有
  constructor(name: string) {
    super(name);
  }
}

const dog = new AnimalPrCon("Hate"); // 报错：类“AnimalPrCon”的构造函数是私有的，仅可在类声明中访问。