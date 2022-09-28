{
  // infer 占位符
  /*
    infer语法的限制如下：

    infer只能在条件类型的 extends 子句中使用
    infer得到的类型只能在true语句中使用, 即X中使用
  */
  // 推断数组元素类型
  // type get1<T> = T extends Array<infer U> ? U : T
  type get1<T> = T extends (infer U)[] ? U : never
  type Arr = Array<string | number>
  type B = get1<Arr> // B: string | number
  type C = get1<[1, 2, 3]> // C: 1 | 2 | 3
  type get2<T extends number[]> = T extends [...infer _, infer Last] ? Last : never
  type D = get2<[2, 3, 4]> // D: 4

  // 推断对象值的类型
  type obj = { name: string; age: number }
  type get3<T> = T extends { name: infer U; age: infer V } ? [U, V] : never
  type E = get3<obj> // E: [string, number]
  type get4<T> = T extends { name: infer U; age: infer U } ? U : never
  type F = get4<obj> // F: string | number

  // 推断函数类型的参数
  type fun = (name: string, age: number) => object
  type get5<T extends Function> = T extends (...args: infer R) => object ? R : never
  type G = get5<fun> // G: [string,number]

  // 推断函数类型的返回值
  type get6<T extends Function> = T extends (...args: any[]) => infer R ? R : never
  type H = get6<fun> // H: object

  // 推断字符串字面量类型
  type get7<T extends string> = T extends `${infer First}${infer _}` ? First : never
  type I = get7<'hello world'> // I: h
  type get8<T extends string> = T extends `${infer Left}-${infer Right}` ? `${Left}${get8<Right>}` : T // 递归去掉'-'
  type J = get8<'2020-02-02'> // J: 20200202
  type get9<T extends string> = T extends `${infer Left}:${infer Right}` ? Capitalize<Right> : never
  type K = get9<'hobby:football'> // K: Football

  // 综合案例
  type Shift<T> = T extends [infer L, ...infer R] ? [...R] : []
  type myShift = Shift<[2, 3, 4, 5]>

  type StartWith<T, U extends string> = T extends `${U}${infer R}` ? true : false
  type myStartWith = StartWith<'hello world', 'be'>

  type Infer<T> = T extends Array<any> ? T[number] : T
  type myInfer = Infer<['1', 2, 3, 4]> // 2 | 3 | 4 | '1'

  type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (arg: infer R) => void ? R : never

  type T1 = { a: 'a' } | { b: 'b' }
  type T2 = UnionToIntersection<T1> // { a: 'a'; } & { b: 'b'; }

  type T3 = number | string
  type T4 = UnionToIntersection<T3> // never
}
