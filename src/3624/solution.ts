export class Solution {
    /**
     * @param s: the string
     * @return: the count of substrings with one distinct letter
     */
    countLetters (s: string): number {
        let result = 0;
        let index = 0;
        while (index < s.length) {
            const c = s[index++];
            let count = 1;
            while (index < s.length && s[index] === c) {
                count++;
                index++;
            }
            result += count * (count + 1) / 2;
        }
        return result;
    }
}
