/**
 * @param prices: a list of integers
 * @return: return a integer
 */
const maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0;
    }

    let buy = -prices[0];
    let sell = 0;
    let colldown = 0;
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        const newBuy = Math.max(buy, colldown - prices[i]);
        const newSell = Math.max(sell, buy + prices[i]);
        const newColldown = Math.max(colldown, sell);
        result = Math.max(newBuy, newSell, newColldown, result);
        buy = newBuy;
        sell = newSell;
        colldown = newColldown;
    }
    return result;
};
