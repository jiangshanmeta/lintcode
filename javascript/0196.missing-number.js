/**
 * @param nums: An array of integers
 * @return: An integer
 */
const findMissing = function (nums) {
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === index) {
            index++;
            continue;
        }
        if (nums[nums[index]] !== nums[index]) {
            const tmp = nums[nums[index]];
            nums[nums[index]] = nums[index];
            nums[index] = tmp;
        } else {
            index++;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
    return nums.length;
};
