/**
 * @param nums: a list of integers
 * @return: return a boolean
 */
const increasingTriplet = function (nums) {
    let a = Infinity;
    let b = Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>b){
            return true;
        }else if(nums[i]>a && nums[i]<b){
            b = nums[i];
        }else if(nums[i]<a){
            a = nums[i];
        }
    }
    return false;
}

