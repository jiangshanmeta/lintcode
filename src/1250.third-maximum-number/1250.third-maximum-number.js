/**
 * @param nums: the array
 * @return: the third maximum number in this array
 */
const thirdMax = function (nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= first) {
            if (nums[i] > first) {
                third = second;
                second = first;
                first = nums[i];
            }
        } else if (nums[i] >= second) {
            if (nums[i] > second) {
                third = second;
                second = nums[i];
            }
        } else if (nums[i] > third) {
            third = nums[i];
        }
    }

    return third === -Infinity ? first : third;
};
