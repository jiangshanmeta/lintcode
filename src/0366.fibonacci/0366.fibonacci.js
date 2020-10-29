/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
const fibonacci = function (n) {
    n--;
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    let a = 0;
    let b = 1;
    let count = 1;
    while (count < n) {
        count++;
        [a, b, ] = [b, a + b, ];
    }
    return b;
};
