/**
 * @param nums: an array
 * @param k: an integer
 * @return: rotate the array to the right by k steps
 */
const rotate = function (nums, k) {
    if(nums.length === 0){
        return nums;
    }
    k %= nums.length;
    const tmp = nums.slice(-k);
    for(let i=nums.length-k-1;i>-1;i--){
        nums[i+k] = nums[i];
    }
    for(let i=0;i<tmp.length;i++){
        nums[i] = tmp[i];
    }
    return nums;
}