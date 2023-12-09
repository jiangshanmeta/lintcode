export class Solution {
    /**
     * @param nums: an array of integers
     * @return: the maximun difference
     */
    maximumGap (nums: number[]): number {
        if (nums.length < 2) {
            return 0;
        }
        nums.sort((a, b) => a - b);
        let result = nums[1] - nums[0];
        for (let i = 1; i < nums.length - 1; i++) {
            result = Math.max(result, nums[i + 1] - nums[i]);
        }
        return result;
    }
}
