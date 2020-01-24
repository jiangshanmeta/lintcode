/**
 * @param triangle: a list of lists of integers
 * @return: An integer, minimum path sum
 */
const minimumTotal = function (triangle) {
    // 空间压成了一维
    const dp = new Array(triangle.length).fill(Infinity);
    dp[0] = triangle[0][0];
    for(let i=1;i<triangle.length;i++){
        for(let j=i;j>-1;j--){
            dp[j] = Math.min(dp[j],j>0?dp[j-1]:Infinity)+triangle[i][j];
        }
    }
    
    return Math.min(...dp);
}
