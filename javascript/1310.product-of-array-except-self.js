/**
 * @param nums: an array of integers
 * @return: the product of all the elements of nums except nums[i].
 */
const productExceptSelf = function (nums) {
    const lefts = new Array(nums.length);
    const rights = new Array(nums.length);
    lefts[0] = 1;
    rights[rights.length-1] = 1;
    let left = nums[0];
    let right = nums[nums.length-1];
    for(let i=1;i<nums.length;i++){
        lefts[i] = left;
        left *= nums[i];
    }
    for (let i=nums.length-2;i>-1;i--){
        rights[i] = right;
        right *= nums[i];
    }
    const result = new Array(nums.length);
    for(let i=0;i<nums.length;i++){
        result[i] = lefts[i]*rights[i];
    }
    return result;
}

