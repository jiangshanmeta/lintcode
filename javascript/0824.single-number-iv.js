/**
 * @param nums: The number array
 * @return: Return the single number
 */
const getSingleNumber = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (mid % 2 === 1) {
            if (nums[mid] === nums[mid - 1]) {
                low = mid + 1;
            } else if (mid < nums.length - 1 && nums[mid] === nums[mid + 1]) {
                high = mid - 1;
            } else {
                return nums[mid];
            }
        } else {
            if (nums[mid] === nums[mid + 1]) {
                low = mid + 1;
            } else if (mid > 0 && nums[mid] === nums[mid - 1]) {
                high = mid - 1;
            } else {
                return nums[mid];
            }
        }
    }
};
