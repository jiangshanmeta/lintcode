/**
 * @param nums: an integer array and all positive numbers, no duplicates
 * @param target: An integer
 * @return: An integer
 */
const backPackIV = function (nums, target) {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i < nums.length; i++) {
        // 因为一个物品可以无限次使用
        for (let j = nums[i]; j < dp.length; j++) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[target];
};
