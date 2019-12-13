/**
 * @param n: a Integer
 * @return: a spiral array
 */
const spiralArray = function (n) {
    const result = new Array(n);
    for(let i=0;i<n;i++){
        result[i] = new Array(n);
    }
    let i=0;
    let j=0;
    let m = 1;
    // 一次处理一层
    while(i<n-i && j<n-j){
        // 上边
        for(let k=j;k<n-j;k++){
            result[i][k] = m++;
        }
        // 右边
        for(let k=i+1;k<n-i;k++){
            result[k][n-j-1] = m++;
        }
        // 判断只有一行的情况
        if(i !== n-i-1){
            // 下边
            for(let k=n-j-2;k>=j;k--){
                result[n-i-1][k] = m++;
            }
        }
        // 判断只有一列的情况
        if(j !== n-j-1){
            // 左边
            for(let k=n-i-2;k>i;k--){
                result[k][j] = m++;
            }
        }
        
        
        i++;
        j++;
    }
    
    
    return result;
}