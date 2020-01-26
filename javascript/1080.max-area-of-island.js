/**
 * @param grid: a 2D array
 * @return: the maximum area of an island in the given 2D array
 */
const maxAreaOfIsland = function (grid) {
    let result = 0;
    const deltaxs = [1,-1,0,0];
    const deltays = [0,0,1,-1];
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j] === 0){
                continue;
            }
            grid[i][j] = 0;
            let count = 1;
            const xStack = [i];
            const yStack = [j];
            while(xStack.length){
                const x = xStack.pop();
                const y = yStack.pop();
                for(let k=0;k<4;k++){
                    const nextX = x+deltaxs[k];
                    const nextY = y+deltays[k];
                    if(nextX>-1 && nextX<grid.length && nextY>-1 && nextY<grid[0].length && grid[nextX][nextY] === 1){
                        count++;
                        xStack.push(nextX);
                        yStack.push(nextY);
                        grid[nextX][nextY] = 0;
                    }
                }
            }
            result = Math.max(result,count);
        }
    }
    return result;
}

