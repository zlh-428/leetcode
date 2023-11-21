interface Printable {
  print(): void;
}


class Person implements Printable {
  name: string;

  constructor(name: string, age: number) {
    this.name = name;
  }

  print(): void {
    console.log(`My name is ${this.name}.`);
  }
}