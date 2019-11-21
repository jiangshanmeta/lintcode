/**
 * @param matrix: A list of lists of integers
 * @param target: An integer you want to search in matrix
 * @return: An integer indicate the total occurrence of target in the given matrix
 */
const searchMatrix = function (matrix, target) {
    if(matrix.length === 0){
        return 0;
    }
    let result = 0;
    let row = 0;
    let column = matrix[0].length-1;
    
    while(row<matrix.length && column>-1){
        const node = matrix[row][column];
        if(node>target){
            column--;
        }else if(node<target){
            row++;
        }else{
            result++;
            let i = row+1;
            while(i<matrix.length && matrix[i][column] === node){
                result++;
                i++;
            }
            let j=column-1;
            while(j>0 && matrix[row][j] === node){
                result++;
                j--;
            }
            row++;
            column--;
        }
        
    }
    return result;
}
