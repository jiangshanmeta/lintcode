export class Solution {
    /**
     * @param nums: A list of integers
     * @return: An integer denotes the middle number of the array
     */
    median (nums: number[]): number {
        nums.sort((a, b) => b - a);

        return nums[nums.length >> 1];
    }
}
