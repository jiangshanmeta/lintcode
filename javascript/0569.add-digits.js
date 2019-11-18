/**
 * @param num: a non-negative integer
 * @return: one digit
 */
const addDigits = function (num) {
    // https://en.wikipedia.org/wiki/Digital_root  求数根
    return (num-1)%9+1;
}

