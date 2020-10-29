/**
 * @param nums: a rotated sorted array
 * @return: the minimum number in the array
 */
const findMin = function (nums) {
    // 和159不同的是，可能出现重复元素
    let index1 = 0;
    let index2 = nums.length - 1;
    let index = index1;
    // 有重复元素 所以是>=而不是>
    while (nums[index1] >= nums[index2]) {
        if (index2 === index1 + 1) {
            index = index2;
            break;
        }
        const mid = (index1 + index2) >> 1;
        // 两端元素和中间元素相等，此时不知道中间元素是左侧序列还是右侧序列 只能遍历
        if (nums[index1] === nums[index2] && nums[index1] === nums[mid]) {
            let minVal = nums[index1];
            let minIndex = index1;
            for (let i = index1 + 1; i < index2 + 1; i++) {
                if (nums[i] < minVal) {
                    minVal = nums[i];
                    minIndex = i;
                }
            }
            index = minIndex;
            break;
        }

        if (nums[mid] >= nums[index1]) {
            index1 = mid;
        } else {
            index2 = mid;
        }
    }

    return nums[index];
};
