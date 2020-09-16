/**
 * @param n: a positive integer
 * @return: An integer
 */
const numSquares = function (n) {
    const candidate = [];
    const max = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= max; i++) {
        candidate.push(i * i);
    }
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < candidate.length; j++) {
            if (i < candidate[j]) {
                break;
            }
            dp[i] = Math.min(dp[i], dp[i - candidate[j]] + 1);
        }
    }
    return dp[n];
};
