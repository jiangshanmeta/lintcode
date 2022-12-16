/**
 * @param m: An integer m denotes the size of a backpack
 * @param A: Given n items with size A[i]
 * @return: The maximum size
 */
const backPack = function (m, A) {
    const dp = new Array(m + 1).fill(false);
    dp[0] = true;
    for (let i = 0; i < A.length; i++) {
        for (let j = m; j > -1; j--) {
            if (dp[j]) {
                continue;
            }
            if (j - A[i] < 0) {
                break;
            }
            dp[j] = dp[j - A[i]];
        }
    }
    for (let j = m; j > -1; j--) {
        if (dp[j]) {
            return j;
        }
    }
};
