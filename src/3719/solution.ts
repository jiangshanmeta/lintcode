export class Solution {
    /**
     * @param grid: A m×n character matrix.
     * @return: The length of the shortest path to obtain any cup of bubble tea.
     */
    getBubbleTea (grid: string[][]): number {
        const M = grid.length;
        const N = grid[0].length;

        let startX = -1;
        let startY = -1;
        for (let i = 0; i < M; i++) {
            if (startX !== -1) {
                break;
            }
            for (let j = 0; j < N; j++) {
                if (grid[i][j] === '*') {
                    startX = i;
                    startY = j;
                    break;
                }
            }
        }
        const visited = new Set([startX * N + startY, ]);

        let step = 0;

        const deltas = [
            [-1, 0, ],
            [1, 0, ],
            [0, -1, ],
            [0, 1, ],
        ];

        let points = [[startX, startY, ], ];
        while (points.length) {
            step++;
            const nq:number[][] = [];
            for (const [x, y, ] of points) {
                for (const [dx, dy, ] of deltas) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx === -1 || ny === -1 || nx === M || ny === N || grid[nx][ny] === 'X' || visited.has(nx * N + ny)) {
                        continue;
                    }
                    if (grid[nx][ny] === '#') {
                        return step;
                    }
                    visited.add(nx * N + ny);
                    nq.push([nx, ny, ]);
                }
            }
            points = nq;
        }

        return -1;
    }
}
