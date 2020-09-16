/**
 * @param nums: List[List[int]]
 * @param r: an integer
 * @param c: an integer
 * @return: return List[List[int]]
 */
const matrixReshape = function (nums, r, c) {
    if (nums.length * nums[0].length !== r * c) {
        return nums;
    }

    const C = nums[0].length;
    const result = [];
    let index = 0;
    for (let i = 0; i < r; i++) {
        const list = new Array(c);
        for (let j = 0; j < c; j++) {
            const mod = index % C;
            list[j] = nums[(index - mod) / C][mod];
            index++;
        }
        result.push(list);
    }
    return result;
};
