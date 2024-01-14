export class Solution {
    /**
     * @param nums: the given array
     * @return:  the number of triplets chosen from the array that can make triangles
     */
    triangleNumber (nums: number[]): number {
        nums.sort((a, b) => a - b);
        let result = 0;
        for (let i = nums.findIndex(item => item > 0); i < nums.length - 2; i++) {
            let j = i + 1;
            let k = j + 1;
            while (j < nums.length - 1) {
                while (k < nums.length && nums[i] + nums[j] > nums[k]) {
                    k++;
                }
                j++;
                result += k - j;
            }
        }
        return result;
    }
}
