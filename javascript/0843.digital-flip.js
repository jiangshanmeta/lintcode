/**
 * @param nums: the array
 * @return: the minimum times to flip digit
 */
const flipDigit = function (nums) {
    if(nums.length === 0){
        return 0;
    }
    let zero = nums[0] === 0 ? 0 : 1;
    let one = nums[0] === 1 ? 0 : 1;

    for(let i=1;i<nums.length;i++){
        const newZero = Math.min(zero,one)+(nums[i] === 1?1:0);
        const newOne = one+(nums[i]===0?1:0);
        zero = newZero;
        one = newOne;
    }
    return Math.min(zero,one);
}
