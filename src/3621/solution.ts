export class Solution {
    /**
     * @param nums: An array
     * @return: The minimum fixed point
     */
    fixedPoint (nums: number[]): number {
        let index = 0;
        while (index < nums.length) {
            if (nums[index] === index) {
                return index;
            }
            if (nums[index] > index) {
                index = nums[index] + 1;
            } else {
                index++;
            }
        }
        return -1;
    }
}
