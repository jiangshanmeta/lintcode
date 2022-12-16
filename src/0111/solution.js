/**
 * @param n: An integer
 * @return: An integer
 */
const climbStairs = function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    }
    let a = 1;
    let b = 2;
    for (let i = 2; i < n; i++) {
        [a, b, ] = [b, a + b, ];
    }
    return b;
};
