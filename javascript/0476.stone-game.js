/**
 * @param A: An integer array
 * @return: An integer
 */
const stoneGame = function (A) {
    if(A.length<2){
        return 0
    }
    // intervalWeight[i][j] 这个区间内石头重量总和
    const intervalWeight = new Array(A.length);
    for(let i=0;i<A.length;i++){
        intervalWeight[i] = new Array(A.length);
        intervalWeight[i][i] = A[i];
        for(let j=i+1;j<A.length;j++){
            intervalWeight[i][j] = intervalWeight[i][j-1]+A[j];    
        }
    }
    // dp[i][j] [i,j]内费用最小值
    // dp[i][k] = min(  dp[i][k]+dp[k+1][j]+intervaWeight[i][j] )  i<=k<j
    const dp = new Array(A.length);
    for(let i=dp.length-1;i>-1;i--){
        dp[i] = new Array(A.length).fill(Infinity);
        dp[i][i] = 0;
        for(let j=i+1;j<A.length;j++){
            for(let k=i;k<j;k++){
                dp[i][j] = Math.min(dp[i][j],dp[i][k]+dp[k+1][j]+intervalWeight[i][j]);
            }
        }
        
    }

    return dp[0][A.length-1];
}
