export class Solution {
    /**
     * @param nums1: An integer array
     * @param nums2: An integer array
     * @return: Minimize product sum of two arrays
     */
    minProductSum (nums1: number[], nums2: number[]): number {
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => b - a);
        let result = 0;
        for (let i = 0; i < nums1.length; i++) {
            result += nums1[i] * nums2[i];
        }
        return result;
    }
}
