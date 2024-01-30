export class Solution {
    /**
     * @param s: the given string
     * @param numRows: the number of rows
     * @return: the string read line by line
     */
    convert (s: string, numRows: number): string {
        if (numRows === 1) {
            return s;
        }
        const K = 2 * numRows - 2;
        const results = new Array<string>(numRows).fill('');
        for (let i = 0; i < s.length; i += K) {
            results[0] += s[i];
            for (let j = 1; j < numRows - 1; j++) {
                if (i + j < s.length) {
                    results[j] += s[i + j];
                }
                if (i + K - j < s.length) {
                    results[j] += s[i + K - j];
                }
            }
            if (i + numRows - 1 < s.length) {
                results[numRows - 1] += s[i + numRows - 1];
            }
        }

        return results.join('');
    }
}
