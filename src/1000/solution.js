/**
 * @param prices: a list of integers
 * @param fee: a integer
 * @return: return a integer
 */
const maxProfit = function (prices, fee) {
    if (prices.length === 0) {
        return 0;
    }
    let buy = -prices[0];
    let sell = 0;
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        const newBuy = Math.max(buy, sell - prices[i]);
        const newSell = Math.max(sell, buy + prices[i] - fee);
        result = Math.max(result, newBuy, newSell);
        buy = newBuy;
        sell = newSell;
    }
    return result;
};
