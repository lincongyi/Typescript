{
  /*
    计算字符串的长度，类似于 String#length 。
  */
  type strRes = 'hello'['length'] // number

  type arrRes = [1, 2, 3]['length'] // 3

  // 只能把字符串转成字符串数组，然后再计算数组的长度

  type formatString<T> = T extends `${infer Left}${infer Rest}` ? [Left, ...formatString<Rest>] : []

  type Length<T extends string> = formatString<T>['length']

  type res = Length<'hello world'>
}
