/**
 * @param n: Your money
 * @param prices: Cost of each university application
 * @param probability: Probability of getting the University's offer
 * @return: the  highest probability
 */
const backpackIX = function (n, prices, probability) {
    // 至少一份的概率=1-一个都没有的概率 
    // 求一个都没有的最低可能性
    // F(n,i) = min ( F(n,i-1), F(n-prices[i],i-1)*(1-p[i])    )
    const dp = new Array(n+1).fill(1);
    for(let i=0;i<prices.length;i++){
        for(let j=n;j>=prices[i];j--){
            dp[j] = Math.min(dp[j],dp[j-prices[i]]*(1-probability[i]))
        }
    }
    return 1-dp[n];
}

