/**
 * @param a: An integer
 * @param b: An integer
 * @return: An integer
 */
const bitSwapRequired = function (a, b) {
    // 要转成无符号的
    a >>>= 0;
    b >>>= 0;
    let count = 0;
    while (a && b) {
        const digit1 = a & 1;
        const digit2 = b & 1;

        if (digit1 !== digit2) {
            count++;
        }

        a >>>= 1;
        b >>>= 1;
    }

    while (a) {
        const digit = a & 1;
        digit && count++;
        a >>>= 1;
    }

    while (b) {
        const digit = b & 1;
        digit && count++;
        b >>>= 1;
    }

    return count;
};
