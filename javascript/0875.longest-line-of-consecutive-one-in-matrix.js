/**
 * @param matrix: the 01 matrix
 * @return: the longest line of consecutive one in the matrix
 */
const longestLine = function (matrix) {
    // 有点dp的味道
    const M = matrix.length;
    if(M === 0){
        return 0;
    }
    const N = matrix[0].length;
    // 空间压缩到了O(N)
    // 垂直方向
    const vertical = new Array(N).fill(0);
    // 从左上到右下
    const leftTop = new Array(N).fill(0);
    // 从右上到左下
    const rightTop = new Array(N).fill(0);
    let result = 0;
    for(let i=0;i<M;i++){
        let horizontal = 0;
        for(let j=0;j<N;j++){
            if(matrix[i][j] === 0){
                horizontal = 0;
                vertical[j] = 0;
                rightTop[j] = 0;
                continue;
            }
            horizontal++;
            vertical[j]++;
            rightTop[j] = j+1<N?rightTop[j+1]+1:1;
            result = Math.max(
                result,
                horizontal,
                vertical[j],
                (j>0?leftTop[j-1]:0)+1,
                rightTop[j]
            );
        }
        for(let j=N-1;j>-1;j--){
            if(matrix[i][j] === 0){
                leftTop[j] = 0;    
            }else{
                leftTop[j] = j>0?leftTop[j-1]+1:1;
            }
        }
    }
    return result;
}