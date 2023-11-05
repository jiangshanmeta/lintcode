export class Solution {
    /**
     * @param nums: An array of integer
     * @param target: An integer
     * @return: The sum of two numbers smaller than target
     */
    twoSumLessThanTarget (nums: number[], target: number): number {
        nums.sort((a, b) => a - b);
        let j = nums.length - 1;
        let i = 0;
        let result = -Infinity;
        while (i < j) {
            while (i < j && nums[i] + nums[j] >= target) {
                j--;
            }
            if (i < j) {
                result = Math.max(result, nums[i] + nums[j]);
            }
            i++;
        }
        return result === -Infinity ? -1 : result;
    }
}
