export class Solution {
    /**
     * @param lengths: the lengths of sticks at the beginning.
     * @return: return the minimum number of cuts.
     */
    makeEquilateralTriangle (lengths: number[]): number {
        lengths.sort((a, b) => a - b);
        let max = 2;
        let index = 0;
        const set = new Set<number>();
        while (index < lengths.length) {
            let count = 1;
            const el = lengths[index++];
            while (index < lengths.length && lengths[index] === el) {
                count++;
                index++;
            }
            if (count > 2) {
                return 0;
            }
            if (count === 2 && index !== lengths.length) {
                max = 1;
            }
            if (el % 2 === 0 && set.has(el / 2)) {
                max = 1;
            }
            set.add(el);
        }
        return max;
    }
}
