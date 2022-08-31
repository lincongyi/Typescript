// 类
{
  enum Gender {
    MALE,
    FEMALE,
  }

  class User {
    name: string;
    protected age: number;
    private isMarried: boolean = false;
    // 在构造函数的参数中加上public，可以直接在类中添加该属性，不加public，只是单纯的参数
    constructor(name: string, age: number, public gender: Gender) {
      this.name = name;
      this.age = age;
    }
    getUser() {
      return `${this.name} is ${this.age}'s old`;
    }
    protected getGender() {
      return `${this.name}'s gender is ${Gender[this.gender]} `;
    }
    getUserGender() {
      return this.getGender();
    }
    private getIsMarried() {
      return `${this.name} is ${this.isMarried ? "not" : ""} married`;
    }
  }

  let user1 = new User("zoe", 18, Gender.FEMALE);
  let user2 = new User("danny", 20, Gender.MALE);

  let users: User[] = []; // 定义成User类型的数组，只能push进User类实例化的对象
  users.push(user1, user2);
  console.log(users);

  /*
    方法访问
  */
  // 实例对象无法直接调用protected方法
  // console.log(user1.getGender());
  // 只能通过调用public方法里访问protected方法
  // console.log(user1.getUserGender);

  //
  class Employee extends User {
    employId: number;
    constructor(name: string, age: number, gender: Gender, employId: number) {
      super(name, age, gender);
      this.employId = employId;
    }
    getEmployeeGender() {
      return `Employee ${this.getGender()}`;
    }
  }

  let employee1 = new Employee("jozy", 22, Gender.FEMALE, 101);
  console.log(employee1);
  // 继承的子类也无法直接访问父类的protected方法
  // console.log(employee1.getGender());
  console.log(employee1.getEmployeeGender());
}
