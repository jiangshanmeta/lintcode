/**
 * @param amount: a total amount of money amount
 * @param coins: the denomination of each coin
 * @return: the number of combinations that make up the amount
 */
const change = function (amount, coins) {
    const dp = new Array(amount+1).fill(0);
    dp[0] = 1;
    for(let i=0;i<coins.length;i++){
        for(let j=coins[i];j<dp.length;j++){
            dp[j] += dp[j-coins[i]];
        }
    }
    return dp[amount];
}

