export class Solution {
    /**
     * @param m: an integer
     * @param n: an integer
     * @param ops: List[List[int]]
     * @return: return an integer
     */
    maxCount (m: number, n: number, ops: number[][]): number {
        for (const [a, b, ] of ops) {
            m = Math.min(m, a);
            n = Math.min(n, b);
        }
        return m * n;
    }
}
