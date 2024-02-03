export class Solution {
    /**
     * @param a: an array
     * @param s: the sum
     * @return: the number of non-empty subarrays
     */
    numSubarraysWithSum (a: number[], s: number): number {
        const map = new Map<number, number>();
        map.set(0, 1);
        let res = 0;
        let sum = 0;
        for (let i = 0; i < a.length; i++) {
            sum += a[i];
            if (map.has(sum - s)) {
                res += map.get(sum - s)!;
            }
            map.set(sum, map.has(sum) ? map.get(sum)! + 1 : 1);
        }
        return res;
    }
}
