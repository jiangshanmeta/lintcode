/**
 * @param A: the given array
 * @return: the minimum sum of a falling path
 */
const minFallingPathSum = function (A) {
    const M = A.length;
    let dp = A[0].slice(0);
    for(let i=1;i<M;i++){
        const nextDp = new Array(M);
        for(let j=0;j<M;j++){
            nextDp[j] = Math.min(
                dp[j],
                j>0?dp[j-1]:Infinity,
                j+1<M?dp[j+1]:Infinity
            )+A[i][j];
        }
        dp = nextDp;
    }
    return Math.min(...dp);
}