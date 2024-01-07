export class Solution {
    /**
     * @param a: An integer array
     * @return: An integer
     */
    singleNumberII (a: number[]): number {
        const counts = new Array<number>(32).fill(0);
        for (let n of a) {
            let index = 0;
            while (n > 0) {
                counts[index++] += (n & 1);
                n >>>= 1;
            }
        }
        let res = 0;
        let base = 1;
        for (let i = 0; i < 32; i++) {
            if (counts[i] % 3 !== 0) {
                res += base;
            }
            base *= 2;
        }
        return res;
    }
}
