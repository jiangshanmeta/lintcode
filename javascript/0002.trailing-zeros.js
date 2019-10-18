/**
 * @param n: A long integer
 * @return: An integer, denote the number of trailing zeros in n!
 */
const trailingZeros = function (n) {
    let count = 0;
    let base = 5;
    while(base<=n){
        count += Math.floor(n/base);
        base *= 5;
    }
    return count;
}