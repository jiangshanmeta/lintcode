export class Solution {
    /**
     * @param grids: a matrix of integer
     * @return: return a boarder sort matrix
     */
    boarderSort (grids: number[][]): number[][] {
        const N = grids.length;
        let offset = 0;
        while (offset < N / 2) {
            const seq:number[] = [];
            for (let j = offset; j < N - offset; j++) {
                seq.push(grids[offset][j]);
                seq.push(grids[N - offset - 1][j]);
            }
            for (let i = offset + 1; i < N - offset - 1; i++) {
                seq.push(grids[i][offset]);
                seq.push(grids[i][N - offset - 1]);
            }
            seq.sort((a, b) => a - b);
            let index = 0;
            for (let j = offset; j < N - offset; j++) {
                grids[offset][j] = seq[index++];
            }
            for (let i = offset + 1; i < N - offset - 1; i++) {
                grids[i][N - offset - 1] = seq[index++];
            }
            for (let j = N - offset - 1; j >= offset; j--) {
                grids[N - offset - 1][j] = seq[index++];
            }
            for (let i = N - offset - 2; i > offset; i--) {
                grids[i][offset] = seq[index++];
            }
            offset++;
        }

        return grids;
    }
}
