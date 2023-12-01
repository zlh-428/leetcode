class PersonArgument {
  constructor(public name: string, private age: number, protected sex: string, public readonly height: number) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
  }
}

const person = new PersonArgument("Echo", 26, "male", 1.7);
console.log(person.name);   // 输出：Echo
console.log(person.age);    // 报错：属性“age”为私有属性，只能在类“PersonArgument”中访问
console.log(person.sex);    // 报错：属性“sex”受保护，只能在类“PersonArgument”及其子类中访问
console.log(person.height); // 输出：1.7