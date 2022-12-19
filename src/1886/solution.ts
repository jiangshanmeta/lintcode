export class Solution {
    /**
     * @param nums: a list of integer
     * @param target: an integer
     * @return: nothing
     */
    moveTarget (nums: number[], target: number) {
        let count = 0;
        for (let i = nums.length - 1; i > -1; i--) {
            if (nums[i] === target) {
                count++;
            } else {
                nums[i + count] = nums[i];
            }
        }
        for (let i = 0; i < count; i++) {
            nums[i] = target;
        }
    }
}
