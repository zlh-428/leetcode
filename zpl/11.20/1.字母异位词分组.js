/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for(let str of strs) {
    let key = str.split('').sort().join('')
    let temp = map.get(key) ? map.get(key) : []
    map.set(key,[...temp,str])
  }
  return [...map.values()]
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));