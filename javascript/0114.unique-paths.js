/**
 * @param m: positive integer (1 <= m <= 100)
 * @param n: positive integer (1 <= n <= 100)
 * @return: An integer
 */
const uniquePaths = function (m, n) {
    const dp = new Array(m).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[m - 1];
};
