/**
 * @param n: an integer
 * @return: if n is a power of two
 */
const isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};
