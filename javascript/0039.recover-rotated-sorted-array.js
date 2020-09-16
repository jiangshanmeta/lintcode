/**
 * @param nums: An integer array
 * @return:
 */
const recoverRotatedSortedArray = function (nums) {
    if (nums.length < 2) {
        return;
    }
    const peakIndex = findPeak(nums);
    // console.log(peakIndex)
    reverse(nums, 0, peakIndex);
    reverse(nums, peakIndex + 1, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
};

function findPeak (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (nums[left] >= nums[right]) {
        if (left + 1 === right) {
            return left;
        }
        const mid = (left + right) >> 1;
        // 中间和两边元素都相等 只能遍历了
        if (nums[left] === nums[right] && nums[left] === nums[mid]) {
            let maxVal = nums[left];
            let maxIndex = left;
            for (let i = left + 1; i < right + 1; i++) {
                if (nums[i] >= maxVal) {
                    maxVal = nums[i];
                    maxIndex = i;
                } else {
                    return i - 1;
                }
            }
            return maxIndex;
        }

        if (nums[mid] >= nums[left]) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return nums.length - 1;
}

function reverse (nums, left, right) {
    while (left < right) {
        const tmp = nums[right];
        nums[right] = nums[left];
        nums[left] = tmp;
        left++;
        right--;
    }
}
