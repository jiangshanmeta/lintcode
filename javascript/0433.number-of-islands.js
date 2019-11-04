/**
 * @param grid: a boolean 2D matrix
 * @return: an integer
 */
const numIslands = function (grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]){
                count++;
                dfs(grid,i,j);
            }
        }
    }
    return count;
}

function dfs(grid,x,y){
    grid[x][y] = false;
    x>0 && grid[x-1][y] && dfs(grid,x-1,y);
    y>0 && grid[x][y-1] && dfs(grid,x,y-1);
    x<grid.length-1 && grid[x+1][y] && dfs(grid,x+1,y);
    y<grid[0].length-1 && grid[x][y+1] && dfs(grid,x,y+1);
}