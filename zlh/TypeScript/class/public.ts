class PersonPublic {
  public name: string;
  public age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const personPub = new PersonPublic("Echo", 26);
console.log(personPub.name); // 输出：ECho
personPub.sayHello();        // 输出：Hello, my name is Echo and I'm 26 years old.
personPub.name = "zlh";
console.log(personPub.name); // 输出：James