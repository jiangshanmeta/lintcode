export class Solution {
    /**
     * @param n: the given number
     * @return:  return true if it has exactly three distinct factors, otherwise false
     */
    isThreeDisctFactors (n: number): boolean {
        if (n === 1) {
            return false;
        }
        const root = Math.sqrt(n);
        if (!Number.isInteger(root)) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(root); i++) {
            if (root % i === 0) {
                return false;
            }
        }

        return true;
    }
}
