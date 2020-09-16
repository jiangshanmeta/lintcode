/**
 * @param s1: a string
 * @param s2: a string
 * @return: the lowest ASCII sum of deleted characters to make two strings equal
 */
const minimumDeleteSum = function (s1, s2) {
    const dp = new Array(s1.length + 1);
    dp[0] = [0, ];
    for (let i = 0; i < s2.length; i++) {
        dp[0][i + 1] = dp[0][i] + s2.charCodeAt(i);
    }
    for (let i = 1; i <= s1.length; i++) {
        dp[i] = [dp[i - 1][0] + s1.charCodeAt(i - 1), ];
        for (let j = 1; j <= s2.length; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i][j - 1] + s2.charCodeAt(j - 1),
                    dp[i - 1][j] + s1.charCodeAt(i - 1)
                );
            }
        }
    }
    return dp[s1.length][s2.length];
};
