// 接口

interface Person {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  age?: number;
}

let tom: Person = {
  name: "Tom",
  age: 25,
  // gender: 'male',
};

let jack: Person2 = {
  name: "Jack",
  // gender: 'male'
};

interface Person3 {
  name: string;
  // age?: number;
  [propName: string]: string | number;
}

let zoe: Person3 = {
  name: "Zoe",
  age: 20,
  gender: "female",
};

// 只读属性readonly
interface Person4 {
  readonly id: number;
  name: string;
  [propName: string]: any;
}

let micheal: Person4 = {
  id: 89757,
  name: "Micheal",
  gender: "male",
};

// micheal.id = 9527;

interface Person5 extends Person {
  height: number;
}

let judy: Person5 = {
  name: "judy",
  age: 21,
  height: 1.68,
};

let sandy: Person = judy;

// let judy: Person = {
//   name: "judy",
//   age: 21,
// };

// let sandy: Person5 = judy;

/*
  Person 是 Person5 的父类，不能将父类的实例赋值给类型为子类的变量。

  深入的讲，它们的核心区别就在于：

  judy 赋值给 sandy，需要满足 Person 兼容 Person5 才行

  let sandy: Person = judy;
  等价于
  let sandy = judy as Person
*/
