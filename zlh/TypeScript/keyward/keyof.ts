interface Person {
  name: string;
  age: number;
  gender: string;
}

type Keys = keyof Person; // "name" | "age" | "gender"

function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const peopel = {
  name: 'Echo',
  age: 26,
  gender: 'male',
}

console.log(getProp(peopel, 'name'))   // 输出：Echo
console.log(getProp(peopel, 'age'))    // 输出：26
console.log(getProp(peopel, 'gender')) // 输出：male