export class Solution {
    /**
     * @param cost: the cost
     * @param val: the val
     * @return: the all cost
     */
    doingHomework (cost: number[], val: number[]): number {
        for (let i = 1; i < cost.length; i++) {
            cost[i] += cost[i - 1];
        }
        let result = 0;
        for (const v of val) {
            let low = 0;
            let high = cost.length - 1;
            let max = 0;
            while (low <= high) {
                const mid = (low + high) >> 1;
                if (cost[mid] > v) {
                    high = mid - 1;
                } else {
                    max = Math.max(max, cost[mid]);
                    low = mid + 1;
                }
            }
            result += max;
        }
        return result;
    }
}
