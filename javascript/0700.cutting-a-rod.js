/**
 * @param prices: the prices
 * @param n: the length of rod
 * @return: the max value
 */
const cutting = function (prices, n) {
    const dp = new Array(n+1).fill(0);
    for(let i=1;i<dp.length;i++){
        for(let j=0;j<prices.length;j++){
            if(i<j+1){
                continue;
            }
            dp[i] = Math.max(dp[i],prices[j]+dp[i-(j+1)]);
        }
    }
    return dp[n];
}

