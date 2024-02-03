export class Solution {
    /**
     * @param m: m pillars of your temple.
     * @param woods: length of n different wood
     * @return: return the maximum height of the temple.
     */
    buildTemple (m: number, woods: number[]): number {
        let low = 0;
        let high = Math.max(...woods);
        let result = 0;
        while (low <= high) {
            const h = (low + high) >> 1;
            let count = 0;
            for (const wood of woods) {
                count += Math.floor(wood / h);
            }
            if (count >= m) {
                result = Math.max(result, h);
                low = h + 1;
            } else {
                high = h - 1;
            }
        }
        return result;
    }
}
