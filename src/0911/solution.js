/**
 * @param nums: an array
 * @param k: a target value
 * @return: the maximum length of a subarray that sums to k
 */
const maxSubArrayLen = function (nums, k) {
    // hash[key] 前缀和为key的数组最早出现的索引
    const hash = {};
    hash[0] = -1;
    let sum = 0;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (hash[sum - k] !== undefined) {
            result = Math.max(result, i - hash[sum - k]);
        }
        if (hash[sum] === undefined) {
            hash[sum] = i;
        }
    }
    return result;
};
