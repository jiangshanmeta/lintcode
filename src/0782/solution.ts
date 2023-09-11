export class Solution {
    /**
     * @param n:
     * @param nums:
     * @return: return the sum of maximum OR sum, minimum OR sum, maximum AND sum, minimum AND sum.
     */
    getSum (n: number, nums: number[]): number {
        let min = nums[0];
        let max = nums[0];
        let or = 0;
        let and = nums[0];
        for (const num of nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
            or |= num;
            and &= num;
        }

        return min + max + or + and;
    }
}
