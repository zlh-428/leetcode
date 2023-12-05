var reverse = function (x) {
  const number = String(x).split("-").pop();
  const nums = number.split("").reverse();

  let accStart = false;

  const num = nums.reduce((acc, cur) => {
    if (cur != 0) {
      accStart = true;
    }

    return accStart ? (acc += cur) : "";
  }, "");

  const res = String(x).includes("-") ? Number("-" + num) : Number(num);

  if (res > 2147483647 || res < -2147483648) {
    return 0;
  }

  return res;
};
