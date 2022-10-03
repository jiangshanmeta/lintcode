/**
 * @param nums: An array of integers
 * @return: An integer
 */
const maxProduct = function (nums) {
    // dp
    // dp[i][0] 以第i个元素为结尾的最大值
    // dp[i][1] 以第i个元素为结尾的最小值
    // 实现上把空间从O(N)压缩到了O(1)
    let maxVal = nums[0];
    let lastMax = nums[0];
    let lastMin = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const multi1 = lastMax * nums[i];
        const multi2 = lastMin * nums[i];
        // 以第i个元素为结尾的最大值
        lastMax = Math.max(multi1, multi2, nums[i]);
        // 以第i个元素为结尾的最小值
        lastMin = Math.min(multi1, multi2, nums[i]);
        maxVal = Math.max(maxVal, lastMax);
    }
    return maxVal;
};
