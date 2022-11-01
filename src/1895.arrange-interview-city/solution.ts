export class Solution {
    /**
     * @param cost: The cost of each interviewer
     * @return: The total cost of all the interviewers.
     */
    totalCost (cost: number[][]): number {
        const compare = cost.map(([a, b, ], index) => [b - a, index, ]).sort((a, b) => a[0] - b[0]);
        const half = cost.length >>> 1;
        let result = 0;
        for (let i = 0; i < half; i++) {
            result += cost[compare[i][1]][1];
        }
        for (let i = half; i < compare.length; i++) {
            result += cost[compare[i][1]][0];
        }
        return result;
    }
}
