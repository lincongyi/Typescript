// 交叉类型

{
  interface Person {
    name: string;
    age: number;
    company: string;
  }

  interface Employee {
    company: string;
    level: number;
  }

  type staffType = Person & Employee;

  const staff: staffType = {
    name: "zoe",
    age: 28,
    company: "ali",
    level: 4,
  };

  let person2: { name: string } & { age: number } = { name: "zoe", age: 20 };
}
