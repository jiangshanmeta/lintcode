/**
 * @param A: A string
 * @param B: A string
 * @return: The length of longest common subsequence of A and B
 */
const longestCommonSubsequence = function (A, B) {
    let dp = new Array(B.length + 1).fill(0);
    for (let i = 1; i <= A.length; i++) {
        const newDp = new Array(B.length + 1);
        newDp[0] = 0;
        for (let j = 1; j <= B.length; j++) {
            newDp[j] = Math.max(
                dp[j],
                A[i - 1] === B[j - 1] ? dp[j - 1] + 1 : 0,
                newDp[j - 1]
            );
        }
        dp = newDp;
    }

    return Math.max(...dp);
};
