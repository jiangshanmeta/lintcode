export class Solution {
    /**
     * @param nums:
     * @return: return the nearest higher score
     */
    getProgress (nums: number[]): number[] {
        const result:number[] = [];
        const stack:number[] = [];
        for (let i = 0; i < nums.length; i++) {
            while (stack.length && nums[stack[stack.length - 1]] < nums[i]) {
                result[stack.pop()!] = nums[i];
            }
            result.push(nums[i]);
            stack.push(i);
        }
        return result;
    }
}
