// https://leetcode.com/problems/best-time-to-buy-and-sell-stock
function maxProfit(prices: number[]): number {
    let min = Number.POSITIVE_INFINITY;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        const cur = prices[i];
        maxProfit = Math.max(maxProfit, cur - min);
        min = Math.min(min, cur);
    }

    return maxProfit;
}
