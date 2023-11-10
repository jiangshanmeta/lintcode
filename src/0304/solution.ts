export class Solution {
    /**
     * @param nums: Unordered array
     * @return: return the largest product
     */
    maximumProduct (nums: number[]): number {
        nums.sort((a, b) => a - b);
        return Math.max(
            nums[0] * nums[1] * nums[2],
            nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
            nums[0] * nums[1] * nums[nums.length - 1],
            nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
        );
    }
}
