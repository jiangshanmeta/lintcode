export class Solution {
    /**
     * @param m: an Integer
     * @param n: an Integer
     * @return: the bitwise AND of all numbers in [m,n]
     */
    rangeBitwiseAnd (m: number, n: number): number {
        const strM = m.toString(2);
        const strN = n.toString(2);
        if (strM.length !== strN.length) {
            return 0;
        }
        let result = 0;
        let base = 2 ** (strN.length - 1);
        for (let i = 0; i < strM.length; i++) {
            if (strM[i] !== strN[i]) {
                break;
            }
            if (strM[i] === '1') {
                result += base;
            }
            base >>= 1;
        }
        return result;
    }
}
