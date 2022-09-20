{
  // 类型编程
  type A = {
    aa: string
    Bb: string
    cc_Dd: string
  }
  type B = {
    aa: string
    Bb: string
    ccDd: string
  }
  // 编写一个Camel类型，完成这种转换

  type Camel<obj> = obj extends any // 由于ts的类型只有在用到的时候才会计算，为了触发计算cc_Dd:{eee_fff:string}加上obj extends any肯定为true的判断
    ? {
        [key in keyof obj as CamelCase<key & string>]: obj[key] extends Array<infer R extends string>
          ? Array<CamelCase<R>>
          : obj[key] extends Record<string, string>
          ? Camel<obj[key]>
          : obj[key]
      }
    : never

  type CamelCase<T extends string> = T extends `${infer Left}_${infer Right}`
    ? `${Left}${CamelCase<Capitalize<Right>>}`
    : T

  type resCamelCase = CamelCase<'aaa_dbb__cc'> // aaDbbCc

  type C = {
    aa: string
    Bb: string
    cc_Dd: {
      eee_fff: string
    }
  }
  type res = Camel<C>
  type D = {
    aa: string
    Bb: Array<'ggg_hh,j__kkk'>
    cc_Dd: {
      eee_fff: string
    }
  }
  type res2 = Camel<D>
}
