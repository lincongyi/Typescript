{
  /*
    实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。
  */
  type Trim<T> = T extends `${' ' | '\n' | '\t'}${infer Rest}${' ' | '\n' | '\t'}` ? Trim<Rest> : T

  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
}
