/**
 * @param x: the wall's height
 * @return: YES or NO
 */
const isBuild = function (x) {
    const dp = new Array(x + 1);
    dp[0] = true;
    dp[3] = true;
    dp[7] = true;
    for (let i = 8; i < x + 1; i++) {
        dp[i] = dp[i - 3] || dp[i - 7];
    }
    return dp[x] ? 'YES' : 'NO';
};
