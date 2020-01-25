/**
 * @param nums: an array
 * @return: the "pivot" index of this array
 */
const pivotIndex = function (nums) {
    const l2r = new Array(nums.length);
    const r2l = new Array(nums.length);
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        l2r[i] = sum;
        sum += nums[i];
    }
    sum = 0;
    for(let i=nums.length-1;i>-1;i--){
        r2l[i] = sum;
        sum += nums[i];
    }
    for(let i=0;i<nums.length;i++){
        if(r2l[i] === l2r[i]){
            return i
        }
    }
    return -1;
}

