/**
 * @param matrix: A lsit of lists of integers
 * @return: 
 */
const setZeroes = function (matrix) {
    if(!matrix.length){
        return;
    }
    const vertical = new Array(matrix.length).fill(false);
    const horizontal = new Array(matrix[0].length).fill(false);
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0){
                vertical[i] = true;
                horizontal[j] = true
            }
        }
    }
    for(let i=0;i<vertical.length;i++){
        if(vertical[i]){
            for(let j=0;j<matrix[0].length;j++){
                matrix[i][j] = 0;
            }
        }
    }
    for(let j=0;j<horizontal.length;j++){
        if(horizontal[j]){
            for(let i=0;i<matrix.length;i++){
                matrix[i][j] = 0;
            }
        }
    }

}
