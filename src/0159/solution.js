/**
 * @param nums: a rotated sorted array
 * @return: the minimum number in the array
 */
const findMin = function (nums) {
    // 翻转相当于分成了左右两个递增序列
    // index1 左侧递增序列的最大索引
    // index2 右侧递增序列的最大索引
    let index1 = 0;
    let index2 = nums.length - 1;
    // 一个特殊情况是不翻转，即完全递增，此时第0个元素就是最小元素
    // while循环的判别条件也是因为这个
    let index = index1;
    while (nums[index1] > nums[index2]) {
        // 当两个索引相邻时，意味着 index2指向了右侧递增序列的最小值 index1指向了左侧递增序列的最大值
        if (index2 === index1 + 1) {
            index = index2;
            break;
        }
        const mid = (index1 + index2) >> 1;
        // 如果中间的大于左边的 更新左侧索引
        if (nums[mid] > nums[index1]) {
            index1 = mid;
        } else {
            // 此时mid在右侧序列中
            index2 = mid;
        }
    }
    return nums[index];
};
