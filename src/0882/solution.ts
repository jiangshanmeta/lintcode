export class Solution {
    /**
     * @param picture: a 2D char array
     * @return: return a integer
     */
    findBlackPixel (picture: string[][]): number {
        const M = picture.length;
        const N = picture[0].length;
        const rows = new Array<number>(M).fill(0);
        const columns = new Array<number>(N).fill(0);
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (picture[i][j] === 'B') {
                    rows[i]++;
                    columns[j]++;
                }
            }
        }
        let result = 0;
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (picture[i][j] === 'B' && rows[i] === 1 && columns[j] === 1) {
                    result++;
                }
            }
        }

        return result;
    }
}
