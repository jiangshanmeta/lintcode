/**
 * @param nums: an integer array and all positive numbers
 * @param target: An integer
 * @return: An integer
 */
const backPackV = function (nums, target) {
    const dp = new Array(target+1).fill(0);
    dp[0] = 1;
    for(let i=0;i<nums.length;i++){
        for(let j=target;j>=nums[i];j--){
            dp[j] += dp[j-nums[i]];
        }
    }
    
    return dp[target];
}

