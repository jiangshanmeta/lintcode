export class Solution {
    /**
     * @param num: Number to be encoded.
     * @return: The encoded string.
     */
    encode (num: number): string {
        if (num === 0) {
            return '';
        }
        const n = Math.floor(Math.log2(num + 1));
        const rest = num - 2 ** n + 1;

        return rest.toString(2).padStart(n, '0');
    }
}
