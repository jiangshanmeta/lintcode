/**
 * @param nums: an array
 * @return: the sum of min(ai, bi) for all i from 1 to n
 */
const arrayPairSum = function (nums) {
    nums.sort((a,b)=>a-b);
    let sum = 0;
    for(let i=0;i<nums.length;i+=2){
        sum += nums[i];
    }
    return sum;
}

