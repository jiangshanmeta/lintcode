export class Solution {
    /**
     * @param nums: an array
     * @return: the shortest subarray's length
     */
    findUnsortedSubarray (nums: number[]): number {
        const sorted = [...nums, ].sort((a, b) => a - b);
        let start = -1;
        let end = -2;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === sorted[i]) {
                continue;
            }
            if (start === -1) {
                start = i;
            } else {
                end = i;
            }
        }

        return end - start + 1;
    }
}
