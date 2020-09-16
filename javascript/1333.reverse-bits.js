/**
 * @param n: an integer
 * @return: return an integer
 */
const reverseBits = function (n) {
    let result = 0;
    let count = 32;
    while (count) {
        result = (result << 1) | (n & 1);
        n >>= 1;
        count--;
    }
    return result >>> 0;
};
