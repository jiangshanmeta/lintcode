export class Solution {
    /**
     * @param n: a positive integer
     * @return: the minimum number of replacements
     */
    integerReplacement (n: number): number {
        let result = 0;
        while (n !== 1) {
            result++;
            if (n % 2 === 1) {
                if (n === 3) {
                    result += 1;
                    break;
                } if (Math.floor(n / 2) % 2 === 1) {
                    n++;
                } else {
                    n--;
                }
            } else {
                n /= 2;
            }
        }
        return result;
    }
}
