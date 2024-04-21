export class Solution {
    /**
     * @param nums1: An integer array.
     * @param nums2: An integer array.
     * @param diff: Difference in value condition.
     * @return: The number of pairs of numbers that satisfy the condition.
     */
    countValidPairs (nums1: number[], nums2: number[], diff: number): number {
        const nums3 = nums1.map((item, index) => item - nums2[index]);
        let res = 0;
        for (let j = 1; j < nums3.length; j++) {
            let i = j - 1;
            while (i > -1 && nums3[i - 1] > nums3[i]) {
                const tmp = nums3[i - 1];
                nums3[i - 1] = nums3[i];
                nums3[i] = tmp;
                i--;
            }
            let low = 0;
            let high = j - 1;
            let index = -1;
            while (low <= high) {
                const mid = (low + high) >> 1;
                if (nums3[mid] > nums3[j] + diff) {
                    high = mid - 1;
                } else {
                    index = Math.max(index, mid);
                    low = mid + 1;
                }
            }
            res += index + 1;
        }
        return res;
    }
}
