/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let hash = new Map();

  for (let i = 0; i < strs.length; i++) {
    const element = strs[i];

    let array = element.split("");

    array.sort();

    let key = array.toString();

    let list = hash.get(key) ? hash.get(key) : [];

    list.push(element);

    hash.set(key, list);
  }

  return [...hash.values()];
};
