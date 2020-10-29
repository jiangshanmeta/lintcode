/**
 * @param nums: an array
 * @return: the number of longest increasing subsequence
 */
const findNumberOfLIS = function (nums) {
    // dp1[i] 以i为结尾的增长子序列的最大长度
    const dp1 = new Array(nums.length).fill(1);
    // dp2[i] 以i为结尾的长度为dp1[i]的LIS的个数
    const dp2 = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // 是否是增长子序列
            if (nums[i] > nums[j]) {
                // 是否会构成新LIS
                if (1 + dp1[j] > dp1[i]) {
                    dp1[i] = 1 + dp1[j];
                    dp2[i] = dp2[j];
                } else if (1 + dp1[j] === dp1[i]) {
                    // 和以前LIS长度一致 数量增加
                    dp2[i] += dp2[j];
                }
            }
        }
    }
    const LIS = Math.max(...dp1);
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (dp1[i] === LIS) {
            result += dp2[i];
        }
    }
    return result;
};
