export class Solution {
    /**
     * @param words: a list of strings
     * @return: the longest word in words that can be built one character at a time by other words in words
     */
    longestWord (words: string[]): string {
        // 不想写前缀树
        const MAX_LENGTH = Math.max(...words.map(word => word.length));
        const groupByLength = new Array<string[]>(MAX_LENGTH + 1);
        for (const word of words) {
            const L = word.length;
            if (!groupByLength[L]) {
                groupByLength[L] = [word, ];
            } else {
                groupByLength[L].push(word);
            }
        }
        if (!groupByLength[1]) {
            return '';
        }
        groupByLength[1].sort();
        let result = groupByLength[1][0];
        for (let i = 2; i < groupByLength.length; i++) {
            if (!groupByLength[i]) {
                return result;
            }
            const indexs:number[] = [];
            for (let j = 0; j < groupByLength[i].length; j++) {
                const word = groupByLength[i][j];
                if (!groupByLength[i - 1].includes(word.slice(0, word.length - 1))) {
                    indexs.push(j);
                    continue;
                }
                if (word.length > result.length) {
                    result = word;
                } else if (word < result) {
                    result = word;
                }
            }
            groupByLength[i] = groupByLength[i].filter((_, index) => !indexs.includes(index));
        }

        return result;
    }
}
