export class Solution {
    /**
     * @param nums1: An integer array
     * @param nums2: An integer array
     * @return: Widest index pair width
     */
    pairOfIndices (nums1: number[], nums2: number[]): number {
        const map = new Map<number, number>();
        map.set(0, -1);
        let sum = 0;
        let result = 0;
        for (let i = 0; i < nums1.length; i++) {
            sum += nums1[i] - nums2[i];
            if (map.has(sum)) {
                result = Math.max(result, i - map.get(sum)!);
            } else {
                map.set(sum, i);
            }
        }
        return result;
    }
}
