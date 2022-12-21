export class Solution {
    /**
     * @param m: a 2D integer matrix
     * @return: a 2D integer matrix
     */
    imageSmoother (m: number[][]): number[][] {
        const M = m.length;
        const N = m[0].length;
        const result = new Array<number[]>(M);
        for (let i = 0; i < M; i++) {
            result[i] = [];
            for (let j = 0; j < N; j++) {
                let sum = 0;
                let count = 0;
                for (let x = Math.max(0, i - 1); x < Math.min(i + 2, M); x++) {
                    for (let y = Math.max(0, j - 1); y < Math.min(N, j + 2); y++) {
                        sum += m[x][y];
                        count++;
                    }
                }

                result[i][j] = Math.floor(sum / count);
            }
        }
        return result;
    }
}
