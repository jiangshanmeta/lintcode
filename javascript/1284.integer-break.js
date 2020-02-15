/**
 * @param n: a positive integer n
 * @return: the maximum product you can get
 */
const integerBreak = function (n) {
    const dp = new Array(n+1);
    dp[1] = 1;
    for(let i=2;i<n+1;i++){
        dp[i] = i-1;
        for(let j=1;j<=i-j;j++){
            dp[i] = Math.max(
                dp[i],
                j*(i-j),
                j*dp[i-j],
                dp[j]*(i-j),
                dp[j]*dp[i-j]
            );
        }
    }
    
    return dp[n];
}
