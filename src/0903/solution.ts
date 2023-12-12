export class Solution {
    /**
     * @param length: the length of the array
     * @param updates: update operations
     * @return: the modified array after all k operations were executed
     */
    getModifiedArray (length: number, updates: number[][]): number[] {
        const result = new Array<number>(length + 1).fill(0);
        for (const [start, end, inc, ] of updates) {
            result[start] += inc;
            result[end + 1] -= inc;
        }
        result.pop();
        for (let i = 1; i < result.length; i++) {
            result[i] += result[i - 1];
        }

        return result;
    }
}
