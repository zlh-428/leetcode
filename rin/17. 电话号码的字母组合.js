/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
  
    const res = [];
    const map = {
      0: "",
      1: "",
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz",
    };
  
    const DFS = (s, i) => {
      if (i >= digits.length) {
        res.push(s);
        return;
      }
      const string = map[digits[i]];
      console.log(string, "string +++");
      for (let index = 0; index < string.length; index++) {
        const element = string[index];
        DFS(s + element, i + 1);
      }
    };
  
    DFS("", 0);
  
    return res;
  };