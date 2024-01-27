export class Solution {
    /**
     * @param nums: an array
     * @return: the minimum number of moves required to make all array elements equal
     */
    minMoves2 (nums: number[]): number {
        nums.sort((a, b) => a - b);
        const T = nums[nums.length >> 1];
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += Math.abs(nums[i] - T);
        }
        return sum;
    }
}
