/**
 * @param nums: a mountain sequence which increase firstly and then decrease
 * @return: then mountain top
 */
const mountainSequence = function (nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        const greaterLeft = mid > 0 ? nums[mid] - nums[mid - 1] > 0 : true;
        const greaterRight = mid < nums.length - 1 ? nums[mid] - nums[mid + 1] > 0 : true;
        if (greaterLeft && greaterRight) {
            return nums[mid];
        } else if (greaterLeft) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
};
