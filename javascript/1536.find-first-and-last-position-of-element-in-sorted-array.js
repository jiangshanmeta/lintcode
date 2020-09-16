/**
 * @param nums: the array of integers
 * @param target:
 * @return: the starting and ending position
 */
const searchRange = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (nums[mid] > target) {
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            let start = mid;
            let end = mid;
            let low1 = low;
            let high1 = mid - 1;
            let low2 = mid + 1;
            let high2 = high;

            while (low1 <= high1) {
                const mid1 = (low1 + high1) >> 1;
                if (nums[mid1] < target) {
                    low1 = mid1 + 1;
                } else {
                    start = Math.min(start, mid1);
                    high1 = mid1 - 1;
                }
            }

            while (low2 <= high2) {
                const mid2 = (low2 + high2) >> 1;
                if (nums[mid2] > target) {
                    high2 = mid2 - 1;
                } else {
                    end = Math.max(end, mid2);
                    low2 = mid2 + 1;
                }
            }

            return [start, end, ];
        }
    }
    return [-1, -1, ];
};
