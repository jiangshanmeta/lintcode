/**
 * @param num: an integer
 * @return: whether the integer is a power of 4
 */
const isPowerOfFour = function (num) {
    if (num < 1 || (num & (num - 1)) !== 0) {
        return false;
    }

    while (num > 1) {
        num >>= 2;
    }
    return num === 1;
};
