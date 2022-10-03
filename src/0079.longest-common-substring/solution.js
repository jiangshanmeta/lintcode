/**
 * @param A: A string
 * @param B: A string
 * @return: the length of the longest common substring.
 */
const longestCommonSubstring = function (A, B) {
    // dp[i][j] 以A[i] B[j] 为结尾可以构成的最大的子串长度
    // 空间压缩成了一维的
    const dp = new Array(B.length + 1).fill(0);
    let result = 0;
    for (let i = 1; i <= A.length; i++) {
        for (let j = B.length; j > 0; j--) {
            if (A[i - 1] === B[j - 1]) {
                dp[j] = dp[j - 1] + 1;
                result = Math.max(dp[j], result);
            } else {
                dp[j] = 0;
            }
        }
    }
    return result;
};
