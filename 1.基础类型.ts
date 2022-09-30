// 基础类型

let isBoolean: boolean = false // Boolean类型

let isNumber: number = 20 // Number类型

let isString: string = 'hello world' // String类型

// 数组的两种定义方法
let isArray1: number[] = [1, 2, 3]
let isArray2: Array<string> = ['a', 'b', 'c']

let arr1: string[] = ['a', 'b']
let arr2: number[] = [1, 2, 3]
let arr3: (string | number)[] = [1, 2, 3, 'a', 'b']
let arr4: string[] | number[] = ['a', 'b', 'c']
arr4 = [1, 2, 3]

let isAny: any = 30 // Any类型，相当于对该变量关闭了ts的检测
isAny = 'good'

let tuple: [number, string, number] = [1, 'zhangmazi', 100] // Tuple元组类型
console.log(tuple)

let myNull: null = null // Null类型

// Void类型，常用于函数，表示没有任何类型返回
const fn = (): void => {
  console.log('hello ts')
}
