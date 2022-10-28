export class Solution {
    /**
     * @param grid: a 2D array
     * @return: the perimeter of the island
     */
    islandPerimeter (grid: number[][]): number {
        const M = grid.length;
        const N = grid[0].length;
        let result = 0;
        const isEdge = (x:number, y:number) => {
            if (x === -1 || y === -1 || x === M || y === N) {
                return true;
            }
            return grid[x][y] === 0;
        };
        const dxs = [0, 0, 1, -1, ];
        const dys = [1, -1, 0, 0, ];

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[i][j] === 0) {
                    continue;
                }
                for (let k = 0; k < 4; k++) {
                    result += isEdge(i + dxs[k], j + dys[k]) ? 1 : 0;
                }
            }
        }

        return result;
    }
}
