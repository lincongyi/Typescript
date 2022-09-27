{
  /*
    实现一个将接收到的String参数转换为一个字母Union的类型。
  */

  type Test = '123'

  type StringToUnion<T> = T extends `${infer Left}${infer Rest}` ? Left | StringToUnion<Rest> : never

  // type Split<T extends string> = T extends `${infer U}${infer Rest}` ? [U, ...Split<Rest>] : []

  // type StringToUnion<T> = T extends infer U extends string ? Split<U>[number] : T

  type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"
}
