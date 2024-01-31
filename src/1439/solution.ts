export class Solution {
    /**
     * @param n: an integer
     * @return: how many ways can we write it as a sum of consecutive positive integers
     */
    consecutiveNumbersSum (n: number): number {
        let res = 0;
        for (let i = 1; i <= n; i++) {
            const rest = n - i * (i - 1) / 2;
            if (rest <= 0) {
                break;
            }
            if (rest % i === 0) {
                res++;
            }
        }
        return res;
    }
}
