/**
 * @param grid: a 2D array
 * @return: the maximum total sum that the height of the buildings can be increased
 */
const maxIncreaseKeepingSkyline = function (grid) {
    const N = grid.length;
    const horizontal = new Array(N).fill(0);
    const vertical = new Array(N).fill(0);
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            horizontal[j] = Math.max(horizontal[j],grid[i][j]);
            vertical[i] = Math.max(vertical[i],grid[i][j]);
        }
    }
    
    let result = 0;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            result += Math.min(vertical[i],horizontal[j])-grid[i][j];
        }
    }
    return result;
}