/**
 * @param nums: a integer array
 * @return: the index of the largest element
 */
const dominantIndex = function (nums) {
    let first = nums[0];
    let second = -1;
    let firstIndex = 0;
    let unique = true;
    for(let i=1;i<nums.length;i++){
        if(nums[i]>first){
            second = first;
            first = nums[i];
            unique = true;
            firstIndex = i;
        }else if(nums[i] === first){
            unique = false;
        }else {
            second = Math.max(second,nums[i]);
        }
    }
    if(unique && first>=second*2){
        return firstIndex;
    }
    return -1;
}

