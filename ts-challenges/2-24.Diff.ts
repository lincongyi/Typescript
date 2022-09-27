{
  /*
    获取两个接口类型中的差值属性。
  */

  type Foo = {
    a: string
    b: number
  }
  type Bar = {
    a: string
    c: boolean
  }
  type Zoo = {
    b: number
    d: string
  }

  type Diff<T extends Record<PropertyKey, unknown>, U extends Record<PropertyKey, unknown>> = {
    [key in Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>]: key extends keyof T ? T[key] : U[key]
  }

  type Result1 = Diff<Foo, Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar, Zoo> // { a: string, b: number, c: boolean, d: string }
}
