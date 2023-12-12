export class Solution {
    /**
     * @param n: an integer
     * @param k: an integer
     * @return: how many problem can you accept
     */
    canAccept (n: number, k: number): number {
        const z = 2 * n / k;
        return Math.floor((Math.sqrt(1 + 4 * z) - 1) / 2);
    }
}
