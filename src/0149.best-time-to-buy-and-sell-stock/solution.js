/**
 * @param prices: Given an integer array
 * @return: Maximum profit
 */
const maxProfit = function (prices) {
    let result = 0;
    let prevMin = Infinity;
    for (let i = 0; i < prices.length; i++) {
        result = Math.max(result, prices[i] - prevMin);
        prevMin = Math.min(prevMin, prices[i]);
    }
    return result;
};
