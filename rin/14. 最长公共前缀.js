var longestCommonPrefix = function (strs) {
  let accStr = "";

  for (let i = 0; i < strs[0].length; i++) {
    const element = strs[0][i];

    if (strs.some((e) => !e.startsWith(accStr + element))) {
      break;
    } else {
      accStr = accStr + element;
    }
  }

  return accStr;
};
