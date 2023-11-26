enum Direction {
  Up,
  Right,
  Down,
  Left,
}

type DirectionType = {
  [value in Direction]: number;
};

/**
type DirectionType = {
  0: number;
  1: number;
  2: number;
  3: number;
}
*/

type Property = "name" | "age" | "gender" | "address";

type PropertyMap = {
  [key in Property]: string;
};

/**
type PropertyMap = {
  name: string;
  age: string;
  gender: string;
  address: string;
}
*/
