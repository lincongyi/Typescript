// 类类型

interface IEvent1 {
  fly();
}

interface IEvent2 {
  swim();
}

class MyEvent1 implements IEvent1 {
  name: string;
  constructor(name) {
    this.name = name;
  }
  fly() {
    throw new Error("Method not implemented.");
  }
}

let myEvent1 = new MyEvent1("zero");
console.log(myEvent1.name);

class MyEvent2 implements IEvent1, IEvent2 {
  age: number;
  constructor() {
    this.age = 20;
  }
  fly() {
    throw new Error("Method not implemented.");
  }
  swim() {
    throw new Error("Method not implemented.");
  }
}

let myEvent2 = new MyEvent2();
console.log(myEvent2.age);
