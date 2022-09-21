{
  /*
    实现内置的 Parameters 类型，而不是直接使用它。
  */

  const foo = (arg1: string, arg2: number): void => {}

  type res = typeof foo // (arg1: string, arg2: number): void

  type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer K) => any ? K : never

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

  type myFoo = {
    (arg3: string, arg4: number): void
  }

  type myFunctionParamsType = MyParameters<myFoo>
}
