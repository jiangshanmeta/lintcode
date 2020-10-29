/**
 * @param nums: an integer array
 * @return:
 */
const moveZeroes = function (nums) {
    let zeroIndex = 0;
    let unzeroIndex = 0;
    while (unzeroIndex < nums.length) {
        while (unzeroIndex < nums.length && nums[unzeroIndex] === 0) {
            unzeroIndex++;
        }
        while (zeroIndex < unzeroIndex && nums[zeroIndex] !== 0) {
            zeroIndex++;
        }
        if (unzeroIndex < nums.length && zeroIndex < unzeroIndex) {
            nums[zeroIndex] = nums[unzeroIndex];
            nums[unzeroIndex] = 0;
        }
        zeroIndex++;
        unzeroIndex++;
    }
};
