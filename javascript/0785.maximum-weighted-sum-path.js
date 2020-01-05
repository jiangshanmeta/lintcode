/**
 * @param nums: 
 * @return: 
 */
const maxWeight = function (nums) {
    const M = nums.length;
    const N = nums[0].length;
    
    const dp = new Array(N);
    dp[N-1] = nums[0][N-1];
    for(let j=N-2;j>-1;j--){
        dp[j] = dp[j+1]+nums[0][j];
    }
    for(let i=1;i<M;i++){
        dp[N-1] += nums[i][N-1];
        for(let j=N-2;j>-1;j--){
            dp[j] = Math.max(dp[j],dp[j+1])+nums[i][j];
        }
        
    }
    
    return dp[0];
}

