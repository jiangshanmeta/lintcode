export class Solution {
    /**
     * @param str: the str
     * @return: the letter
     */
    findLetter (str: string): string {
        const flags = new Array<number>(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (code > 64 && code < 91) {
                flags[code - 65] |= 0b10;
            } else if (code > 96 && code < 123) {
                flags[code - 97] |= 0b1;
            }
        }

        for (let i = 25; i > -1; i--) {
            if (flags[i] === 0b11) {
                return String.fromCharCode(i + 65);
            }
        }
        return '~';
    }
}
