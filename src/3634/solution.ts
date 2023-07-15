export class Solution {
    /**
     * @param nums: An integer array
     * @return: The largest and only once occurring integer in the array
     */
    largestUniqueNumber (nums: number[]): number {
        nums.sort((a, b) => a - b);
        let index = nums.length - 1;
        while (index > -1) {
            const num = nums[index];
            if (index === 0 || nums[index - 1] !== num) {
                return num;
            }
            while (index > -1 && nums[index] === num) {
                index--;
            }
        }
        return -1;
    }
}
