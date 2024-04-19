export class Solution {
    /**
     * @param s: Source string
     * @param target: Target string
     * @return: Number of subsequences that can be spliced into target
     */
    shortestWay (s: string, target: string): number {
        const set = new Set(s);
        let indexS = 0;
        let indexT = 0;
        let count = 1;
        while (indexT < target.length) {
            if (!set.has(target[indexT])) {
                return -1;
            }
            indexS = s.indexOf(target[indexT], indexS);

            if (indexS === -1) {
                count++;
                indexS = s.indexOf(target[indexT]);
                indexS++;
            }
            indexT++;
        }
        return count;
    }
}
