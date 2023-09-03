export class Solution {
    /**
     * @param matrix: a matrix
     * @return: return true if same.
     */
    judgeSame (matrix: number[][]): boolean {
        const n = matrix.length;
        for (let k = 0; k < n; k++) {
            const target = matrix[0][k];
            let i = 0;
            let j = k;
            while (i < n && j < n) {
                if (matrix[i][j] !== target) {
                    return false;
                }
                i++;
                j++;
            }
        }
        for (let k = 1; k < n; k++) {
            const target = matrix[k][0];
            let i = k;
            let j = 0;
            while (i < n && j < n) {
                if (matrix[i][j] !== target) {
                    return false;
                }
                i++;
                j++;
            }
        }
        return true;
    }
}
