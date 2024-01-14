export class Solution {
    /**
     * @param matrix: a two-dimensional matrix.
     * @param pixelThreshold: the pixel threshold judging high click position.
     * @param areaThreshold: the pixed threshold judging high click area.
     * @return: return the number of high click areas.
     */
    highClickAreaCount (matrix: number[][], pixelThreshold: number, areaThreshold: number): number {
        let result = 0;
        const M = matrix.length;
        const N = matrix[0].length;

        const dfs = (x:number, y:number):number => {
            if (x < 0 || y < 0 || x === M || y === N || matrix[x][y] <= pixelThreshold) {
                return 0;
            }
            matrix[x][y] = 0;

            return 1 + dfs(x - 1, y) + dfs(x + 1, y) + dfs(x, y - 1) + dfs(x, y + 1);
        };

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (matrix[i][j] > pixelThreshold) {
                    const count = dfs(i, j);
                    if (count > areaThreshold) {
                        result++;
                    }
                }
            }
        }

        return result;
    }
}
