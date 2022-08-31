// 工具泛型

/*
  Partial:将传入的属性变为可选项
  type Partial<T> = { [P in keyof T]?: T[P] }
*/
interface IPartial {
  name: string;
  age: number;
}
type TPartial = Partial<IPartial>;

/*
  Required::将传入的属性变为必选项
  type Required<T> = { [P in keyof T]-?: T[P] };
*/
interface IRequired {
  name?: string;
  age?: number;
}
type TRequired = Required<IRequired>;

/*
  Mutable:所有属性的 readonly 移除
*/
type Mutable<T> = { -readonly [P in keyof T]: T[P] };
interface IMutable {
  readonly name: string;
  age: number;
}
type TMutable = Mutable<IMutable>;

/*
  Readonly:将传入的属性变为只读选项
  type Readonly<T> = { readonly [P in keyof T]: T[P] };
*/
interface IReadonly {
  name: string;
  age: number;
}
type TReadonly = Readonly<IReadonly>;

/*
  Record:将 K 中所有属性的值转化为 T 类型
  type Record<K extends keyof any, T> = { [P in K]: T };
*/
type TRecord = "Zoe" | "Jessica" | "Ethz";
interface IRecord {
  id: string;
  age: number;
}
let myRecord1: Record<TRecord, IRecord> = {
  Zoe: { id: "001", age: 18 },
  Jessica: { id: "002", age: 19 },
  Ethz: { id: "003", age: 20 },
};
type TMyRecord1 = "name" | "age";
type TMyRecord2 = string | number;
let myRecord2: Record<TMyRecord1, TMyRecord2> = {
  name: "Mosse",
  age: "222",
};

/*
  Pick:从 T 中取出 一系列 K 的属性
  type Pick<T, K extends keyof T> = { [P in K]: T[P] };
*/
interface IPick {
  name: string;
  age: number;
  gender: number;
}
type TPick = "name" | "gender";
type TMyPick = Pick<IPick, TPick>;

/*
  Exclude:从 T 中找出 U 中没有的元素
  type Exclude<T, U> = T extends U ? never : T;
*/
type TExclude = Exclude<1 | 2 | 3, 1 | 3 | 5>;
interface IExclude1 {
  name: string;
  age: number;
}
interface IExclude2 {
  name: string;
  gender: number;
}
type TMyExclude = Exclude<IExclude1, IExclude2>;

/*
  Extract:从 T 中找出 U 中有的元素
  type Extract<T, U> = T extends U ? T : never;
*/
type TExtract = Extract<1 | 2 | 3, 1 | 3 | 5>;

/*
  Omit:用 Pick 和 Exclude 进行组合，实现忽略对象某些属性功能
  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
*/
interface IOmit {
  name: string;
  age: number;
  gender: number;
}
type TOmit1 = Omit<IOmit, "age">;
type TMyOmit = "age" | "name";
type TOmit2 = Omit<IOmit, TMyOmit>;
