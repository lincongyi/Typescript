{
  /*
    实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。
  */
  type ReplaceAll<T extends string, U extends string, V extends string> = T extends `${infer Left}${U}${infer Right}`
    ? ReplaceAll<`${Left}${V}${Right}`, U, V>
    : T

  type replaced = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
}
