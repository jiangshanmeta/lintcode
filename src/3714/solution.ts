export class Solution {
    /**
     * @param heights: An integer array
     * @return: Indexs of buildings with sea view
     */
    findBuildings (heights: number[]): number[] {
        if (heights.length === 0) {
            return [];
        }
        const results = [heights.length - 1, ];
        let max = heights[heights.length - 1];
        for (let i = heights.length - 1; i > -1; i--) {
            if (max < heights[i]) {
                results.push(i);
            }
            max = Math.max(max, heights[i]);
        }
        return results.reverse();
    }
}
