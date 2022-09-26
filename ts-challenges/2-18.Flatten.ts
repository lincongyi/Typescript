{
  /*
    在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。
  */

  type Flatten<T extends unknown[]> = T extends [infer Left, ...infer Rest]
    ? Left extends unknown[]
      ? [...Flatten<[...Left]>, ...Flatten<Rest>]
      : [Left, ...Flatten<Rest>]
    : []

  type res = Flatten<[[[6]]]>

  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
}
