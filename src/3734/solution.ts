export class Solution {
    /**
     * @param ribbons: An integer array
     * @param k: Number of ribbons of the same length
     * @return: Maximum length of ribbons
     */
    maxLength (ribbons: number[], k: number): number {
        const max = ribbons.reduce((sum, item) => sum + item, 0);
        if (max < k) {
            return 0;
        }
        let l = 1;
        let r = max;
        let res = 0;
        while (l <= r) {
            const mid = (l + r) >> 1;
            const sum = ribbons.reduce((sum, item) => sum + Math.floor(item / mid), 0);
            if (sum < k) {
                r = mid - 1;
            } else {
                res = Math.max(res, mid);
                l = mid + 1;
            }
        }
        return res;
    }
}
