export class Solution {
    /**
     * @param nums: an array of integers
     * @param threshold: an integer
     * @return: return the smallest divisor
     */
    smallestDivisor (nums: number[], threshold: number): number {
        let low = 1;
        let high = Math.max(...nums);
        let res = high;
        while (low <= high) {
            const mid = (low + high) >> 1;
            let sum = 0;
            for (let i = 0; i < nums.length; i++) {
                sum += Math.ceil(nums[i] / mid);
            }
            if (sum > threshold) {
                low = mid + 1;
            } else {
                res = Math.min(res, mid);
                high = mid - 1;
            }
        }
        return res;
    }
}
