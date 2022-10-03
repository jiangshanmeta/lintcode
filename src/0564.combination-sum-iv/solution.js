/**
 * @param nums: an integer array and all positive numbers, no duplicates
 * @param target: An integer
 * @return: An integer
 */
const backPackVI = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] < 0) {
                continue;
            }
            dp[i] += dp[i - nums[j]];
        }
    }

    return dp[target];
};
