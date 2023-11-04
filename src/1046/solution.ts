export class Solution {
    /**
     * @param l: an integer
     * @param r: an integer
     * @return: the count of numbers in the range [L, R] having a prime number of set bits in their binary representation
     */
    countPrimeSetBits (l: number, r: number): number {
        const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, ]);
        const count1 = (n:number) => {
            let c = 0;
            while (n) {
                c++;
                n &= (n - 1);
            }
            return c;
        };
        let result = 0;
        for (let i = l; i <= r; i++) {
            if (primes.has(count1(i))) {
                result++;
            }
        }
        return result;
    }
}
