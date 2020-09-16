/**
 * @param nums: a list of integer
 * @param k: an integer
 * @return: return an integer, denote the number of continuous subarrays whose sum equals to k
 */
const subarraySumEqualsK = function (nums, k) {
    const map = {};
    map[0] = 1;
    let result = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map[sum - k] !== undefined) {
            result += map[sum - k];
        }
        map[sum] = (map[sum] || 0) + 1;
    }
    return result;
};
