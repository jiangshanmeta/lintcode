export class Solution {
    /**
     * @param v1: the speed of GGbond
     * @param v2: the speed of SuperQ
     * @param s: the speed that lollipop can add
     * @param w: the cost of lollipop
     * @return: the minimal price
     */
    getAns (v1: number, v2: number, s: number[], w: number[]): number {
        if (v1 > v2) {
            return 0;
        }
        const delta = v2 - v1;
        let result = Infinity;
        for (let i = 0; i < s.length; i++) {
            if (s[i] <= delta) {
                continue;
            }
            result = Math.min(result, w[i]);
        }
        return result;
    }
}
