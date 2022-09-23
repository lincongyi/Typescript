{
  /*
    实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。
  */
  type Permutation<U, C = U> = [U] extends [never] ? [] : U extends C ? [U, ...Permutation<Exclude<C, U>>] : never

  type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

  type A = 1 | 2 | 3
  type B<T> = T extends any ? [T] : never
  type C<T> = T extends [any] ? [T] : never
  type D<T> = [T] extends any ? [T] : never
  type E<T> = [T] extends [any] ? [T] : never

  type B1 = B<A>
  type C1 = C<A>
  type D1 = D<A>
  type E1 = E<A>
}
