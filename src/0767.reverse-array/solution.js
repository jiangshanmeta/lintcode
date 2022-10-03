/**
 * @param nums: a integer array
 * @return:
 */
const reverseArray = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const tmp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = tmp;
    }
};
