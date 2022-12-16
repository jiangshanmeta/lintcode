/**
 * @param n: a non-negative integer
 * @return: the total number of full staircase rows that can be formed
 */
const arrangeCoins = function (n) {
    const x = Math.floor(Math.sqrt(2 * n));
    if (x * (x + 1) / 2 > n) {
        return x - 1;
    }
    return x;
};
