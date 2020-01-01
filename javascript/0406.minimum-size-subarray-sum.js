/**
 * @param nums: an array of integers
 * @param s: An integer
 * @return: an integer representing the minimum size of subarray
 */
const minimumSize = function (nums, s) {
    // 滑动窗口
    let result = nums.length+1;
    let left = 0;
    let right = -1;
    let sum = 0;
    while(right<nums.length){
        if(sum<s){
            right++;
            if(right<nums.length){
                sum += nums[right];
            }
        }else{
            result = Math.min(result,right-left+1);
            sum -= nums[left++];
        }
    }
    return result === nums.length +1?-1:result;
}

