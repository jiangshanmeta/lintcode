export class Solution {
    /**
     * @param s: a string
     * @return: the number of substrings
     */
    countBinarySubstrings (s: string): number {
        if (s.length === 0) {
            return 0;
        }
        let result = 0;
        let isStart0 = s[0] === '0';
        let count0 = 0;
        let count1 = 0;
        let index = 0;
        if (isStart0) {
            index = s.indexOf('1');
            count0 = index;
        } else {
            index = s.indexOf('0');
            count1 = index;
        }
        if (index === -1) {
            return 0;
        }
        while (index < s.length) {
            if (isStart0) {
                count1 = 0;
                while (index < s.length && s[index] === '1') {
                    count1++;
                    index++;
                }
            } else {
                count0 = 0;
                while (index < s.length && s[index] === '0') {
                    count0++;
                    index++;
                }
            }
            result += Math.min(count0, count1);
            isStart0 = !isStart0;
        }

        return result;
    }
}
