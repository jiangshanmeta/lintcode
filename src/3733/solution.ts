export class Solution {
    /**
     * @param nums1: An integer array
     * @param nums2: An integer array
     * @return: Total number of qualified index pairs
     */
    countPairs (nums1: number[], nums2: number[]): number {
        const nums3 = nums1.map((item, index) => item - nums2[index]).sort((a, b) => a - b);
        let result = 0;
        let index = nums3.length - 1;
        for (let i = 0; i < nums3.length; i++) {
            while (index > i && nums3[index] + nums3[i] > 0) {
                index--;
            }
            result += nums3.length - 1 - Math.max(i, index);
        }
        return result;
    }
}
