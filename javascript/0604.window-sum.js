/**
 * @param nums: a list of integers.
 * @param k: length of window.
 * @return: the sum of the element inside the window at each moving.
 */
const winSum = function (nums, k) {
    if (k === 0 || k > nums.length) {
        return [];
    }

    const result = [];
    let sum = 0;
    for (let i = 0; i < k - 1; i++) {
        sum += nums[i];
    }

    for (let i = k - 1; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
        sum -= nums[i - k + 1];
    }
    return result;
};
