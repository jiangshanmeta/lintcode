/**
 * @param nums: the given array
 * @param s: the given target
 * @return: the number of ways to assign symbols to make sum of integers equal to target S
 */
const findTargetSumWays = function (nums, s) {
    if(nums.length === 0){
        return 0;
    }
    
    const sum = nums.reduce((sum,item)=>{
        return sum+item;
    },0);
    if(s>sum || s<-sum){
        return 0;
    }
    // 因为有正有负 所有统一都处理成非负 用数组下标表示和
    let dp = new Array(2*sum+1).fill(0);
    dp[sum-nums[0]]++;
    dp[sum+nums[0]]++;
    for(let i=1;i<nums.length;i++){
        const nextDp = new Array(2*sum+1).fill(0);
        for(let j=0;j<dp.length;j++){
            if(j-nums[i]>-1){
                nextDp[j-nums[i]] += dp[j];
            }
            if(j+nums[i]<dp.length){
                nextDp[j+nums[i]] += dp[j];
            }
        }
        dp = nextDp;
    }
    return dp[sum+s];
}