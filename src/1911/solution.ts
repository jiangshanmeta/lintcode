export class Solution {
    /**
     * @param grid: An array.
     * @return: An integer.
     */
    maxDistance (grid: number[][]): number {
        const N = grid.length;
        let lands:number[][] = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[i][j] === 1) {
                    lands.push([i, j, ]);
                }
            }
        }
        if (lands.length === 0 || lands.length === N * N) {
            return -1;
        }
        let result = 0;
        const ds = [
            [-1, 0, ],
            [1, 0, ],
            [0, -1, ],
            [0, 1, ],
        ];
        let rest = N * N - lands.length;
        while (rest > 0) {
            result++;

            const nLands:number[][] = [];
            lands.forEach(([x, y, ]) => {
                ds.forEach(([dx, dy, ]) => {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx < 0 || ny < 0 || nx === N || ny === N || grid[nx][ny] === 1) {
                        return;
                    }
                    grid[nx][ny] = 1;
                    rest--;
                    nLands.push([nx, ny, ]);
                });
            });
            lands = nLands;
        }

        return result;
    }
}
