export class Solution {
    /**
     * @param n: an integer
     * @return: return all prime numbers within n.
     */
    prime (n: number): number[] {
        const candidates = new Array<boolean>(n + 1).fill(true);
        const result:number[] = [];
        for (let i = 2; i < candidates.length; i++) {
            if (!candidates[i]) {
                continue;
            }
            result.push(i);
            for (let j = 2 * i; j < candidates.length; j += i) {
                candidates[j] = false;
            }
        }

        return result;
    }
}
