/* TypeScript源码实现
  type Partial<T> = {
    [P in keyof T]?: T[P];
  };
 */


interface Person {
  name: string;
  age: number;
}

type PartialPerson = Partial<Person>;

// 等价于
// type PartialPerson = {
//   name?: string;
//   age?: number;
// };

interface IPerson {
  name: string;
  age: number;
  child: {
    name: string;
    address: string;
    phone: number;
  }
}

type NewPerson = Partial<IPerson>;
// 等同于
/*
type NewPerson = {
  name?: string | undefined;
  age?: number | undefined;
  child?: {
      name: string;
      address: string;
      phone: number;
  } | undefined;
}
*/

// 报错：类型“{ name: string; }”缺少类型“{ name: string; address: string; phone: number; }”中的以下属性: address, phone
const user: NewPerson = {
  name: 'Echo',
  child: {
    name: 'James',
  }
}