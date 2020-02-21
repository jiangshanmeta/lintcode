/**
 * @param rowIndex: a non-negative index
 * @return: the kth index row of the Pascal's triangle
 */
const getRow = function (rowIndex) {
    const dp = new Array(rowIndex+1).fill(1);
    for(let i=2;i<rowIndex+1;i++){
        for(let j=i-1;j>0;j--){
            dp[j] += dp[j-1];
        }
    }
    return dp;
}