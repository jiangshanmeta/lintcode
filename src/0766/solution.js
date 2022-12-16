/**
 * @param n: a number represent year
 * @return: whether year n is a leap year.
 */
const isLeapYear = function (n) {
    if ((n % 4 === 0 && n % 100 !== 0) || n % 400 === 0) {
        return true;
    }
    return false;
};
