{
  // 协变与逆变

  // 协变：相当于子类型可赋值给父类型
  // 逆变：相当于父类型可赋值给子类型，例如：函数的参数有逆变的性质（而返回值是协变的，也就是子类型可以赋值给父类型）
  type Person = {
    name: string
    age: number
  }
  type Ackerman = {
    name: string
    age: number
    gender: number
    hobbies: string[]
  }

  let person: Person = {
    name: '',
    age: 20
  }
  let ackerman: Ackerman = {
    name: 'ackerman',
    age: 21,
    gender: 1,
    hobbies: []
  }
  person = ackerman // 协变 -> 子类型可赋值给父类型
  // ackerman = person // 报错，类型“Person”缺少类型“Ackerman”的属性，不符合协变原则

  type PrintName = (person: Person) => void
  let printName: PrintName = (person) => console.log(person.name)

  type PrintHobbies = (akcerman: Ackerman) => void
  let printHobbies: PrintHobbies = (akcerman) => console.log(akcerman.hobbies)

  // 因为函数声明的时候是按照 Person 来约束类型，但是调用的时候是按照 Ackerman 的类型来访问的属性和方法，那自然类型不安全了，所以就会报错。
  // printName = printHobbies
  printHobbies = printName

  /*
    ----------------------------------------------------------------------------------------------------
  */

  class Animal {
    public name: string
    constructor(name: string) {
      this.name = name
    }
    move() {
      console.log('animal is moving')
    }
  }

  class Cat extends Animal {
    public color: string
    constructor(name: string, color: string) {
      super(name)
      this.color = color
    }
    sleep() {
      console.log('cat is sleeping')
    }
  }

  class WhiteCat extends Cat {
    run() {
      console.log('white cat is running')
    }
  }

  // 继承关系：WhiteCat -> Cat -> Animal
  let animal: Animal = new Animal('')
  let cat: Cat = new Cat('', 'black')
  let whiteCat: WhiteCat = new WhiteCat('', 'black')

  animal = cat
  animal = whiteCat
  cat = whiteCat
  // cat = animal // 报错，类型“Animal”缺少类型“Cat”中的属性，不符合协变原则

  type GetAnimal = (animal: Animal) => void
  type GetCat = (cat: Cat) => void
  type GetWhiteCat = (whiteCat: WhiteCat) => void

  let getAnimal: GetAnimal = (animal: Animal) => animal.move()
  let getCat: GetCat = (cat: Cat) => cat.sleep()
  let getWhiteCat: GetWhiteCat = (whiteCat: WhiteCat) => whiteCat.run()

  // getAnimal = getCat // getAnimal是GetAnimal类型的，无法访问Cat类型的color属性和sleep方法
  // getAnimal = getWhiteCat // 同上
  // getCat = getWhiteCat
  getCat = getAnimal

  /*
    假如现在有一个函数，类型为(param: Cat) => Cat
    我们可以把这个问题分解成两个部分参数兼容性和返回值兼容性。

    参数兼容：(param: Cat) => void的兼容类型是什么？
    返回值兼容：() => Cat的兼容类型是什么？

    1.参数兼容
    我们假设(param: Cat) => void为A，此时有以下两种函数：
  
    B: (param: WhiteCat) => void
    C：(param: Animal) => void

    那么A兼容哪一个函数？

    假设兼容B
  */
  let A: (params: Cat) => void
  let B = (params: WhiteCat) => {
    console.log(params.color)
    params.run()
  }
  // A = B // 报错，A函数参数属于Cat类型，并没有WhiteCat类型的run方法；假设不成立
  // A(new Cat('', 'orange'))

  /*
    假设兼容C
  */
  let C = (params: Animal) => {
    console.log(params.name)
    params.move()
  }
  A = C // A函数参数Cat类型，继承于Animal，有所有Animal里面的属性和方法，所以函数成功运行；假设成立
  A(new Cat('', 'orange'))

  // 所以(param: Animal) => void -> (param: Cat) => void 。根据前面的定义可以看出函数参数是逆变的。

  /*
    2.返回值兼容
    我们假设() => Cat为D，此时有以下两种函数：

    E: () => Animal
    F：() => WhiteCat

    那么D兼容哪一个函数？

    假设兼容E
  */
  let D: () => Cat = () => new Cat('', 'gray')
  let E = () => new Animal('')
  // D = E // 由于D的返回值是Cat类型，当E赋值给D之后，D就无法访问Cat类型中不存在于Animal类型中的方法和属性了；假设不成立
  let resD = D()
  resD.move()
  resD.sleep()

  /*
    假设兼容F
  */
  let F = () => new WhiteCat('', 'white')
  D = F
  let resF = D()
  resF.move()
  resF.sleep() // 函数运行成功；假设成立
  // resF.run() // Cat属性不存在run方法

  // 所以() => WhiteCat -> () => Cat。根据前面的定义可以看出函数返回值是协变的。
  /*
    总结:
        类型赋值:子类型可赋值给父类型,属于协变
        函数参数:父类型可赋值给子类型,属于逆变
        函数返回值:子类型可赋值给父类型,属于协变
  */
}
