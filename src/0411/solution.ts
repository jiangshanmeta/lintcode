export class Solution {
    /**
     * @param n: a number
     * @return: Gray code
     */
    grayCode (n: number): number[] {
        const result = new Array<number>(2 ** n);
        for (let i = 0; i < result.length; i++) {
            result[i] = (i >> 1) ^ i;
        }
        return result;
    }
}
