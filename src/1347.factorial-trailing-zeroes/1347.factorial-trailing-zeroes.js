/**
 * @param n: a integer
 * @return: return a integer
 */
const trailingZeroes = function (n) {
    let result = 0;
    let base = 5;
    while (base <= n) {
        result += parseInt(n / base);
        base *= 5;
    }
    return result;
};
