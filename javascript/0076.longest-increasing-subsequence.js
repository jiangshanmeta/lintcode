/**
 * @param nums: An integer array
 * @return: The length of LIS (longest increasing subsequence)
 */
const longestIncreasingSubsequence = function (nums) {
    if(nums.length === 0){
        return 0;
    }
    const dp = new Array(nums.length).fill(1);
    for(let i=1;i<dp.length;i++){
        for(let j=0;j<i;j++){
            if(nums[i]>nums[j]){
                dp[i] = Math.max(dp[i],1+dp[j]);
            }
        }
    }
    return Math.max(...dp);
}

