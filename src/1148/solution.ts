export class Solution {
    /**
     * @param nums: a list of integers
     * @return: return a integer
     */
    findLHS (nums: number[]): number {
        const map = new Map<number, number>();
        let res = 0;
        for (const n of nums) {
            const c1 = map.has(n) ? map.get(n)! + 1 : 1;
            const c2 = map.has(n + 1) ? map.get(n + 1)! : 0;
            const c3 = map.has(n - 1) ? map.get(n - 1)! : 0;
            if (c2 !== 0) {
                res = Math.max(res, c2 + c1);
            }
            if (c3 !== 0) {
                res = Math.max(res, c3 + c1);
            }

            map.set(n, c1);
        }
        return res;
    }
}
