/**
 * @param matrix: a 0-1 matrix
 * @return: return a matrix
 */
const updateMatrix = function (matrix) {
    const result = [];
    let level = [];
    for(let i=0;i<matrix.length;i++){
        const row = new Array(matrix[0].length);
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j] === 0){
                row[j] = 0;
                level.push([i,j]);
            }else{
                row[j] = Infinity;
            }
        }
        result.push(row);
    }
    let count = 1;
    while(level.length){
        const nextLevel = [];
        for(let i=0;i<level.length;i++){
            const [x,y] = level[i];
            if(x>0 && result[x-1][y] > count){
                result[x-1][y] = count;
                nextLevel.push([x-1,y]);
            }
            if(y>0 && result[x][y-1]>count){
                result[x][y-1] = count;
                nextLevel.push([x,y-1]);
            }
            if(x<matrix.length-1 && result[x+1][y]>count){
                result[x+1][y] = count;
                nextLevel.push([x+1,y]);
            }
            if(y<matrix[0].length-1 && result[x][y+1]>count){
                result[x][y+1] = count;
                nextLevel.push([x,y+1]);
            }
        }
        count++;
        level = nextLevel;
    }
    return result;
}

