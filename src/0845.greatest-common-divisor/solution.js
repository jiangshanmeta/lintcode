/**
 * @param a: the given number
 * @param b: another number
 * @return: the greatest common divisor of two numbers
 */
const gcd = function (a, b) {
    if (a < b) {
        [a, b, ] = [b, a, ];
    }
    while (b !== 0) {
        const tmp = a % b;
        a = b;
        b = tmp;
    }
    return a;
};
