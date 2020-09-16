/**
 * @param nums: the given array
 * @param k: the given number
 * @return:  whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k
 */
const containsNearbyDuplicate = function (nums, k) {
    const lastIndexMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (lastIndexMap[nums[i]] !== undefined && i - lastIndexMap[nums[i]] <= k) {
            return true;
        }
        lastIndexMap[nums[i]] = i;
    }
    return false;
};
