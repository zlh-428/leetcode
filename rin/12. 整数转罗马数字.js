var intToRoman = function (num) {
  const hash = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  const roamnInfo = hash.reduce(
    (acc, cur) => {
      const number = cur[0];

      if (acc.rest >= number) {
        let rest = acc.rest % number;
        let roamn = cur[1].repeat(Math.floor(acc.rest / number));

        return { rest, roamn: acc.roamn + roamn };
      }
      return acc;
    },
    { rest: num, roamn: "" }
  );

  return roamnInfo.roamn;
};
