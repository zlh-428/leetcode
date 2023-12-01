class AnimalProtected {
  protected name: string;
  protected constructor(name: string) {
    this.name = name;
  }
}

class Dog extends AnimalProtected {
  constructor(name: string) {
    super(name);
    console.log(this.name); // 输出：Hate
  }
}

const dog1 = new Dog('Hate');


const dog2 = new AnimalProtected("Hate"); // 报错：类“Animal”的构造函数是受保护的，仅可在派生类中访问