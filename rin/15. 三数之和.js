var threeSum = function (nums) {
  const numbers = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    const ni = numbers[i];
    if (ni > 0) break;
    if (i > 0 && ni === numbers[i - 1]) continue;

    let l = i + 1;
    let r = numbers.length - 1;

    while (l < r) {
      const nl = numbers[l],
        nr = numbers[r];

      if (ni + nl + nr === 0) {
        result.push([ni, nl, nr]);

        while (l < r && numbers[l] === nl) l++;

        while (l < r && numbers[r] === nr) r--;
      } else if (ni + nl + nr < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
};
