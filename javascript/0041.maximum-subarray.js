/**
 * @param nums: A list of integers
 * @return: A integer indicate the sum of max subarray
 */
const maxSubArray = function (nums) {
    let result = nums[0];
    let curSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (curSum < 0) {
            curSum = nums[i];
        } else {
            curSum += nums[i];
        }
        result = Math.max(result, curSum);
    }

    return result;
};
