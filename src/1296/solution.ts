export class Solution {
    /**
     * @param words: a string array
     * @return: the maximum product
     */
    maxProduct (words: string[]): number {
        const bits = words.map((word) => {
            let binary = 0;
            for (let i = 0; i < word.length; i++) {
                const code = word.charCodeAt(i) - 97;
                binary |= (1 << code);
            }
            return binary;
        });

        let result = 0;
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if ((bits[i] & bits[j]) === 0) {
                    result = Math.max(result, words[i].length * words[j].length);
                }
            }
        }

        return result;
    }
}
