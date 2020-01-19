/**
 * @param A: an array
 * @param K: an integer
 * @return: the largest score
 */
const largestSumOfAverages = function (A, K) {
    const intervalAvg = new Array(A.length);
    for(let i=0;i<intervalAvg.length;i++){
        intervalAvg[i] = new Array(A.length);
        intervalAvg[i][i] = A[i];
        let sum = A[i];
        for(let j=i+1;j<A.length;j++){
            sum += A[j];
            intervalAvg[i][j] = sum/(j-i+1);
        }
    }
    const dp = intervalAvg[0].slice(0);
    for(let i=2;i<=K;i++){
        for(let j=A.length-1;j>=i-1;j--){
            dp[j] = -Infinity;
            for(let m=i-2;m<j;m++){
                dp[j] = Math.max(dp[j],dp[m]+intervalAvg[m+1][j]);
            }
        }
    }

    return dp[A.length-1];
}
