/**
 * @param x: an integer
 * @param y: an integer
 * @return: return an integer, denote the Hamming Distance between two integers
 */
const hammingDistance = function (x, y) {
    let result = 0;
    while (x || y) {
        const digit1 = x & 1;
        const digit2 = y & 1;
        if (digit1 !== digit2) {
            result++;
        }
        x >>= 1;
        y >>= 1;
    }
    return result;
};
