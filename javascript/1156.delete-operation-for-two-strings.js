/**
 * @param word1: a string
 * @param word2: a string
 * @return: return a integer
 */
const minDistance = function (word1, word2) {
    const dp = [];
    dp[0] = [];
    for(let i=0;i<=word2.length;i++){
        dp[0][i] = i;
    }
    for(let i=1;i<=word1.length;i++){
        dp[i] = [i];
        for(let j=1;j<=word2.length;j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = Math.min(
                    dp[i-1][j],
                    dp[i][j-1]
                )+1;
            }
        }
    }

    return dp[word1.length][word2.length];
}
