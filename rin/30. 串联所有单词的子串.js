/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  let wordsMap = new Map();

  for (let w of words) {
    let count = wordsMap.get(w);
    wordsMap.set(w, count === void 0 ? 1 : count + 1);
  }

  let wordlength = words[0].length;

  let concateWordLength = wordlength * words.length;

  let outArray = [];

  for (let index = 0; index + concateWordLength <= s.length; index++) {
    let point = index;
    let countMap = new Map();

    while (true) {
      let word = s.substr(point, wordlength);

      let isExist = wordsMap.get(word);
      if (isExist === void 0) break;

      let count = countMap.get(word);
      if (isExist === count) break;

      countMap.set(word, count === void 0 ? 1 : count + 1);

      point += wordlength;

      if (point - index === concateWordLength) {
        outArray.push(index);
        break;
      }
    }
  }
  return outArray;
};
