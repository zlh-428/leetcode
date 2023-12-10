var romanToInt = function (s) {
  const hashMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let number = 0;

  for (let i = 0; i < s.length; i++) {
    const element = s[i] + s[i + 1];

    if (hashMap[element]) {
      number += hashMap[element];
      i++;
    } else {
      hashMap[s[i]] && (number += hashMap[s[i]]);
    }
  }

  return number;
};
