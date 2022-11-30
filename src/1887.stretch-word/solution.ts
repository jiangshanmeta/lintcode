export class Solution {
    /**
     * @param s: the string
     * @return: The numbers of strings
     */
    stretchWord (s: string): number {
        let result = 1;
        let index = 0;
        while (index < s.length) {
            const c = s[index++];
            let count = 1;
            while (index < s.length && s[index] === c) {
                count++;
                index++;
            }
            if (count >= 2) {
                result *= 2;
            }
        }
        return result;
    }
}
