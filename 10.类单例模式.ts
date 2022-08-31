// 类的单例模式
{
  class Axios {
    private static instance: Axios | null = null;
    private constructor() {
      console.log("running constructor");
    }
    static init() {
      if (!this.instance) this.instance = new Axios();
      return this.instance;
    }
  }

  // let instance = new Axios() // 私有的构造函数，无法直接示例化对象
  let instance = Axios.init(); // 只能通过执行类里面的方法调用构造函数
  console.log(instance);

  // 单例模式，类只生成一个示例，多次执行示例化对象只调用了一次构造函数，节省资源
  let instance2 = Axios.init();
  let instance3 = Axios.init();
  let instance4 = Axios.init();
}
