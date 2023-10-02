export class Solution {
    /**
     * @param arr: the line
     * @param k: Alex place
     * @return: the time when Alex requires to buy all passes
     */
    buyPasses (arr: number[], k: number): number {
        let result = 0;
        for (let i = 0; i <= k; i++) {
            result += Math.min(arr[i], arr[k]);
        }
        for (let i = k + 1; i < arr.length; i++) {
            result += Math.min(arr[i], arr[k] - 1);
        }
        return result;
    }
}
