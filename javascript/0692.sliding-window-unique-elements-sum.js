/**
 * @param nums: the given array
 * @param k: the window size
 * @return: the sum of the count of unique elements in each window
 */
const slidingWindowUniqueElementsSum = function (nums, k) {
    k = Math.min(k, nums.length);
    const countMap = {};
    // 滑动窗口内unique的数量
    let unique = 0;
    // 第一个滑动窗口
    for (let i = 0; i < k; i++) {
        countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
        // 以前没有，现在有，unique
        if (countMap[nums[i]] === 1) {
            unique++;
        } else if (countMap[nums[i]] === 2) {
            // 以前是1 unique的，现在是2 不是unique 所以要减去
            unique--;
        }
    }
    let result = unique;
    for (let i = k; i < nums.length; i++) {
        // 滑动窗口移动，删掉最左侧元素
        const deleteNum = nums[i - k];
        countMap[deleteNum]--;
        // 原来非unique 现在unique
        if (countMap[deleteNum] === 1) {
            unique++;
        } else if (countMap[deleteNum] === 0) {
            // 原来1个 unique 现在0个 非unique
            unique--;
        }
        // 新纳入一个元素
        countMap[nums[i]] = (countMap[nums[i]] || 0) + 1;
        // 从无到有 unique++
        if (countMap[nums[i]] === 1) {
            unique++;
        } else if (countMap[nums[i]] === 2) {
            // 以前1个，现在2个 从unique变为非unique
            unique--;
        }
        result += unique;
    }

    return result;
};
