export class Solution {
    /**
     * @param nums: The integer array you should partition
     * @param k: An integer
     * @return: The index after partition
     */
    partitionArray (nums: number[], k: number): number {
        let index1 = 0;
        while (index1 < nums.length && nums[index1] < k) {
            index1++;
        }
        let index2 = index1 + 1;
        while (index2 < nums.length) {
            if (nums[index2] < k) {
                const tmp = nums[index1];
                nums[index1++] = nums[index2];
                nums[index2] = tmp;
            }
            index2++;
        }
        return index1;
    }
}
