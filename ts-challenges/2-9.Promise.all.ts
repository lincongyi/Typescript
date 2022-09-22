/*
    键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。
  */

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})

type Await<T> = T extends [infer P, ...infer U]
  ? P extends Promise<infer K>
    ? [K, ...Await<U>]
    : [P, ...Await<U>]
  : []

declare function PromiseAll<T extends readonly any[]>(values: readonly [...T]): Promise<[...Await<T>]>

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
