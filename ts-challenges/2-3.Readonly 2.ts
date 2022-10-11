{
  /*
    实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。

    K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。
  */

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type res = MyReadonly2<Todo, 'title' | 'description'>

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false
  }

  todo.title = 'Hello' // Error: cannot reassign a readonly property
  todo.description = 'barFoo' // Error: cannot reassign a readonly property
  todo.completed = true // OK

  /*
    answer:
  */
  type MyExclude<T, U> = T extends U ? never : T

  type MyReadonly2<T, U extends keyof T> = {
    readonly [key in keyof T as key extends U ? key : never]: T[key]
  } & {
    [key in MyExclude<keyof T, U>]: T[key]
  }

  // type MyReadonly2<T, U extends keyof T> = {
  //   [key in keyof T as key extends U ? never : key]: T[key]
  // } & {
  //   readonly [key in U]: T[key]
  // }
}
