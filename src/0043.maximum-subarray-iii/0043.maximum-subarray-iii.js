/**
 * @param nums: A list of integers
 * @param k: An integer denote to find k non-overlapping subarrays
 * @return: An integer denote the sum of max k non-overlapping subarrays
 */
const maxSubArray = function (nums, k) {
    // intervalMax[i][j] num[i...j] 内子数组和的最大值
    const intervalMax = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        intervalMax[i] = new Array(nums.length);
        intervalMax[i][i] = nums[i];
        let left = nums[i];
        let leftMax = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            left = left > 0 ? nums[j] + left : nums[j];
            leftMax = Math.max(left, leftMax);
            intervalMax[i][j] = leftMax;
        }
    }
    // dp[i][j] i次数组长度为j+1的最大子数组和 压缩成一维数组了
    const dp = intervalMax[0].slice(0);
    for (let i = 2; i <= k; i++) {
        // 总共分成i个子数组 最少需要i个数字，对应数组下标i-1
        for (let j = nums.length - 1; j >= i - 1; j--) {
            dp[j] = -Infinity;
            // 以m为界限划分左右两个子序列 左侧i-1个 右侧1个
            // 右侧至少1个数字，索引m<j
            // 左侧至少i-1个数字，所以m>=i-2
            for (let m = i - 2; m < j; m++) {
                dp[j] = Math.max(dp[j], dp[m] + intervalMax[m + 1][j]);
            }
        }
    }

    return dp[nums.length - 1];
};
