export class Solution {
    /**
     * @param offset: the number of items that the customer has viewed
     * @param n: the number of items that can be displayed on a page
     * @param len1: the length of L1
     * @param len2: the length of L2
     * @return: returns the intervals of goods displayed in L1 and L2
     */
    productList (offset: number, n: number, len1: number, len2: number): number[] {
        const start = offset;
        const end = offset + n;
        if (end <= len1) {
            return [start, end, 0, 0, ];
        }
        if (start >= len1) {
            return [len1, len1, start - len1, Math.min(len2, end - len1), ];
        }

        return [start, len1, 0, Math.min(len2, end - len1), ];
    }
}
