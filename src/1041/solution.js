export class Solution {
    /**
     * @param s: a string
     * @return: return a string
     */
    reorganizeString (s) {
        const counts = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            counts[s.charCodeAt(i) - 97]++;
        }
        let maxOffset = 0;
        let maxCount = 0;
        for (let i = 0; i < 26; i++) {
            if (counts[i] > maxCount) {
                maxCount = counts[i];
                maxOffset = i;
            }
        }
        if (s.length % 2 === 0 && maxCount > s.length / 2) {
            return '';
        }
        if (s.length % 2 === 1 && maxCount > Math.ceil(s.length / 2)) {
            return '';
        }
        const result = new Array(s.length);
        let index = 0;
        const maxChar = String.fromCharCode(maxOffset + 97);

        while (index < result.length && maxCount > 0) {
            result[index] = maxChar;
            index += 2;
            maxCount--;
        }
        if (index >= s.length) {
            index = 1;
        }
        counts[maxOffset] = 0;
        for (let i = 0; i < 26; i++) {
            if (counts[i] === 0) {
                continue;
            }
            const char = String.fromCharCode(i + 97);
            let count = counts[i];
            while (count > 0) {
                result[index] = char;
                index += 2;
                if (index >= s.length) {
                    index = 1;
                }
                count--;
            }
        }
        return result.join('');
    }
}
