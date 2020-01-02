/**
 * @param nums: a non-empty array only positive integers
 * @return: true if can partition or false
 */
const canPartition = function (nums) {
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
    }
    if(sum & 1){
        return false;
    }
    const dp = new Array(sum/2+1).fill(false);
    dp[0] = true;
    for(let i=0;i<nums.length;i++){
        for(let j=dp.length-1;j>=nums[i];j--){
            dp[j] = dp[j] || dp[j-nums[i]];
        }
    }
    return dp[dp.length-1];
}
