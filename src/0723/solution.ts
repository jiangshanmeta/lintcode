export class Solution {
    /**
     * @param n: a number
     * @param d: digit needed to be rorated
     * @return: a number
     */
    leftRotate (n: number, d: number): number {
        d %= 32;
        const str = (n >>> 0).toString(2).padStart(32, '0');

        return parseInt(str.slice(d) + str.slice(0, d), 2) >> 0;
    }
}
