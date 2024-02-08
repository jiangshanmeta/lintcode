export class Solution {
    /**
     * @param a: an array of integers
     * @param b: an array of integers
     * @return: return a integer indicating the number of fair indexes.
     */
    countIndexes (a: number[], b: number[]): number {
        const sumA = a.reduce((s, i) => s + i, 0);
        const sumB = b.reduce((s, i) => s + i, 0);
        let r = 0;
        let ca = a[0];
        let cb = b[0];
        for (let i = 1; i < a.length; i++) {
            if (ca === sumA - ca && cb === sumB - cb && ca === cb) {
                r++;
            }
            ca += a[i];
            cb += b[i];
        }

        return r;
    }
}
