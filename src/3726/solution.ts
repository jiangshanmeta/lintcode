export class Solution {
    /**
     * @param grid: A matrix
     * @return: The time it takes for all the oranges to rot
     */
    rottingOranges (grid: number[][]): number {
        const M = grid.length;
        const N = grid[0].length;
        let rusted:number[][] = [];
        let fresh = 0;
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[i][j] === 2) {
                    rusted.push([i, j, ]);
                } else if (grid[i][j] === 1) {
                    fresh++;
                }
            }
        }
        if (fresh === 0) {
            return 0;
        }
        if (rusted.length === 0) {
            return -1;
        }

        let round = 0;
        const deltas = [
            [-1, 0, ],
            [1, 0, ],
            [0, -1, ],
            [0, 1, ],
        ];
        while (rusted.length && fresh > 0) {
            round++;
            const newRusted:number[][] = [];
            rusted.forEach(([x, y, ]) => {
                for (const [dx, dy, ] of deltas) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx < 0 || nx === M || ny < 0 || ny === N || grid[nx][ny] !== 1) {
                        continue;
                    }

                    fresh--;
                    grid[nx][ny] = 2;
                    newRusted.push([nx, ny, ]);
                }
            });
            rusted = newRusted;
        }
        return fresh === 0 ? round : -1;
    }
}
