export class Solution {
    /**
     * @param ambigram: A list of paired ambigram letter.
     * @param word: A string need to be judged.
     * @return: If it is special palindrome string, return true.
     */
    ispalindrome (ambigram: string[], word: string): boolean {
        const ambigramSets = new Array<number>(26);
        for (let i = 0; i < 26; i++) {
            ambigramSets[i] = 1 << i;
        }
        for (let i = 0; i < ambigram.length; i++) {
            const code1 = ambigram[i].charCodeAt(0) - 97;
            const code2 = ambigram[i].charCodeAt(1) - 97;
            ambigramSets[code1] |= (1 << code2);
            ambigramSets[code2] |= (1 << code1);
        }

        let left = 0;
        let right = word.length - 1;
        while (left < right) {
            if ((ambigramSets[word.charCodeAt(left++) - 97] & ambigramSets[word.charCodeAt(right--) - 97]) === 0) {
                return false;
            }
        }
        return true;
    }
}
