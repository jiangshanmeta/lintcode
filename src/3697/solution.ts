export class Solution {
    /**
     * @param nums: An integer array
     * @return: The minimum subscript
     */
    findSubscript (nums: number[]): number {
        let l = 0;
        let h = nums.length - 1;
        let r = nums.length;
        while (l <= h) {
            const m = (l + h) >> 1;
            if (nums[m] > m) {
                h = m - 1;
            } else if (nums[m] < m) {
                l = m + 1;
            } else {
                r = Math.min(r, m);
                h = m - 1;
            }
        }
        return r === nums.length ? -1 : r;
    }
}
