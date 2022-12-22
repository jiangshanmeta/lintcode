export class Solution {
    /**
     * @param paragraph:
     * @param banned:
     * @return:
     */
    mostCommonWord (paragraph: string, banned: string[]): string {
        const bannedSet = new Set(banned);
        const map = new Map<string, number>();
        let maxCount = 0;
        let result = '';
        const buffer = [];
        paragraph = paragraph.toLowerCase() + '.';
        for (let i = 0; i < paragraph.length; i++) {
            const code = paragraph.charCodeAt(i);
            if (code > 96 && code < 123) {
                buffer.push(paragraph[i]);
            } else if (buffer.length) {
                const word = buffer.join('');
                buffer.length = 0;
                if (bannedSet.has(word)) {
                    continue;
                }
                const count = map.has(word) ? map.get(word)! + 1 : 1;
                if (count > maxCount) {
                    maxCount = count;
                    result = word;
                }
                map.set(word, count);
            }
        }

        return result;
    }
}
