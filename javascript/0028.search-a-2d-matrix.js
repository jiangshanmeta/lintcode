/**
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */
const searchMatrix = function (matrix, target) {
    if(matrix.length === 0){
        return false;
    }
    const N = matrix.length;
    const M = matrix[0].length;
    let low = 0;
    let high = M*N-1;
    while(low<=high){
        const mid = (low+high)>>1;
        const y = mid%M;
        const x = (mid-y)/M;
        if(matrix[x][y]<target){
            low = mid+1;
        }else if(matrix[x][y]>target){
            high = mid-1;
        }else{
            return true;
        }
    }
    return false;
}

