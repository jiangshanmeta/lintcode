export class Solution {
    /**
     * @param grid: a matrix
     * @return: Find all points that are strictly larger than their neighbors
     */
    highpoints (grid: number[][]): number[][] {
        const M = grid.length;
        const N = grid[0].length;
        const result = new Array<number[]>(M);

        const isGreater = (x:number, y:number, v:number) => {
            if (x === -1 || y === -1 || x === M || y === N) {
                return true;
            }

            return v > grid[x][y];
        };

        for (let i = 0; i < M; i++) {
            const row = new Array<number>(N);
            for (let j = 0; j < N; j++) {
                let flag = true;
                for (let dx = -1; dx < 2; dx++) {
                    if (!flag) {
                        break;
                    }
                    for (let dy = -1; dy < 2; dy++) {
                        if (dx === 0 && dy === 0) {
                            continue;
                        }
                        flag = isGreater(i + dx, j + dy, grid[i][j]);
                        if (!flag) {
                            break;
                        }
                    }
                }
                row[j] = flag ? 1 : 0;
            }
            result[i] = row;
        }

        return result;
    }
}
