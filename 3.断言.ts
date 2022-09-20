// Typescript断言

// 1.“尖括号” 语法
let str = "hello world";
let strLength = (<string>str).length;
console.log(strLength);

// 2.as 语法
let num = 1;
let numPlus: number = ++(num as number);
let num2String: string = (num as number).toFixed(2);
console.log(numPlus);
console.log(num2String);

interface Animal {
  name: string;
}
interface Cat {
  name: string;
  run(): void;
}

// let tomy: Cat = {
//   name: "Tomy",
//   run: () => {
//     console.log("run");
//   },
// };
// let animal: Animal = tomy;
// console.log(typeof animal);

let animal: Animal = {
  name: "Animal",
};
let tomy = animal as Cat;
// let tomy: Cat = animal;

let hd: string | undefined = "bbb";
hd = undefined;

function enumFn(arg: boolean) {
  return arg ? "1" : 0;
}

let enumFnRes = enumFn(false) as string; // 强制告诉ts enumFnRes是string类型
// let enumFnRes:string = enumFn(false);
console.log("enumFnRes", enumFnRes);

let myLink1 = "www.163.com"; // 系统默认转string类型
const myLink2 = "www.baidu.com"; // const定义的直接是值类型
let myLink3 = "www.sina.com" as const; // string转值类型

let a = 20 as const,
  // a = 30, // 值类型无法重新赋值
  b = "hello";
const myArr = [a, b, 100, false, "cccccc"] as const;
// myArr[2] = 101 // readonly不可修改
let myObj = {
  msg: b,
  age: a,
} as const;
// myObj.age = 30;
let myValue = myArr[1];
myValue = "world";

function enumMyFn() {
  let myString = "hello";
  let myFn = (x: number, y: number): number => x + y;
  return [myString, myFn] as const;
}
// let [myS, myF] = enumMyFn();
// console.log((myF as Function)(2, 3));
// let [myS, myF] = enumMyFn() as [string, Function];
// console.log(myF(2, 3));
let [myS, myF] = enumMyFn();
console.log(myF(2, 3));

let div = document.getElementsByName("div");
let myDiv = document.querySelector(".myDiv") as HTMLDivElement;
let myP = <HTMLElement>document.querySelector(".myP");
let mySpan = document.querySelector(".mySpan")!; // 感叹号，非空断言
let myLink = document.querySelector("#myLink") as HTMLLinkElement;

class MyHtml {
  el: HTMLDivElement;
  constructor(el: HTMLDivElement) {
    this.el = el;
  }
  getHtml() {
    return this.el.innerHTML;
  }
}

// class MyHtml {
//   constructor(public el: HTMLDivElement) {}
//   getHtml() {
//     return this.el.innerHTML;
//   }
// }

let myHtml = new MyHtml(myDiv);
// myHtml.getHtml();
