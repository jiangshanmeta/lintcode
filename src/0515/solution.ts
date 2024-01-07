export class Solution {
    /**
     * @param costs: n x 3 cost matrix
     * @return: An integer, the minimum cost to paint all houses
     */
    minCost (costs: number[][]): number {
        if (costs.length === 0) {
            return 0;
        }
        let results = [...costs[0], ];
        for (let i = 1; i < costs.length; i++) {
            const nr = new Array<number>(3).fill(Infinity);
            for (let j = 0; j < 3; j++) {
                for (let k = 0; k < 3; k++) {
                    if (j === k) {
                        continue;
                    }
                    nr[j] = Math.min(nr[j], results[k] + costs[i][j]);
                }
            }
            results = nr;
        }
        return Math.min(...results);
    }
}
