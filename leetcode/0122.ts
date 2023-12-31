// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii
function maxProfit(prices: number[]): number {
    if (prices.length === 1) return 0;

    const allDiffs = prices.map((p, idx) => {
        if (idx === prices.length - 1) {
            return 0;
        } else {
            return Math.max(0, prices[idx + 1] - prices[idx]);
        }
    });
    return allDiffs.reduce((acc, cur) => acc + cur);
}
