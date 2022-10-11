{
  /*
    实现类型版本的 Array.unshift。
  */
  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]

  /*
    answer:
  */
  type Unshift<T extends unknown[], U> = [U, ...T]
}
