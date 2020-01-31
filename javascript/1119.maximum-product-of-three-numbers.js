/**
 * @param nums: an integer array
 * @return: the maximum product
 */
const maximumProduct = function (nums) {
    nums.sort((a,b)=>b-a);
    return Math.max(nums[0]*nums[1]*nums[2],nums[0]*nums[nums.length-1]*nums[nums.length-2]);
}