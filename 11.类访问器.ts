// 类访问器get和set

class Article {
  private _lists: any[] = [];
  get list(): any[] {
    // return this._lists;
    return this._lists.map((item) => item.title); // 格式化处理，类似于computed
  }
  set list(lists: any[]) {
    this._lists = lists;
  }
}

let articleList = [
  { title: "javascript" },
  { title: "typescript" },
  { title: "css" },
];
let article = new Article();
article.list = articleList;
console.log(article.list);
