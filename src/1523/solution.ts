export class Solution {
    /**
     * @param a: Integer array
     * @param k: a integer
     * @return: return is possible to partition the array satisfying the above conditions
     */
    partitioningArray (a: number[], k: number): boolean {
        if (a.length === 0) {
            return false;
        }
        if (a.length % k !== 0) {
            return false;
        }
        const m = new Map<number, number>();
        const COUNT = a.length / k;
        for (const item of a) {
            const c = m.has(item) ? m.get(item)! + 1 : 1;
            if (c > COUNT) {
                return false;
            }
            m.set(item, c);
        }
        return true;
    }
}
