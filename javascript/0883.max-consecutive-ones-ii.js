/**
 * @param nums: a list of integer
 * @return: return a integer, denote  the maximum number of consecutive 1s
 */
const findMaxConsecutiveOnes = function (nums) {
    let result = 0;
    let leftOnes = 0;
    let index = 0;
    let rightOnes = 0;
    while(index<nums.length && nums[index] === 1){
        index++;
        leftOnes++;
    }
    while(index<nums.length){
        let zeroCount = 1;
        index++;
        while(index<nums.length && nums[index] === 0){
            zeroCount++;
            index++;
        }
        while(index<nums.length && nums[index] === 1){
            rightOnes++;
            index++;
        }
        if(zeroCount === 1){
            result = Math.max(result,leftOnes+rightOnes+1);
        }else{
            result = Math.max(result,leftOnes+1,rightOnes+1);
        }
        leftOnes = rightOnes;
        rightOnes = 0;
    }
    
    
    return result;
}
