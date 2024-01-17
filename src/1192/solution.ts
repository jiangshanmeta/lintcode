export class Solution {
    /**
     * @param a: a string
     * @param b: a string
     * @return: return a integer
     */
    findLUSlength (a: string, b: string): number {
        if (a === b) {
            return -1;
        }
        return Math.max(a.length, b.length);
    }
}
