{
  /*
    在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
  */
  type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

  type Includes<T extends unknown[], U> = T extends [infer P, ...infer K]
    ? Equal<P, U> extends true
      ? true
      : Includes<K, U>
    : false

  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
}
