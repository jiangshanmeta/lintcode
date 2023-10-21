export class Solution {
    /**
     * @param nums: An integer array.
     * @return: Whether the array is consecutive.
     */
    isConsecutive (nums: number[]): boolean {
        const set = new Set(nums);
        const min = Math.min(...nums);
        for (let i = 1; i < nums.length; i++) {
            if (!set.has(min + i)) {
                return false;
            }
        }
        return true;
    }
}
