export class Solution {
    /**
     * @param a: the array A
     * @param b: the array B
     * @return: returns an alternate array of arrays A and B.
     */
    interleavedArray (a: number[], b: number[]): number[] {
        const result:number[] = [];
        for (let i = 0; i < a.length; i++) {
            result.push(a[i], b[i]);
        }
        return result;
    }
}
