/**
 * @param n: An integer
 * @return: True or false
 */
const checkPowerOf2 = function (n) {
    return n>0 && (n&(n-1)) === 0;
}
