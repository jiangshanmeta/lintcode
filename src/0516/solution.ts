export class Solution {
    /**
     * @param costs: n x k cost matrix
     * @return: an integer, the minimum cost to paint all houses
     */
    minCostII (costs: number[][]): number {
        if (costs.length === 0) {
            return 0;
        }
        let results = [...costs[0], ];
        const k = costs[0].length;
        for (let i = 1; i < costs.length; i++) {
            const minvals = new Array<number>(k).fill(Infinity);
            let prev = results[0];
            for (let j = 1; j < minvals.length; j++) {
                minvals[j] = prev;
                prev = Math.min(prev, results[j]);
            }
            let after = results[results.length - 1];
            for (let j = minvals.length - 2; j > -1; j--) {
                minvals[j] = Math.min(minvals[j], after);
                after = Math.min(after, results[j]);
            }
            const nr = new Array<number>(k);
            for (let j = 0; j < k; j++) {
                nr[j] = minvals[j] + costs[i][j];
            }
            results = nr;
        }
        return Math.min(...results);
    }
}
