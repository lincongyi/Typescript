// Typescript泛型
{
  function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
      target[id] = (<T>source)[id];
    }
    return target;
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  console.log(copyFields(x, { b: 10, d: 20 }));

  interface ICardBrand {
    id: number;
    name: string;
    isSelected: boolean;
  }

  // let cardBrand: Array<ICardBrand> = [
  let cardBrand: ICardBrand[] = [
    { id: 1, name: "Apollo", isSelected: false },
    { id: 2, name: "Koenigsegg", isSelected: false },
    { id: 3, name: "Maserati", isSelected: false },
    { id: 4, name: "Ferrari", isSelected: false },
  ];

  type TFoo1 = Exclude<keyof { name: string; age: number }, "name">;
  type TFoo2 = Omit<{ name: string; age: number }, "name">;

  // 要求传入的参数必须有length属性
  type UU = { length: number };
  function getLength1<U extends { length: number }>(arg: U): number {
    return arg.length;
  }

  console.log(getLength1("hello world"));
  console.log(getLength1([1, 2, 3, 4]));

  // 箭头函数泛型
  // let fn = <T>(arg: { length: number }): number => arg.length;
  // 要求传入的必须是一个数组
  let getLength2 = <T>(arg: T[]): number => {
    return arg.length;
  };
  console.log(getLength2<string>(["A", "B", "C"]));
  console.log(getLength2<number>([100, 200, 300]));
  console.log(getLength2<number | boolean>([4, 5, 6, true]));

  // 在类中使用泛型
  class Collection<T> {
    data: T[] = [];
    push(...item: T[]): void {
      this.data.push(...item);
    }
    shift(): T | undefined {
      return this.data.shift();
    }
  }

  let stringCollection = new Collection<string>();
  stringCollection.push("1", "2");
  console.log(stringCollection.shift());

  let numberCollection = new Collection<number>();
  numberCollection.push(3, 4, 5);
  console.log(numberCollection.shift());

  type User = {
    name: string;
    age: number;
  };
  let user1: User = {
    name: "zoe",
    age: 18,
  };
  let user2: User = {
    name: "natalie",
    age: 28,
  };
  let userCollection = new Collection<User>();
  userCollection.push(user1, user2, { name: "grace", age: 20 });

  interface IArticle<T, U> {
    id: string;
    title: string;
    price: number;
    isSoleOut: T;
    comments: U[];
  }
  type TComment = {
    content: string;
  };
  const myArticle: IArticle<boolean | number, TComment> = {
    id: "001",
    title: "js红宝书",
    price: 30,
    isSoleOut: 1,
    comments: [],
  };
}
