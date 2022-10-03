/**
 * @param A: an array
 * @return: the number of arithmetic slices in the array A.
 */
const numberOfArithmeticSlices = function (A) {
    let result = 0;
    // dp[i] 以A[i]为结尾 以A[i]-A[i-1]为差的等差数列个数
    const dp = new Array(A.length).fill(0);
    for (let i = 2; i < A.length; i++) {
        // 能够成等差数列
        if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
            dp[i] = dp[i - 1] + 1;
        }
        result += dp[i];
    }
    return result;
};
