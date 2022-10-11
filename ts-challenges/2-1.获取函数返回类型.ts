{
  /*
    不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 泛型。
  */

  const fn = (v: boolean) => {
    if (v) return 1
    else return 2
  }

  type res = typeof fn // (v: boolean) => 1 | 2

  type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

  /*
    answer:
  */
  type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never
}
