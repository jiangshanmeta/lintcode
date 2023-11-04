export class Solution {
    /**
     * @param encoded1: A run-length encoding array
     * @param encoded2: A run-length encoding array
     * @return: Product of two run-length encoded arrays
     */
    findRunLengthArray (encoded1: number[][], encoded2: number[][]): number[][] {
        if (encoded1.length === 0) {
            return [];
        }
        const encoded3:number[][] = [];
        let index1 = 0;
        let index2 = 0;
        while (index1 < encoded1.length) {
            const [val1, freq1, ] = encoded1[index1];
            const [val2, freq2, ] = encoded2[index2];
            const val3 = val1 * val2;
            const freq3 = Math.min(freq1, freq2);
            if (encoded3.length > 0 && encoded3[encoded3.length - 1][0] === val3) {
                encoded3[encoded3.length - 1][1] += freq3;
            } else {
                encoded3.push([val3, freq3, ]);
            }

            if (freq1 === freq2) {
                index1++;
                index2++;
            } else if (freq1 < freq2) {
                index1++;
                encoded2[index2][1] -= freq3;
            } else {
                index2++;
                encoded1[index1][1] -= freq3;
            }
        }

        return encoded3;
    }
}
