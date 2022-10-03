/**
 * @param K: An integer
 * @param prices: An integer array
 * @return: Maximum profit
 */
const maxProfit = function (K, prices) {
    K = Math.min(K, Math.ceil(prices.length / 2));
    const dp = new Array(2 * K + 1).fill(-Infinity);
    dp[0] = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = dp.length - 1; j > 0; j--) {
            dp[j] = Math.max(dp[j], dp[j - 1] + prices[i] * (j & 1 ? -1 : 1));
        }
    }
    return Math.max(...dp);
};
