type T40 = keyof any;
type T41 = keyof unknown;
type T42 = keyof never;

type T50<T> = {
  [P in keyof T]: number;
};

type T51 = T50<number>;
type T52 = T50<string>;
type T53 = T50<any>;

let val1: T51 = 10;
let val2: T52 = "10";
let val3: T53 = {
  // name: "111",
  age: 20,
};
let val4: T42 = "val4";

type T54 = 1 | 2 | 3;
let val5: number = 100;
let val6 = val5 as T54;
// val6 = 4;
val6 = 2;

const Eric = {
  baseSalary: 10000,
  monthlyBounds: 2000,
};

const Ada = {
  contractSalary: 15000,
};

interface keyOptions {
  [key: string]: number;
}

const calculateSalary = (staff: keyOptions) => {
  let total = 0;
  for (let key in staff) {
    total += staff[key];
  }
  return total;
};

console.log(calculateSalary(Ada));

interface Person {
  name: string;
  age: number;
  height: number;
}

type PP = Pick<Person, "name" | "age">;
type TOmit = Omit<Person, "height">;

const person: PP = {
  name: "liu",
  age: 20,
};

// Pick工具函数
type MyPick<T, U extends keyof T> = {
  [P in U]: T[P];
};

type User = {
  id: number;
  name: string;
  gender: number;
};

type myUser = MyPick<User, "name" | "gender">;
