export class Solution {
    /**
     * @param matrix: the matrix
     * @return: the maximum score you can get
     */
    maximumScore (matrix: number[][]): number {
        let row = [...matrix[0], ];
        const M = matrix.length;
        const N = matrix[0].length;
        for (let i = 1; i < M; i++) {
            const nRow = new Array<number>(N);
            for (let j = 0; j < N; j++) {
                let res = matrix[i - 1][j];
                for (let k = 0; k < N; k++) {
                    res = Math.max(res, row[k] - Math.abs(j - k));
                }
                nRow[j] = res + matrix[i][j];
            }
            row = nRow;
        }
        return Math.max(...row);
    }
}
