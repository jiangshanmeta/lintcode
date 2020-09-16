/**
 * @param nums: A list of integers
 * @param k: An integer
 * @return: The majority number
 */
const majorityNumber = function (nums, k) {
    // 按照 Moore Voting 的思路实现 时间复杂度是O(Nk) N是nums的大小，空间复杂度是O(k)
    // 然而用hash的话 时间复杂度O(N) 空间复杂度O(N) 似乎还是直接用hash好了
    const candidates = new Array(k);
    const counts = new Array(k).fill(0);
    for (let i = 0; i < nums.length; i++) {
        const node = nums[i];
        let has = false;
        for (let j = 0; j < k; j++) {
            if (candidates[j] === node) {
                counts[j]++;
                has = true;
                break;
            }
        }
        if (has) {
            continue;
        }
        for (let j = 0; j < k; j++) {
            if (counts[j] === 0) {
                has = true;
                candidates[j] = node;
                counts[j] = 1;
                break;
            }
        }
        if (has) {
            continue;
        }
        for (let j = 0; j < k; j++) {
            counts[j]--;
        }
    }
    let candidate = null;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < k; j++) {
            if (candidates[j] === nums[i]) {
                counts[j]++;
                if (counts[j] > maxCount) {
                    maxCount = counts[j];
                    candidate = nums[i];
                }
                break;
            }
        }
    }
    return candidate;
};
