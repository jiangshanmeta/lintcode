/**
 * @param n: the integer to be reversed
 * @return: the reversed integer
 */
const reverseInteger = function (n) {
    let flag = 1;
    if (n < 0) {
        flag = -1;
        n = -n;
    }
    let result = 0;
    while (n) {
        const digit = n % 10;
        result = result * 10 + digit;
        n = (n - digit) / 10;
    }
    result *= flag;
    if (result > 2147483647 || result < -2147483648) {
        return 0;
    }
    return result;
};
