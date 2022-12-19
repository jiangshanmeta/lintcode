export class Solution {
    /**
     * @param x: the number of people who plan to buy goods A.
     * @param y: the number of people who plan to buy goods B.
     * @param z: the number of people who plan to buy goods C.
     * @return: return the maximum times they can group buy.
     */
    groupBuyTimes (x: number, y: number, z: number): number {
        return Math.min(
            Math.floor((x + y + z) / 3),
            Math.min(x, y)
        );
    }
}
