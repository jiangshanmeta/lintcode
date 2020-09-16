/**
 * @param nums: A list of integers.
 * @param k: An integer
 * @return: The maximum number inside the window at each moving.
 */
const maxSlidingWindow = function (nums, k) {
    if (k === 0 || k > nums.length) {
        return [];
    }

    const result = [];
    const max = -Infinity;
    const slidingWindow = [];
    for (let i = 0; i < k - 1; i++) {
        while (slidingWindow.length && slidingWindow[slidingWindow.length - 1] < nums[i]) {
            slidingWindow.pop();
        }
        slidingWindow.push(nums[i]);
    }

    for (let i = k - 1; i < nums.length; i++) {
        while (slidingWindow.length && slidingWindow[slidingWindow.length - 1] < nums[i]) {
            slidingWindow.pop();
        }
        slidingWindow.push(nums[i]);
        result.push(slidingWindow[0]);
        if (nums[i - k + 1] === slidingWindow[0]) {
            slidingWindow.shift();
        }
    }
    return result;
};
