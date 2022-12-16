export class Solution {
    /**
     * @param nums: A list of integers
     * @return: A integer indicate the sum of max subarray
     */
    maxSubArray (nums: number[]): number {
        let result = nums[0];
        let current = nums[0];
        for (let i = 1; i < nums.length; i++) {
            current = Math.max(current, 0) + nums[i];
            result = Math.max(result, current);
        }
        return result;
    }
}
