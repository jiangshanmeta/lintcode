/**
 * @param nums: the given array
 * @return: if any value appears at least twice in the array
 */
const containsDuplicate = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            return true;
        }
        map[nums[i]] = true;
    }
    return false;
};
