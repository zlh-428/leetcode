// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function(source: string, subString: string) {
  let result = source.search(subString);

  // return ""; // error 不能返回字符串
  return result > -1;
}
