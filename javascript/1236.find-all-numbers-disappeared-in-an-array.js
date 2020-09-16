/**
 * @param nums: a list of integers
 * @return: return a list of integers
 */
const findDisappearedNumbers = function (nums) {
    let index = 0;
    while (index < nums.length) {
        if (nums[index] === index + 1) {
            index += 1;
            continue;
        }
        const m = nums[index];
        if (nums[m - 1] !== m) {
            const tmp = nums[m - 1];
            nums[m - 1] = m;
            nums[index] = tmp;
        } else {
            index += 1;
        }
    }
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
        }
    }
    return result;
};
