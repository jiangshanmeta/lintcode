/**
 * @param nums: An integer array
 * @return: The second max number in the array.
 */
const secondMax = function (nums) {
    let first = Math.max(nums[0], nums[1]);
    let second = Math.min(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] >= first) {
            second = first;
            first = nums[i];
        }
    }
    return second;
};
