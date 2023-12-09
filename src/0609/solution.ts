export class Solution {
    /**
     * @param nums: an array of integer
     * @param target: an integer
     * @return: an integer
     */
    twoSum5 (nums: number[], target: number): number {
        nums.sort((a, b) => a - b);
        let result = 0;
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            while (left < right && nums[left] + nums[right] > target) {
                right--;
            }
            if (left < right) {
                result += right - left;
            }
            left++;
        }
        return result;
    }
}
