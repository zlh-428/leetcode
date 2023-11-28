function maxProfit(prices: number[]): number {
  let res: number = 0;

  for (let i: number = 1; i < prices.length; i++) {
    res += Math.max(prices[i] - prices[i - 1], 0);
  }

  return res;
}
