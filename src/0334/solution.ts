export class Solution {
    /**
     * @param heights: Students height
     * @return: How many people are not where they should be
     */
    orderCheck (heights: number[]): number {
        const sorted = [...heights, ].sort((a, b) => a - b);
        let result = 0;
        for (let i = 0; i < heights.length; i++) {
            if (sorted[i] !== heights[i]) {
                result++;
            }
        }
        return result;
    }
}
