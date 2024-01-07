export class Solution {
    /**
     * @param n: non-negative integer, n posts
     * @param k: non-negative integer, k colors
     * @return: an integer, the total number of ways
     */
    numWays (n: number, k: number): number {
        if (k === 0 || n === 0) {
            return 0;
        }
        let a = 1;
        let b = 0;
        for (let i = 2; i <= n; i++) {
            const na = (k - 1) * (a + b);
            b = a;
            a = na;
        }
        return (a + b) * k;
    }
}
