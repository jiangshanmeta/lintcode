/**
 * @param n: the given number
 * @return: Sum of elements in subsets
 */
const subSum = function (n) {
    let result = 0;
    for (let i = 1; i < n + 1; i++) {
        result += i * Math.pow(2, n - 1);
    }
    return result;
};
