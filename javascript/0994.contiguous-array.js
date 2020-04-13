/**
 * @param nums: a binary array
 * @return: the maximum length of a contiguous subarray
 */
const findMaxLength = function (nums) {
    const map = {0:-1};
    let diff = 0;
    let result = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            diff++;
        }else{
            diff--;
        }
        if(map[diff] === undefined){
            map[diff] = i;
        }else{
            result = Math.max(result,i-map[diff]);
        }
    }
    return result;
}

