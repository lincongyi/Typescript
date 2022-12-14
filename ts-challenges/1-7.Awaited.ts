{
  /*
    假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。
    
    在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
  */

  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string

  /*
    answer:
  */
  // type MyAwaited<T> = T extends Promise<infer R> ? R : never
  type MyAwaited<T> = T extends Promise<infer U> ? (U extends Promise<unknown> ? MyAwaited<U> : U) : never
}
