/**
 * @param nums: nums an array of scores
 * @return: check if player 1 will win
 */
const PredictTheWinner = function (nums) {
    const rangeSum = new Array(nums.length + 1);
    rangeSum[0] = 0;
    for (let i = 0; i < nums.length; i++) {
        rangeSum[i + 1] = rangeSum[i] + nums[i];
    }
    // dp[i][j] 在i j范围内能拿到的最大值
    const dp = new Array(nums.length);
    for (let i = dp.length - 1; i > -1; i--) {
        dp[i] = new Array(nums.length);
        dp[i][i] = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            dp[i][j] = Math.max(
                nums[i] + rangeSum[j + 1] - rangeSum[i + 1] - dp[i + 1][j],
                nums[j] + rangeSum[j] - rangeSum[i] - dp[i][j - 1]
            );
        }
    }

    return dp[0][nums.length - 1] >= rangeSum[rangeSum.length - 1] - dp[0][nums.length - 1];
};
