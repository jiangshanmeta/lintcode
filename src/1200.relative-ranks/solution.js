/**
 * @param nums: List[int]
 * @return: return List[str]
 */
const findRelativeRanks = function (nums) {
    const valueIndexMap = {};
    for (let i = 0; i < nums.length; i++) {
        valueIndexMap[nums[i]] = i;
    }
    nums.sort((a, b) => b - a);
    const result = new Array(nums.length);
    result[valueIndexMap[nums[0]]] = 'Gold Medal';
    result[valueIndexMap[nums[1]]] = 'Silver Medal';
    result[valueIndexMap[nums[2]]] = 'Bronze Medal';
    for (let i = 3; i < nums.length; i++) {
        result[valueIndexMap[nums[i]]] = '' + (i + 1);
    }

    return result;
};
