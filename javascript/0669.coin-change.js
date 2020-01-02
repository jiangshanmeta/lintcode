/**
 * @param coins: a list of integer
 * @param amount: a total amount of money amount
 * @return: the fewest number of coins that you need to make up
 */
const coinChange = function (coins, amount) {
    coins = coins.filter((coin)=>coin>0 && coin<=amount);
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for(let i=1;i<dp.length;i++){
        for(let j=0;j<coins.length;j++){
            if(i<coins[j]){
                continue;
            }
            dp[i] = Math.min(dp[i],1+dp[i-coins[j]]); 
        }
    }
    return dp[amount] === Infinity?-1:dp[amount];
}

