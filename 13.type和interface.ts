// type和interface
{
  // 接口重名合并
  interface IUser1 {
    name: string;
  }
  interface IUser1 {
    age: number;
  }
  let user1: IUser1 = {
    name: "Ackerman",
    age: 20,
  };

  // 类型重名报错
  type TUser1 = {
    name: string;
  };
  // type TUser1 = {}

  type TUser2 = {
    age: number;
  };

  // 类型只能合并
  type TUser3 = TUser1 & TUser2;
  // 或者组合
  type TUser4 = TUser1 | TUser2;

  interface IMember extends IUser1 {
    gender: number;
  }

  let member1: IMember = {
    name: "Gekco",
    age: 21,
    gender: 1,
  };

  // 类型与接口的联合
  let member2: IUser1 & TUser2 = {
    name: "Levil",
    age: 22,
  };
}
