export class Solution {
    /**
     * @param words: the words
     * @param s: the string
     * @return: the string with least number of tags
     */
    boldWords (words: string[], s: string): string {
        const marks = new Array<number>(s.length + 1).fill(0);
        for (const word of words) {
            if (word.length === 0) {
                continue;
            }
            let index = s.indexOf(word);
            while (index !== -1) {
                marks[index] += 1;
                marks[index + word.length] -= 1;
                index = s.indexOf(word, index + 1);
            }
        }
        let result = '';
        let start = false;
        for (let i = 0; i < s.length; i++) {
            if (i > 0) {
                marks[i] += marks[i - 1];
            }
            if (marks[i] > 0 && !start) {
                result += '<b>';
                start = true;
            }
            if (marks[i] === 0 && start) {
                result += '</b>';
                start = false;
            }
            result += s[i];
        }
        if (start) {
            result += '</b>';
        }

        return result;
    }
}
