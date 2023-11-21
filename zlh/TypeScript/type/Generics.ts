function toArray<T>(value: T): Array<T> {
  return [value];
}

const array: string[] = toArray("hello");


interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;