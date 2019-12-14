/**
 * @param matrix: an input matrix 
 * @return: nums[0]: the maximum,nums[1]: the minimum
 */
const maxAndMin = function (matrix) {
    if(matrix.length === 0 || matrix[0].length === 0){
        return [];
    }

    let max = matrix[0][0];
    let min = matrix[0][0];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            max = Math.max(max,matrix[i][j]);
            min = Math.min(min,matrix[i][j]);
        }
    }
    return [max,min];
}
