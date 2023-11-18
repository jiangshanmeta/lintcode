export class Solution {
    /**
     * @param word: the given word
     * @return: the generalized abbreviations of a word
     *          we will sort your return value in output
     */
    generateAbbreviations (word: string): string[] {
        const result = [word, `${word.length}`, ];

        const backTracking = (prefix:string, index:number, restReplace:number, lastAbbr:boolean) => {
            if (index === word.length) {
                if (restReplace === 0) {
                    result.push(prefix);
                }
                return;
            }

            const restLen = word.length - index;
            if (!lastAbbr) {
                for (let i = 1; i <= Math.min(restReplace, restLen); i++) {
                    backTracking(`${prefix}${i}`, index + i, restReplace - i, true);
                }
            }
            backTracking(`${prefix}${word[index]}`, index + 1, restReplace, false);
        };

        for (let i = 1; i < word.length; i++) {
            backTracking('', 0, i, false);
        }

        return result;
    }
}
