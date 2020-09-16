/**
 * @param poured: an integer
 * @param query_row: an integer
 * @param query_glass: an integer
 * @return: return a double
 */
const champagneTower = function (poured, query_row, query_glass) {
    // 空间压缩到了一维
    const dp = new Array(query_row + 1).fill(0);
    dp[0] = poured;
    for (let i = 1; i <= query_row; i++) {
        for (let j = i; j > -1; j--) {
            dp[j] = dp[j] > 1 ? (dp[j] - 1) / 2 : 0;
            if (j > 0 && dp[j - 1] > 1) {
                dp[j] += (dp[j - 1] - 1) / 2;
            }
        }
    }
    return dp[query_glass] > 1 ? 1 : dp[query_glass];
};
