{
  /*
    实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。
  */
  type myCapitalize<T extends string> = T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : never

  type capitalized = myCapitalize<'hello world'> // expected to be 'Hello world'
}
