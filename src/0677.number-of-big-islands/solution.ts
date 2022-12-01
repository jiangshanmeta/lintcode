export class Solution {
    /**
     * @param grid: a 2d boolean array
     * @param k: an integer
     * @return: the number of Islands
     */
    numsofIsland (grid: boolean[][], k: number): number {
        let count = 0;
        let result = 0;
        const M = grid.length;
        const N = grid[0].length;

        const dfs = (x:number, y:number) => {
            if (x === -1 || y === -1 || x === M || y === N || !grid[x][y]) {
                return;
            }
            count++;
            grid[x][y] = false;
            dfs(x, y + 1);
            dfs(x, y - 1);
            dfs(x - 1, y);
            dfs(x + 1, y);
        };

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[i][j]) {
                    count = 0;
                    dfs(i, j);
                    if (count >= k) {
                        result++;
                    }
                }
            }
        }

        return result;
    }
}
