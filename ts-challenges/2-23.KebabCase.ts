{
  /*
    Replace the camelCase or PascalCase string with kebab-case.

    FooBarBaz -> foo-bar-baz
  */

  type KebabCase<T extends string> = T extends `${infer F}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
      ? `${Lowercase<F>}${KebabCase<Rest>}`
      : `${Lowercase<F>}-${KebabCase<Rest>}`
    : T

  type CaObO = KebabCase<'CaObO'>

  type FooBarBaz = KebabCase<'FooBarBaz'>
  const foobarbaz: FooBarBaz = 'foo-bar-baz'

  type DoNothing = KebabCase<'do-nothing'>
  const doNothing: DoNothing = 'do-nothing'
}
