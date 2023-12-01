abstract class AnimalAbstract {
  constructor(public name: string) {
    this.name = name;
  }
  abstract sayHi();
}

// 抽象类不能被实例化，只能被继承

class Cat extends AnimalAbstract {
  sayHi() {
    console.log(this.name); // 输出：Tom
  }
}

let cat1 = new Cat('Tom');
cat1.sayHi();


let cat2 = new AnimalAbstract("Tom"); // 报错：无法创建抽象类的实例