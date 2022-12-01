export class Solution {
    /**
     * @param a: an integer array
     * @return: return maxium contiguous non-negative subarray sum
     */
    maxNonNegativeSubArray (a: number[]): number {
        let result = -1;
        let sum = 0;
        for (const num of a) {
            if (num < 0) {
                sum = 0;
            } else {
                sum += num;
                result = Math.max(result, sum);
            }
        }
        return result;
    }
}
