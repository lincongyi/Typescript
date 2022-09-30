// 交叉类型

{
  interface Person {
    name: string
    age: number
    id?: string
  }

  interface Employee {
    company: string
    level: number
  }

  type staffType = Person & Employee

  const staff: staffType = {
    name: 'zoe',
    age: 28,
    company: 'ali',
    level: 4
  }

  let person2: { name: string } & { age: number } = { name: 'zoe', age: 20 }

  // 特殊场景
  type User = {
    name: string
    id: number
  } & Person

  const user: User = {
    name: 'stephy',
    age: 20,
    id: 100 as never
    // id: 100 // id属性为never类型，由于string和number的交集是never。只能强制断言id是never类型
  }

  type A = {
    id: 'A'
    address: string
  }
  type B = {
    id: 'B'
    address: string
  } & A

  const b: B = {} as never // 如果是明确的值，B类型直接等于never

  type C = {
    method: (n: number) => void
  }
  type D = {
    method: (n: string) => void
  }
  type E = C & D
  // 类型属性是函数的话，他们的交集是函数参数的并集
  const e: E = {
    method: (n) => console.log(n) // n:string | number
  }

  type F = (n: number) => void
  type G = ((n: string) => void) & F
  const g: G = (n) => console.log(n) // n:string | number
}
